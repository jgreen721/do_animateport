import React from 'react'
import {easeIn, motion} from "framer-motion"

const navParent={
    initial:{
        opacity:0,
    },
    animate:{
    opacity:1,
    transition:{
        staggerChildren:.3,
        delayChildren:.5
    }
}
}

const navLinks ={
    initial:{
        translateY:'20vh'
    },
    animate:{
        translateY:'0',
        // border:"2px solid red"
    },
    transition:{
        duration:1.2,
        type:'spring',
        damping:2,
        stiffness:100
    }
}


const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      // fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      // fill: "rgba(255, 255, 255, 1)"
    }
  };
  

const Navbar = () => {
  return (
    <nav>
       <motion.h1 style={{transition:".5s ease"}} whileHover={{letterSpacing:".5rem"}} initial={{translateX:'-30vw'}} animate={{translateX:0,transition:{duration:1,ease:"easeIn",type:"spring",damping:6,stiffness:50}}} className="nav-name">adamkeyes</motion.h1>


       
       <motion.ul variants={navParent} initial="initial" animate="animate" className="nav-links">
           <motion.li whileHover={{y:-5}} variants={navLinks} className="nav-item">
               <a href="#">
                   <img src="./images/icon-github.svg" alt="" />
               </a>
           </motion.li>
           <motion.li whileHover={{y:-5}} variants={navLinks} className="nav-item">
               <a href="#">
                   <img src="./images/icon-frontend-mentor.svg" alt="" />

               </a>
           </motion.li>
           <motion.li whileHover={{y:-5}} variants={navLinks} className="nav-item">
               <a href="#">
                   <img src="./images/icon-linkedin.svg" alt="" />

               </a>
           </motion.li>
           <motion.li whileHover={{y:-5}} variants={navLinks} className="nav-item">
               <a href="#">
                   <img src="./images/icon-twitter.svg" alt="" />
               </a>
           </motion.li>

       </motion.ul>
    </nav>
  )
}

export default Navbar