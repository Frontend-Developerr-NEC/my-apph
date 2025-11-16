"use client";

import React from "react";
import "./scrolltop.css";

export default function ScrollTop() {
  document.addEventListener("DOMContentLoaded", () => {
    const scrolltopWrapper = document.querySelector(".scrolltopContainer");
    scrolltopWrapper.style.display = "none";
  });

  document.addEventListener("scroll", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const scrolltopWrapper = document.querySelector(".scrolltopContainer");
    const up = document.querySelector(".up");
    const down = document.querySelector(".down");
    // console.log(scrollY);
    const vw = window.innerWidth;
    const psh = document.querySelector("main").offsetHeight;
    const offpsh = psh / 2;

    if (vw < 768) {
      if (offpsh <= 500) {
        down.style.display = "none";
        up.style.display = "flex";
      } else {
        if (scrollY > 100 && scrollY < offpsh) {
          scrolltopWrapper.style.display = "flex";
          up.style.display = "none";
          down.style.display = "flex";
        } else if (scrollY <= 200) {
          scrolltopWrapper.style.display = "none";
        } else if (scrollY > offpsh && scrollY <= psh) {
          scrolltopWrapper.style.display = "flex";
          down.style.display = "none";
          up.style.display = "flex";
        }
      }
    }
  });
  function scrollTop() {
    // const scrolltopWrapper = document.querySelector(".scrolltopContainer");
    const psh = document.querySelector("main").offsetHeight;
    const offpsh = psh / 2;
    if (scrollY > 100 && scrollY < offpsh) {
      document.body.scrollTop = document.documentElement.scrollTo({
        top: 1586,
        behavior: "smooth",
      });
    } else if (scrollY > offpsh && scrollY <= psh) {
      document.body.scrollTop = document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  return (
    <>
      <section className="scrolltopContainer">
        <div className="scrolltopWrapper" onClick={scrollTop}>
          <span className="up">&uarr;</span>
          <span className="down">&darr;</span>
        </div>
      </section>
    </>
  );
}
