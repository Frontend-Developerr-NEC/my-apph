"use client";

import React from "react";
import "./scrolltop.css";

export default function ScrollTop() {
  function scrollTop() {
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
      </section>
    </>
  );
}
