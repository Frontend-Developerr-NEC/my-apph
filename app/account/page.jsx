"use client";
import { useEffect } from "react";
import "./page.css";
export default function page() {
  useEffect(() => {
    const StoredEmail = JSON.parse(localStorage.getItem("User")) || [];

    const email = document.getElementById("email");
    email.textContent = `${StoredEmail.Username}`.toLowerCase();

    const password = document.getElementById("password");
    password.textContent = `${StoredEmail.Password}`.toLowerCase();

    const letterUser = [];
    letterUser.push(StoredEmail.Username.split("-").join("-") || []);

    const UserLogo = document.getElementById("AccountLogo");
    UserLogo.textContent = `${letterUser[0][0]}`.toUpperCase();
  }, []);
  return (
    <>
      <section className="AccountContainer">
        <div className="AccountLogo" id="AccountLogo">
          A
        </div>
        <label htmlFor="email" >
          Username:
          <span id="email" ></span>
        </label>
        <label htmlFor="password">
          Password:
          <span id="password" ></span>
        </label>
      </section>
    </>
  );
}
