import React from 'react'
import { motion, useCycle } from 'framer-motion'

const Lesson4 = () => {
    const [x, cycle] = useCycle(0, 100, -100, 300, 400, -300, -400);
    
    //first click e 100, 2nd click e -100, 3rd click e 300, 4th click e 400, 5th click e -300, 6th click e -400
    return (
        <div className='w-ful h-screen flex items-center justify-center'>
            <div className='border border-red-500 size-[500px] flex flex-col justify-center'>
                <motion.div
                    animate={{ x: x }}
                    onTap={() => cycle()}
                    className='size-24 bg-indigo-500 rounded-lg'></motion.div>
            </div>

        </div>
    )
}

export default Lesson4