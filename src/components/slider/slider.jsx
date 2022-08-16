import React from 'react'
import './slider.css'
import { motion } from 'framer-motion'
import image1 from '../props/1.jpg'
import image2 from '../props/2.jpg'
import image3 from '../props/3.jpg'
import image4 from '../props/4.jpg'
import image5 from '../props/5.jpg'
import image6 from '../props/6.jpg'

const Slider = () => {
  return (
    <motion.div className='slider-container'>
        <motion.div className='slider' drag='x' dragConstraints={{right: 0, left:-1120}} >
        {/* {images.map(image => (
            <motion.div className='item'>
                <img src={image} alt="" />
            </motion.div>
        ))} */}
        			<motion.div className="item">
                <img src={image1} alt="" />
                <p>Proyecto</p>
              </motion.div>
              <motion.div className="item">
                <img src={image2} alt="" />
                <p >Proyecto</p>
              </motion.div>
              <motion.div className="item">
                <img src={image3} alt="" />
                <p>Proyecto</p>
              </motion.div>
              <motion.div className="item">
                <img src={image4} alt="" />
                <p>Proyecto</p>
              </motion.div>
              <motion.div className="item">
                <img src={image5} alt="" />
                <p>Proyecto</p>
              </motion.div>
              <motion.div className="item">
                <img src={image6} alt="" />
                <p>Proyecto</p>
              </motion.div>

        </motion.div>
        
    </motion.div>
  ) 
}
export default Slider
