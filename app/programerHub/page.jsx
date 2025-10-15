"use client";

import { useEffect } from "react";
import "./page.css";

import Image from "next/image";

import linkedin from "../../public/linkedin.png";
import github from "../../public/github.png";
export default function ProgramerHub() {
  useEffect(() => {
    const dh = document.getElementById("dh");
    const dw = document.getElementById("dw");

    dh.textContent = `${window.innerHeight.toFixed(0)}`;
    dw.textContent = `${window.innerWidth.toFixed(0)}`;

    // dataFetch();
  }, []);

  async function dataFetch() {
    const api = "http://localhost:8000/api";
    try {
      const dataApi = await fetch(api);
      const data = dataApi.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <section className="ProgrammerHubConatiner">
        <section className="FindHWContainer">
          <h4>Device Basic Information</h4>
          <label>
            Height: <span id="dh">0</span>px
          </label>
          <label>
            Width: <span id="dw">0</span>px
          </label>
        </section>

        <section className="profiles">
          <div className="Linkedin">
            <Image src={linkedin} alt="linkedin" className="linkedin" />
            <span>LinkedIn</span>
            <a
              className="a"
              href="https://www.linkedin.com/in/jaan-brigith-0454a6344"
            >
              Check Now
            </a>
          </div>

          <div className="github">
            <div className="githubimgWrapper">
              <Image src={github} alt="github" className="Github" />
            </div>
            <span>Github</span>
            <a className="a" href="https://github.com/Frontend-Developerr-NEC">
              Check Now
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
