import React from 'react'
import { motion } from 'framer-motion';

const Lesson2 = () => {
    //keyframe based animation
    const parent = {
        initial: { opacity: 0, x: 0 },
        animate: {
            x: [0, 300, -300, 0],
            y: [0, 300, -300, 0],
            opacity: 1,
            transition: {
                duration: 5,
                repeat: Infinity,
                opacity: {
                    duration: 0.5 //opacity er jonno transition
                }

            }
        } //x = translate x = 300
    }
    return (
        //gesture
        <div className='h-screen flex items-center justify-center w-full '>
            <motion.div
                initial='initial'
                animate='animate'
                variants={parent}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                whileTap={{ scale: 0.8 }}
                drag //x axis borabor drag korbe y dile y axis bora bora drag korbe sudo drag dile sob axis e drag korbe
                dragSnapToOrigin //eta dile drag korar por sob somoy origin e asbe
                dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                className='w-[50px] h-[50px] bg-red-500 rounded-lg border'
            >

            </motion.div>
        </div>
    )
}

export default Lesson2