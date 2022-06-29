import React from 'react'
import Carousel from 'react-elastic-carousel'
import './carousel.css'
import Item from "./Item";

import {AiFillGithub} from 'react-icons/ai'

 
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Slider(){
  return(
    
        <>
        <div className='container'>
        <h1>WEB PROJECTS</h1>
        </div>
          

          {/* <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1> */}
            <Carousel breakPoints={breakPoints} className="prueba" >
                <Item className='imagen1'>
                  <a href='https://kaeriraquel.github.io/restaurantemplate/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen9'>
                  <a href='https://kaeriraquel.github.io/galeryproducts/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen12'>
                  <a href='https://kaeriraquel.github.io/restaurant1.github.io/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen8'>
                  <a href='https://kaeriraquel.github.io/startuptemplate/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen19'>
                  <a href='https://drive.google.com/file/d/1GxbeNkhsziwVKofP4A3W_pU1lj0KvsCK/view?usp=sharing' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen7'>
                  <a href='https://drive.google.com/file/d/1DE3Ao3QIIwIddxglsS19rAccSN8jIJcJ/view?usp=sharing' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen10'>
                  <a href='https://kaeriraquel.github.io/portafolioTemplate/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen2'>
                  <a href='https://kaeriraquel.github.io/coffeelanding/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen3'>
                  <a href='https://kaeriraquel.github.io/constelation/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen4'>
                  <a href='https://kaeriraquel.github.io/lamptemplate/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>

                <Item className='imagen6'>
                    <a href='https://kaeriraquel.github.io/traveltemplate/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen13'>
                  <a href='https://kaeriraquel.github.io/darkmode/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen15'>
                  <a href='https://kaeriraquel.github.io/landingpage/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen16'>
                  <a href='https://kaeriraquel.github.io/basictemplate1/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen17'>
                  <a href='https://kaeriraquel.github.io/blog/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen11'>
                  <a href='https://kaeriraquel.github.io/projectbasictemplate/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen21'>
                  <a href='https://kaeriraquel.github.io/websiteheader/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen5'>
                  <a href='https://kaeriraquel.github.io/layoutemplate/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen3'>
                  <a href='https://kaeriraquel.github.io/constelation/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
                <Item className='imagen4'>
                  <a href='https://kaeriraquel.github.io/lamptemplate/' target="_blank">
                  <p className='parrafo'><AiFillGithub className="icon" />View project</p>
                  </a>
                </Item>
            </Carousel>
                  
        </>
      );
    }
    
