"use client";

import React, { useState } from "react";
import "./scrolltop.css";
import Link from "next/link";

export default function ScrollTop() {
  const [isVisible, setIsvisible] = useState(false);
  let [touch, settouch] = useState(1);

  function scrollTop() {
    setIsvisible(true);
    console.log(touch);

    settouch(++touch);

    if (touch == 6) {
      setIsvisible(true);
      document.querySelector(".scrolltopWrapper").textContent = "X";
      settouch(1);
    } else {
      setIsvisible(false);
      document.querySelector(".scrolltopWrapper").textContent = "UP";
    }

    document.body.scrollTop = document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // console.clear();
  }

  return (
    <>
      <section className="scrolltopContainer">
        <div className="scrolltopWrapper" onClick={scrollTop}>
          UP
        </div>

        {isVisible == true && (
          <>
            <div className="Link1">
              <Link href="../../about" className="scrollLinks">
                A
              </Link>
            </div>
            <div className="Link2">
              <Link href="../../bus_fairs" className="scrollLinks">
                B
              </Link>
            </div>
            <div className="Link3">
              <Link href="../../account" className="scrollLinks">
                C
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
}
