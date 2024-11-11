import React from 'react'
import ReactDOM from 'react-dom/client'
import './Home.css'
const Home = () => {
    return (
        <div className='Name'>
            <div>
            <h1>Hi, I am <br /><span className='Emeka'>Joseph Emeka Kamange</span></h1> <br />
            <p>I'm a dedicated full-stack developer with a passion for crafting elegant and efficient <br /> web applications.</p> <br /> 
            <p>I have a strong foundation in <span>HTML, CSS, JavaScript, React</span> </p> <br />
           <p>I enjoy collaborating with cross-functional teams to deliver innovative solutions.</p> 

           <div className='Icons'>
            <img src="/Html.webp" alt="" />
            <img src="/figma_logo_icon_170157.webp" alt="" />
            <img src="/react_icon_130845.webp" alt="" />
            <img src="/javascript_icon_130900.webp" alt="" />
           </div>
           </div>
           <div className='copy'>
            <img src="/render2.png" alt="" />
           </div>
        </div>
    )
}

export default Home;