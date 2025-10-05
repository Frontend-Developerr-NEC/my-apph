"use client";

import "./globals.css";
import Header from "./Components/Header/header";
import bcrypt from "bcryptjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import register from "../public/add-user.png";
import login from "../public/login-.png";

export default function RootLayout({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pageToggle, setPageToggle] = useState("Register");

  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("User")) {
      setPageToggle("HomePage");
    }
  }, [router]);

  async function submitHandler(e) {
    e.preventDefault();
    let ls = JSON.parse(localStorage.getItem("LoginID"));
    const compareUsername = await bcrypt.compare(username, ls.Username);
    const comparePassword = await bcrypt.compare(password, ls.Password);

    if (
      !username == "" &&
      !password == "" &&
      !compareUsername &&
      !comparePassword
    ) {
      const salt = 10;
      const hassUsername = await bcrypt.hash(username, salt);
      const hassPassword = await bcrypt.hash(password, salt);

      const userData = { Username: hassUsername, Password: hassPassword };
      localStorage.setItem("User", JSON.stringify(userData));
      localStorage.setItem("LoginID", JSON.stringify(userData));
      setUsername("");
      setPassword("");
      setPageToggle("HomePage");
    } else if (compareUsername && comparePassword) {
      alert("Account Is Already Exists");
    } else {
      alert("Fields Are Empty");
    }
  }

  async function loginHandler(e) {
    e.preventDefault();
    try {
      let ls = JSON.parse(localStorage.getItem("LoginID"));
      const compareUsername = await bcrypt.compare(username, ls.Username);
      const comparePassword = await bcrypt.compare(password, ls.Password);
      if (compareUsername && comparePassword) {
        setPageToggle("HomePage");
      }
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <html lang="en">
      <title>Freelancer</title>
      {/* <link rel="shortcut icon" href={freelancer} type="image/x-icon" /> */}
      <body>
        {pageToggle == "Register" && (
          <form className="formRegister">
            <h2 style={{ textAlign: "center" }}>Register</h2>
            <label>
              Username
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password
              <input
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              type="click"
              className="RegisterLink"
              onClick={submitHandler}
            >
              <Image src={register} alt="=" className="register" />
              Register
            </button>
            <button
              type="click"
              className="loginRef"
              onClick={(e) => {
                e.preventDefault();
                setPageToggle("Login");
              }}
            >
              I Already Have An Account!
            </button>
          </form>
        )}
        {pageToggle == "Login" && (
          <form className="formLogin" onSubmit={submitHandler}>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <label>
              Username
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password
              <input
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="click" className="LoginLink" onClick={loginHandler}>
              <Image src={login} alt="=" className="login" />
              Login
            </button>
            <button
              type="click"
              className="RegisterRef"
              onClick={(e) => {
                e.preventDefault();
                setPageToggle("Register");
              }}
            >
              I Don't Have An Account
            </button>
          </form>
        )}
        {pageToggle == "HomePage" && (
          <>
            <Header />
            <main>{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
