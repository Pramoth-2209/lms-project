import React, { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";


export const Register = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");

  const handleform = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const { state, message } = await response.json();
    setmessage((preval) => message);
    setusername("");
    setpassword("");
  };

  return (
    <>
      <form onSubmit={handleform}>
        <Input
          type={"text"}
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <Input
          type={"password"}
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <label>{message}</label>
        <Button />
      </form>
    </>
  );
};
