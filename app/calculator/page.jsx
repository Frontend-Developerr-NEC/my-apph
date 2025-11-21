"use client";
import { useState } from "react";
import "./page.css";

export default function Calculator() {
  // let display = document.getElementById("display");
  let [sum, setSum] = useState("");
  return (
    <>
      <section className="calculatorContainer">
        <section className="calculatorWrapper ">
          <input
            type="text"
            id="display"
            value={sum}
            onChange={(e) => {
              e.preventDefault();
              e.target.value = Number(sum).toFixed(0);
            }}
          />
          <span id="backSum"></span>
          <div className="r1">
            <button
              type="button"
              className="operator"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "+"));
              }}
            >
              &#43;
            </button>
            <button
              type="button"
              className="numbers"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "7"));
              }}
            >
              7
            </button>
            <button
              type="button"
              className="numbers"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "8"));
              }}
            >
              8
            </button>
            <button
              type="button"
              className="numbers"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "9"));
              }}
            >
              9
            </button>
          </div>

          <div className="r2">
            <button
              type="button"
              className="operator"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "-"));
              }}
            >
              &minus;
            </button>
            <button
              type="button"
              className="numbers"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "6"));
              }}
            >
              6
            </button>
            <button
              type="button"
              className="numbers"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "5"));
              }}
            >
              5
            </button>
            <button
              type="button"
              className="numbers"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "4"));
              }}
            >
              4
            </button>
          </div>
          <div className="r3">
            <button
              type="button"
              className="operator"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "*"));
              }}
            >
              &times;
            </button>
            <button
              type="button"
              className="numbers"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "3"));
              }}
            >
              3
            </button>
            <button
              type="button"
              className="numbers"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "2"));
              }}
            >
              2
            </button>
            <button
              type="button"
              className="numbers"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "1"));
              }}
            >
              1
            </button>
          </div>
          <div className="r4">
            <button
              type="button"
              className="operator"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "/"));
              }}
            >
              &divide;
            </button>
            <button
              type="button"
              className="operator"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "."));
              }}
            >
              .
            </button>
            <button
              type="button"
              className="numbers"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "0"));
              }}
            >
              0
            </button>

            <button
              type="button"
              className="operator"
              onClick={(e) => {
                e.preventDefault();
                // setSum(sums => String(sums).slice(0, String(sums).length - 1));
                setSum((prevSum) =>
                  String(prevSum).slice(0, String(prevSum).length - 1)
                );
              }}
            >
              &#8592;
            </button>
          </div>
          <div className="r5">
            <button
              type="button"
              className="operator"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += "("));
              }}
            >
              (
            </button>
            <button
              type="button"
              className="operator"
              onClick={(e) => {
                e.preventDefault();
                setSum((sum += ")"));
              }}
            >
              )
            </button>
            <button
              type="button"
              className="operator"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("backSum").textContent = "";
                setSum("");
              }}
            >
              C
            </button>
            <button
              type="button"
              className="operator"
              onClick={(e) => {
                e.preventDefault();

                document.getElementById("backSum").textContent = `${sum}`;
                try {
                  setSum(eval(sum));
                } catch (error) {
                  setSum("Error");
                }
              }}
            >
              =
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
