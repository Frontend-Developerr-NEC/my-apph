import React, { useState } from "react";
import "./header.css";
import Link from "next/link";
import Image from "next/image";
import menu from "../../../public/menu.png";

// import ThemeToggle from "../ThemeToggler";
// import home from "../../../public/home1.png";
// import calculator from "../../../public/calculator.png";
// import movies from "../../../public/clapperboard.png";
// import programmer from "../../../public/programmer.png";
// import account from "../../../public/account.png";

import logout from "../../../public/logout.png";
import x from "../../../public/x.png";

export default function Header() {
  const [sidebar, setSidebar] = useState("close");

  return (
    <>
      <header>
        <Link className="logo" href="/">
          Freelancer
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
              <Image src={x} alt="X" className="cross" />
            </button>
            <Link
              href="/"
              className="Links homeLink"
              onClick={() => setSidebar("close")}
            >
              {/* <Image src={home} alt="=" className="home" /> */}
              HOME
            </Link>

            {/* <Link
              href="/about/"
              className="Links"
              onClick={() => setSidebar("close")}
            >
              ABOUT ME
            </Link> */}

            <Link
              href="/moviesHub/"
              className="Links"
              onClick={() => setSidebar("close")}
            >
              {/* <Image src={movies} alt="=" className="movies" /> */}
              MOVIES HUB
            </Link>

            <Link
              href="/calculator/"
              className="Links"
              onClick={() => setSidebar("close")}
            >
              {/* <Image src={calculator} alt="=" className="calculator" /> */}
              CALCULATOR
            </Link>

            <Link
              href="/todo/"
              className="Links"
              onClick={() => setSidebar("close")}
            >
              TODO LIST
            </Link>

            <Link
              href="/cards/"
              className="Links"
              onClick={() => setSidebar("close")}
            >
              CARDS
            </Link>

            {/* <ThemeToggle /> */}

            {/* <Link
              href="/account/"
              className="Links"
              onClick={() => setSidebar("close")}
            >
              Account
            </Link> */}

            <button
              className="logout"
              onClick={() => {
                localStorage.removeItem("User");
                window.location.reload();
              }}
            >
              <Image src={logout} alt="=" className="Logout" />
              Logout
            </button>
          </aside>
        )}
      </header>
    </>
  );
}
