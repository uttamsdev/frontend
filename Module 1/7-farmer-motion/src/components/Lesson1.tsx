import React from 'react'
import { motion } from 'framer-motion'

//fadeIn animation
const fadeIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 }
}
//rotate animation
const parent = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
    // transition: { type: "spring", duration: 2 }
}

const child = {
    initial: { opacity: 0, scale: 0.1 },
    animate: { opacity: 1, scale: 1 },
    
}
const Lesson1 = () => {
    return (
        <div className='h-screen w-full flex items-enter flex-col justify-center'>
            <motion.div
                initial={{ rotate: 0 }} //animation initial state start
                animate={{ rotate: 360 }}
                transition={{ type: "spring", duration: 2 }} //5 sec dhore animation colbe
                className='size-64 bg-indigo-500 rounded-lg'></motion.div>


            {/* //using variant ekta object er moddhe thake property gulo */}
            <motion.div
                variants={fadeIn}
                initial='initial' //animation initial state start
                animate='animate'
                transition={{ type: "spring", duration: 1, repeat: Infinity, repeatType: "reverse" }} //5 sec dhore animation colbe
                className='size-24 bg-red-500 rounded mt-6'></motion.div>


            {/* child vairnet  */}

            <motion.div
                initial='initial'
                animate='animate'
                variants={fadeIn}
                transition={{ duration: 2, ease: "easeInOut", delayChildren: 1, staggerChildren: 1 }} //dalayChildren: 1 sec por child gulo start hobe //straagerChildren: 1 sec por por child gulo start hobe
                className='bg-gray-500 size-24 p-2 gap-2 flex flex-wrap items-center justify-center'>
                <motion.div variants={child} className='bg-cyan-500 size-8 '></motion.div>
                <motion.div variants={child} className='bg-cyan-500 size-8'></motion.div>
                <motion.div variants={child} className='bg-cyan-500 size-8'></motion.div>
                <motion.div variants={child} className='bg-cyan-500 size-8 '></motion.div>

            </motion.div>
        </div>


    )
}

export default Lesson1