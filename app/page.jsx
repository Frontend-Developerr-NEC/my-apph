import s from "./page.module.css";

import Image from "next/image";

import linkedin from "../public/linkedin.png";
import github from "../public/github.png";

export default function Home() {
  return (
    <>
      <section className={s.profiles} id="profiles">
        <div className={s.Linkedin}>
          <Image
            src={linkedin}
            alt="linkedin"
            className={s.linkedin}
            />
            <span>LinkedIn</span>
          <a href="http://">Check Now</a>
        </div>

        <div className={s.github} >
          <div className={s.githubimgWrapper}>
            <Image
              src={github}
              alt="github"
              className={s.Github}
              />
          </div>
              <span>Github</span>
          <a href="http://">Check Now</a>
        </div>
      </section>
    </>
  );
}
