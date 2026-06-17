const express = require("express");
const cors = require("cors");
const session = require("express-session");
const mysql = require("mysql2");
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(
  session({
    secret: "lmsportalbypramoth",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 2,
    },
  }),
);
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "lms",
});

connection.connect((err) => {
  if (err) {
    console.error("Connection failed: " + err.stack);
    return;
  }
  //   console.log('Connected to MySQL as id ' + connection.threadId);
  console.log("connected successfully");
});

app.get("/", (req, res) => {
  const { dno, password } = req.body;
  if (!dno || !password) {
    return res.status(400).json({ message: "please enter credentials" });
  }
  connection.query(
    "select * from users where dno=? and password=?",
    [dno, password],
    (err, result) => {
      if (err) return res.status(500).json({ message: "database error" });
      if (result.length > 0) {
        const user = result[0];
        req.session.user = {
          id: user.user_id,
          name: user.name,
          role: user.role,
        };
        return res.json({ loggedin: true, user: req.session.user });
      } else {
        return res.status(401).json({ message: "invalid credentials" });
      }
    },
  );
  res.send("hello world");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ state: "success", message: "registation successfull" });
});

app.get("/navbar", (req, res) => {
  connection.query(
    "select n.id,n.name,n.url,n.icon,n.isActive,n.role from users u left join navbar n on u.role=n.role where u.id=?",[10], // session.id add pannanum daa marathuratha
    (err, result) => {
      if (err) throw err;
      res.json(result);
    },
  );
});

app.post("/registerclass", (req, res) => {
  const { className, departmentId, classIncharge } = req.body;
  connection.query(
    "insert into class(class_name,class_department_id,incharge)values(?,?,?)",
    [className, departmentId, classIncharge],
    (err, result) => {
      if (err) {
        console.error("Database error:"+ err);
        return res.status(500).json({ message: "Database insertion failed" });
      }
      res.json({ message: "successfully registered" });
    },
  );
});

app.post("/registerStaff",(req,res)=>{
    const{userId,departmentId,position}=req.body;
    connection.query("insert into staff(staff_user_id,staff_department_id,position) values(?,?,?)",[userId,departmentId,position],(err,result)=>{
        if(err){
            return res.status(500).json({message:"database error"+ err});
        }
        res.json({message:"successfully registered"})
    })
    
})

app.post("/registerStudent",(req,res)=>{
    const{userId,classId,batch,phoneNo,address,collegeMailId}=req.body;
    connection.query("insert into student(s_user_id,s_class_id,batch,phone,address,college_email_id)values(?,?,?,?,?,?)",[userId,classId,batch,phoneNo,address,collegeMailId],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).json({message:"database error"})
         
            
        }
        res.json({message:"successfully registered"})
    })
    
})
app.post("/registerDepartment", (req, res) => {
  const { departmentName, departmentCode } = req.body;
  connection.query(
    "insert into department(department_name,department_code)values(?,?)",
    [departmentName, departmentCode],
    (err, result) => {
      if (err) {
        console.log("db error at registerdepartment " + err);
        return res
          .status(500)
          .json({ message: "database insertion failed " + err });
      }
      res.json({ message: "successfully registered" });
    },
  );
});

app.post("/registerSubject",(req,res)=>{
    const{subjectName,subjectCode,semester,isElective,departmentId}=req.body;
    connection.query("insert into subject(subject_name,subject_code,semester,is_elective,subject_department_id)values(?,?,?,?,?)",[subjectName,subjectCode,semester,isElective,departmentId],(err,result)=>{
        if(err){
            console.log("database error: "+err);
            return res.status(500).json({message:"database error"})
        }
        res.json({message:"successfully registered"})
    })
    
})

app.post("/regiStaffSubject",(req,res)=>{
    const{staffId,subjectId}=req.body;
    connection.query("insert into staff_subject(ss_staff_id,ss_subject_id)values(?,?)",[staffId,subjectId],(err,result)=>{
        if(err){
            console.log("database error: "+err);
            return res.status(500).json({message:"database error"});
        }
        res.json({message:"successfully reigstered"})   
    })
    
})

app.post("/registerSubjectClass",(req,res)=>{
  const{classId,staffSubjectId}=req.body;
  connection.query("insert into subject_class(sc_class_id,sc_staff_subject_id) values (?,?)",[classId,staffSubjectId],(err,result)=>{
    if(err){
      console.log(err);
      return res.status(500).json({message:"database error"});
    }
    res.json({message:"successfully registered"});
  })
  
  
})

app.post("/registerStudentElective",(req,res)=>{
  const{studentId,staffSubjectId}=req.body;
  // console.log(studentId,staffSubjectId);

  connection.query("insert into student_elective(se_student_id,staff_subject_id)values(?,?)",[studentId,staffSubjectId],(err,result)=>{
    if(err){
      console.log(err);
      return res.status(500).json({message:"database error"});
    }
    res.json({message:"successfully registered"})
  })
  
})
app.get("/staffsandstudents", (req, res) => {
  // if (!req.session.user) {
    // res.status(401).json({ message: "unauthorized", loggedin: false });
  // }

  // const id = req.session.user.id;
  // const role = req.session.user.role;
  try {
    connection.query(`select 
        u.name As student_name,sub.subject_name,sub.subject_code,sub.semester,uu.name As staff_name
        from student s 
        left join users u on s.student_id=u.id 
        left join subject_class sc on s.s_class_id=sc.sc_class_id
        left join subject sub on sc.sc_staff_subject_id=sub.subject_id
        left join staff_subject ss on sc.sc_staff_subject_id=ss.staff_Subject_id
        left join staff st on ss.ss_staff_id=st.staff_id
        left join users uu on st.staff_user_id=uu.id 
        where u.id=?`,
    [1],
    (err, results) => {
      if (err) throw err;
      res.json(results);
      // console.log(results);
      
    },
  );
  } catch (error) {
    console.log(error);
    
  }
  
});

app.get("/staffSubjectClass",(req,res)=>{
  try {
    connection.query(`select sub.subject_name,sub.subject_code,sub.semester,c.class_name from staff s
left join staff_subject ss on s.staff_id=ss.ss_staff_id
left join subject sub on ss.ss_subject_id=sub.subject_id
left join subject_class sc on sub.subject_id=sc.sc_staff_subject_id 
left join class c on sc.sc_staff_subject_id=c.class_id
 where staff_id=?`,[1],(err,result)=>{    // session.id add pannanum daa marathuratha
  if(err){
    console.log("staffsubjectclass: "+err);
    return res.status(500).json({message:"database error in staffsubjectclass"})
  }
  res.json(result)
 })       
  } catch (error) {
    
  }
})

app.listen(5000, () => {
  console.log("app running in localhost 5000");
});




// select sub.subject_name,c.class_name from staff s
// left join staff_subject ss on s.staff_id=ss.ss_staff_id
// left join subject sub on ss.ss_subject_id=sub.subject_id
// left join subject_class sc on sub.subject_id=sc.sc_staff_subject_id 
// left join class c on sc.sc_staff_subject_id=c.class_id
//  where staff_id=1
// for staff dashboard