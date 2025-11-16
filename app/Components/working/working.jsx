"use client";
import Image from "next/image";
import "./working.css";

export default function Working() {
  return (
    <>
      <section id="workingPageContainer">
        <div className="workingPageWrapper">
          <span> &uarr; Page is Working &darr;</span>
          <Image
            width={300}
            height={300}
            priority={true}
            src="working.svg"
            alt="Working"
          />
        </div>
      </section>
    </>
  );
}
