"use client"

import React, { useEffect } from 'react'
import "./page.css"
export default function ProgramerHub() {
  useEffect(()=>{
    const dh = document.getElementById("dh")
    const dw = document.getElementById("dw")

    dh.textContent=`${window.innerHeight.toFixed(0)}`
    dw.textContent =`${window.innerWidth.toFixed(0)}`
  },[])
  return (
    <>
    <section className='ProgrammerHubConatiner'>
    <section className='FindHWContainer'>
      <h4>Device Basic Information</h4>
      <label>Height: <span id='dh'>0</span>px</label>
      <label>Width: <span id='dw'>0</span>px</label>
    </section>
    </section>
    </>
  )
}
