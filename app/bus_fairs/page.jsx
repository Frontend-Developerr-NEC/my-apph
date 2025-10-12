import React from 'react'
import "./page.css"
export default function BusFairs() {
  return (
    <>
       <section className='busDetails'>
         <span>TNSTC Bus Cost </span>
         <div className='busTitle'>
            <label>From</label>
            <label>To</label>
            <label>Rs</label>
         </div>
         <div className='busData'>
            <span>Gobi</span>
            <span>Sathy</span>
            <span>$16</span>
         </div>
         <div className='busData'>
            <span>Gobi</span>
            <span>Erode</span>
            <span>$22</span>
         </div>
         <div className='busData'>
            <span>Erode</span>
            <span>Arasur</span>
            <span>$33</span>
         </div>
         <div className='busData'>
            <span>Mettur</span>
            <span>Erode</span>
            <span>$36</span>
         </div>
         <div className='busData'>
            <span>Sathy</span>
            <span>Vaikal medu</span>
            <span>$37</span>
         </div>
         <div className='busData'>
            <span>Vaikal medu</span>
            <span>Erode</span>
            <span>$13</span>
         </div>

       </section>
    </>
  )
}
