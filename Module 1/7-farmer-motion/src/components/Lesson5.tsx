import React from 'react'
import { motion, useAnimate } from 'framer-motion'
//TODO:motion charai animation kore... ekta scope define kore..
const Lesson5 = () => {
    const [scope, animate] = useAnimate();
    // here scope is a ref and animate is a function

    const handleClick = () => {
        animate([
            [scope.current, {rotate: 360}],
            [scope.current, {scale: 2}],
            [scope.current, {x: 100}],
            [scope.current, {y: 100}],
            //sequence of animation
        ])
    }

    return (
        <div className='w-ful h-screen flex items-center justify-center'>
            <div className='border border-red-500 size-[500px] flex flex-col justify-center'>
                <div
                    ref={scope}
                    onClick={handleClick}
                    className='size-24 bg-indigo-500 rounded-lg'></div>
            </div>

        </div>
    )
}

export default Lesson5