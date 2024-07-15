import React, { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const Lesson3 = () => {
    //button animation: forward button e click korle div right e move korbe
    const controls = useAnimationControls();
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle((prev) => !prev);
        if (toggle) {
            controls.start({ x: 200 });
        } else {
            controls.start({ x: 0 });
        }
    }


    // animation on mount or first render
    useEffect(() => {
        controls.start({ x: 200, transition: { duration: 2 } });
    }, [])

    return (
        <div>
            <div className='border border-red-500 size-[500px] flex flex-col justify-center'>
                <button onClick={handleToggle} className='w-24 bg-green-500 mb-10 px-2 py-3 rounded'>Forward</button>
                <motion.div
                    animate={controls}
                    className='size-24 bg-indigo-500 rounded-lg'></motion.div>
            </div>

        </div>
    )
}

export default Lesson3