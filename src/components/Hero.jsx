import React from 'react'
import {motion} from "framer-motion"

const scaleVar={
  initial:{scale:0},
  animate:{
    scale:1,
  transition:{
    duration:1.5,
    staggerChildren:.2,
    delayChildren:.5
  }
}
}

const slideRight={
  initial:{translateX:'-125vw'},
  animate:{translateX:'0vw', transition:{duration:1}},
}

const slideUp={
  initial:{translateY:'50vh'},
  animate:{translateY:'0vh', transition:{duration:1}},
}

const fadeIn={
  initial:{opacity:0},
  animate:{opacity:1, transition:{duration:2,delay:.5}},
}


const icon = {
  hidden: {
    pathLength: 0,
    // fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    transition:{
      duration:3
    }
    // fill: "rgba(255, 255, 255, 1)"
  }
}

const Hero = () => {
  return (
    <div className="hero">
      <motion.div variants={scaleVar} initial="initial" animate="animate" className="hero-content">
        <motion.h1 variants={slideRight} className="hero-h1">Nice to meet you!</motion.h1>
        <motion.h1 variants={slideRight} className="hero-h1 h1-two">I'm <span className="underline">Adam Keyes</span>.</motion.h1>
        <motion.p variants={slideRight} className="hero-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam? Iste aliquid quas, dolore velit numquam excepturi magnam ducimus corrupti sequi officia! Sequi reiciendis nobis qui mollitia atque quasi accusantium perferendis, suscipit ipsum ad dolorum.</motion.p>

        <motion.button variants={slideUp} className="contact-btn mt-5">Contact Me</motion.button>
      </motion.div>
      <svg stroke="white"  className="circle-hero" xmlns="http://www.w3.org/2000/svg" width="129" height="129">
        <motion.circle variants={icon}
      initial="hidden"
      animate="visible" cx="830.5" cy="585.5" r="64" fill="none" stroke="#FFF" transform="translate(-766 -521)"/>
        </svg>
      {/* <div className="hero-img-tablet-wrap"> */}
      <motion.img style={{transition:'1s ease'}}  variants={fadeIn} initial="initial" animate="animate" className="hero-img" src="./images/image-profile-desktop.webp" alt="" />
      {/* </div> */}
      <svg className="green-svg"  viewBox="0 0 100 100">
      <motion.path variants={icon} initial="hidden" animate="visible" stroke="rgb(27, 236, 201)" strokeWidth="1" d="M0 0 H80" />
      </svg>
    </div>
  )
}

export default Hero