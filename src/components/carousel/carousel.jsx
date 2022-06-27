import React from 'react'
import Carousel from 'react-elastic-carousel'
import './carousel.css'
import Item from "./Item";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Slider(){
  return(
    
        <>
          {/* <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1> */}
            <Carousel breakPoints={breakPoints}>

                <Item className='imagen1'>
                  <p>Proyecto</p>
                </Item>
                <Item className='imagen2'>
                  <p>Proyecto</p>
                </Item>
                <Item className='imagen3'>
                  <p>Proyecto</p>
                </Item>
                <Item className='imagen4'>
                  <p>Proyecto</p>
                </Item>
                <Item className='imagen5'>
                  <p>Proyecto</p>
                </Item>
                <Item className='imagen6'>
                  <p>Proyecto</p>
                </Item>
                <Item className='imagen7'>
                  <p>Proyecto</p>
                </Item>
                <Item className='imagen8'>
                  <p>Proyecto</p>
                </Item>
            </Carousel>

        </>
      );
    }
    
