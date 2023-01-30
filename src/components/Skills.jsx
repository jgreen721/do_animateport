import React, {useEffect, useRef} from 'react'
import {FaHtml5,FaCss3,FaJs,FaNode,FaReact,FaSass} from "react-icons/fa"
import {motion,useAnimation} from "framer-motion";







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
        translateX:'-100vw'
    },
    animate:{
        translateX:'0',
        // border:"2px solid red"
    },
    transition:{
        duration:1.2,
        type:'spring',
        damping:2,
        stiffness:100
    }
}


const skillsHeaderVar={
    fadeaway:{
        opacity:0,
        scale:0,
    },
    fadein:{
        opacity:1,
        scale:1,
        transition:{
            duration:2
        }
    }
}


const ringsVar={
    initialring:{
        pathLength:0
    },
    animatering:{
        pathLength:1,
        transition:{
            duration:2
        }
    }
}
const Skills = () => {
    var skills=[
        {id:1,name:"HTML",exp:5,icon:<FaHtml5/>,color:"orange"},
        {id:2,name:"CSS",exp:4,icon:<FaCss3/>,color:"blue"},
        {id:3,name:"Javascript",exp:4,icon:<FaJs/>,color:"yellow"},
        {id:4,name:"React",exp:4,icon:<FaReact/>,color:"steelblue"},
        {id:5,name:"Sass",exp:3,icon:<FaSass/>,color:"red"},
        {id:6,name:"Node",exp:4,icon:<FaNode/>,color:"green"},
    ]



    const controls = useAnimation();
    const skillsRef = useRef();

    const showSkills = (e)=>{
        if(e[0].isIntersecting){
          console.log("show skills")
          controls.start("animate")
          controls.start("animatering")
          controls.start("fadein")
        }
        else{
          console.log("hide em!")
          controls.start("initial")
          controls.start("initialring")
          controls.start("fadeaway")
        }
      }
      const skillObserver = new IntersectionObserver(showSkills)
    
      useEffect(()=>{
            skillObserver.observe(skillsRef.current)
    
      },[])
  return (
    <div className="skills-container">
        <svg className="rings-svg" xmlns="http://www.w3.org/2000/svg" width="530" height="129">
            <g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25">
                <motion.ellipse initial={controls} animate={controls} variants={ringsVar} cx="265" cy="40" rx="264.5" ry="39.5"/>
                <motion.ellipse initial={controls} animate={controls} variants={ringsVar} cx="315" cy="52" rx="264.5" ry="39.5"/>
                <motion.ellipse initial={controls} animate={controls} variants={ringsVar} cx="265" cy="65" rx="264.5" ry="39.5"/>
                <motion.ellipse initial={controls} animate={controls} variants={ringsVar} cx="265" cy="77" rx="264.5" ry="39.5"/>
                <motion.ellipse initial={controls} animate={controls} variants={ringsVar} cx="265" cy="89" rx="264.5" ry="39.5"/></g>
                </svg>        
        <div  className="skills">
            <motion.h2 initial={controls} variants={skillsHeaderVar} animate={controls} className="skills-header">Skills</motion.h2>
            <motion.ul  ref={skillsRef}  variants={navParent} initial={controls} animate={controls} className="skills-list">
            {skills.map(s=>(
                <motion.li variants={navLinks} className="skill-card" key={s.id}>
                    <h1 className="skill-name">{s.name}</h1>
                    <p className="skill-blurb">{s.exp} Years Experience</p>
                    <div className="overlay">
                        <h2 style={{color:s?.color}} className="skill-icon">{s.icon}</h2>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
        </div>
    </div>
  )
}

export default Skills