"use client";
import Image from "next/image";
import "./working.css";

export default function Working() {
  return (
    <>
      <section id="workingPageContainer">
        <div className="workingPageWrapper">
          <Image width={300} height={300} src="working.svg" alt="Working" />
        </div>
      </section>
    </>
  );
}
