import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import Resume from "../assets/GautamGupta_Resume.pdf"
import logo from "../assets/kevinRushLogo.png";
const Navbar = () => {
  return (
    <div className='mb-2 flex items-center justify-between py-6'>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-shrink-0 items-center'>
            {/* <img src={logo} alt="" className='mx-2 w-10'/> */}
            <div className="max-w-max h-[25px] rounded-2xl border-2 border-neutral-800 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  px-3 pb-6 mb-2 text-white"><a href="" download={Resume}>Resume</a></div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1.5}}
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 1.1 }}
         drag="x"
         dragConstraints={{ left: -100, right: 100 }} 
        className='flex flex-row m-8 flex-end justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/gautamhacks/"><FaLinkedin/></a>
                <a href="https://github.com/Gautam140/"><FaGithub/></a>
                <a href="https://x.com/home/"><FaXTwitter/></a>
                <a href="https://www.instagram.com/gautamgupta_1404/"><FaInstagram/></a>
        </motion.div>
    </div>
  )
}

export default Navbar
