// api.openweathermap.org/data/2.5/weather?q=lucknow&appid=f3e000eea3d5fffee17f187837f4c47a

import React, {useState , useEffect} from 'react';
import "./Temp.css";
import "./Navbar";

export default function Temp() {


    


  return (
  <>
    <article className='widget'>
        <div className='weatherIcon'>
            <i className={'wi wi-day-sunny'}></i>
        </div>
        <div className="weatherInfo">
            <div className="temperature">
            <span className='degree'>25.5&deg;</span>
        </div>
        <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">Lucknow,India</div>
        </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p><i className={'wi wi-sunset'}></i></p>
                    <p className="extra-info-leftside">19:19PM <br />Sunset</p>
                </div>
                <div className="two-sided-section">
                    <p><i className={'wi wi-humidity'}></i></p>
                    <p className="extra-info-leftside">19:19PM <br />Humidity</p>
                </div>
                <div className="two-sided-section">
                    <p><i className={'wi wi-rain'}></i></p>
                    <p className="extra-info-leftside">19:19PM <br />Pressure</p>
                </div>
                <div className="two-sided-section">
                    <p><i className={'wi wi-strong-wind'}></i></p>
                    <p className="extra-info-leftside">19:19PM <br /> Speed</p>
                </div>
            </div>
        </div>

    </article>


  </>
  )
}
