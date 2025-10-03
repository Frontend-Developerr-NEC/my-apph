import React, { useState } from "react";
import "./header.css";
import Link from "next/link";
import Image from "next/image";
import menu from "../../../public/menu.png";
import cross from "../../../public/cross.png";
export default function Header() {
  const [sidebar, setSidebar] = useState("close");
function themeToggler(e) {
  e.preventDefault();
document.getElementById("ThemeToggler").style.position="absolute"
document.getElementById("ThemeToggler").style.right="0%"
console.log("Clicked");

}
  return (
    <>
      <header>
        <Link className="logo" href="/">
          Fleverr.<span>co</span>
        </Link>

        <button
          className="open"
          type="button"
          onClick={() => {
            setSidebar("open");
          }}
        >
          <Image src={menu} alt="=" className="menu" />
        </button>

        {sidebar == "open" && (
          <aside>
            <button
              className="close"
              onClick={() => {
                setSidebar("close");
              }}
            >
              <Image src={cross} alt="X" className="cross" />
            </button>
            <Link href="/" className="Links" onClick={() => setSidebar("close")}>
              Home
            </Link>
            <Link href="/bus_fairs/" className="Links" onClick={() => setSidebar("close")}>
              Bus Fair
            </Link>
            <Link href="/moviesHub/" className="Links" onClick={() => setSidebar("close")}>
              Movies Hub
            </Link>
            <Link href="/programerHub/" className="Links" onClick={() => setSidebar("close")}>
              Programer Hub
            </Link>
            <div className="themeContainer">
              <button type="button" className="themeToggler" id="ThemeToggler" onClick={themeToggler}>@</button>
            </div>
            <button
              className="logout"
              onClick={() => {
                localStorage.removeItem("User");
                window.location.reload();
              }}
            >
              Logout
            </button>
          </aside>
        )}
      </header>
    </>
  );
}
