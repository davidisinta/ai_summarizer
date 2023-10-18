import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo" className="w-30 object-contain"/>

            <button 
            type="button"
            onClick={()=>window.open('https://github.com/dashboard')}
            className="black_btn"
            >
                Github
                 </button>

            </nav>

            <h1 className="head_text">
                Summarize your Articles with <br className="max-md:hidden" />
                <span className="orange_gradient"> OpenAI GPT-4</span>

            </h1>
            <h2 className="desc">
                Shorten your article with the power of GPT-4 <br/>
                and get the concise version in just a few seconds.

                </h2>
        </header>
  ) 
}

export default Hero