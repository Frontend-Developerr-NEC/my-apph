import s from "./page.module.css";
import Image from "next/image";
import react from "../public/react.png";
import nextjs from "../public/nextJs.png";
import github from "../public/github.png";
import vercel from "../public/vercel.png";
export default function Home() {
  return (
    <>
      <section className={s.programmingLanguage}>
        <div className={s.ReactWrapper}>
          <Image src={react} className={s.reactLogo} alt="react" />
          <h4>React</h4>
          <p>
            React is the library for web and native user interfaces. Build user
            interfaces out of individual pieces called components written in
            JavaScript. React is designed to let you seamlessly combine
            components written by independent people, teams, and organizations.
          </p>
        </div>

        <div className={s.NextjstWrapper}>
          <Image src={nextjs} className={s.nextjsLogo} alt="nextjs" />
          <h4>NEXT.JS</h4>
          <p>
            Next.js is a full-stack React framework that enables you to create
            high-quality web applications with built-in optimizations, data
            fetching, server actions, routing, and more. Learn Next.js features,
            deploy to Vercel, and explore templates and showcases.
          </p>
        </div>

        <div className={s.GithubtWrapper}>
          <Image src={github} className={s.githubLogo} alt="github" />
          <h4>Github</h4>
          <p>
            GitHub is a platform that allows developers to create, store,
            manage, and share their code using version control. It is widely
            used for open source software development and offers various tools
            for collaboration, project management, and security.
          </p>
        </div>

        <div className={s.VercelWrapper}>
          <Image src={vercel} className={s.vercelLogo} alt="vercel" />
          <h4>Vercel</h4>
          <p>
            Vercel is a cloud service that lets you build, scale, and secure web
            apps with fast performance and global reach. You can use Vercel's
            tools and templates to deploy from Git or CLI, integrate with
            various platforms, and optimize your rendering and observability.
          </p>
        </div>
      </section>
    </>
  );
}
