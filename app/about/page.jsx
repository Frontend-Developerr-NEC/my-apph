"use client";

import "./page.css";

import Image from "next/image";

import linkedin from "../../public/linkedin.png";
import github from "../../public/github.png";
export default function ProgramerHub() {

  return (
    <>
      <section className="ProgrammerHubConatiner">

        <section className="profiles">
          <div className="Linkedin">
            <Image src={linkedin} alt="linkedin" className="linkedin" />
            <span>LinkedIn</span>
            <a
              className="a"
              href="https://www.linkedin.com/in/jaan-brigith-0454a6344"
              target="_new"
            >
              Check Now
            </a>
          </div>

          <div className="github">
            <div className="githubimgWrapper">
              <Image src={github} alt="github" className="Github" />
            </div>
            <span>Github</span>
            <a className="a" href="https://github.com/Frontend-Developerr-NEC"
              target="_new"
              >
              Check Now
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
