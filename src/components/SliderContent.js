import React, {useState} from "react";
import './slider.css'
import {Modal,Button, makeStyles, withStyles} from '@material-ui/core'
import { purple } from '@material-ui/core/colors';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// estilos para el modal
const useStyles= makeStyles((theme)=>({
  modal:{
    position: 'absolute',
    width: 500,
    height: 300,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2,4,3)
    padding: '16px 32px 24px',
    // centrar modal
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  // clase para los input textfield
  textField:{
    width: '100%',
  },
  cerrar:{
    textAlign: 'center'
  }
}))
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    textAlign: 'center',
    marginTop: '-200%',
    fontSize:'14px',
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const TextTypographyH1 = withStyles({
  root: {
    color: "#000",
    fontWeight:'bold',
    borderBottom: '0.1em solid #0984a7', padding: '0.5em'
  }
})(Typography);

const TextP = withStyles({
  root: {
    color: "#000",
    marginTop:'15%'
  }
})(Typography);



function SliderContent({ activeIndex, sliderImage }) {
  // instanciamos los estilos del modal
  const styles=useStyles();

  // estado 
  const[modal, setModal]=useState(false)

  //metodo para cuando se abre y se cierra
  const abrirCerrarModal=()=>{
    setModal(!modal)
  }

  // desarrollo de la interfaz del modal
  const body=(
    <div className={styles.modal}>
      <div>
      {sliderImage.map((slide,urls) => (
          <div 
            key={urls}
            className={urls === activeIndex ? "slides active" : "inactive"}>
            <TextTypographyH1 variant="h5">{slide.title}</TextTypographyH1>    
            <Box mt={2}>      
            <TextP>{slide.description}</TextP>
            </Box>  
            <a className='btn open-project' color='primary' href={slide.imageURL}>Open project</a>
          </div>
      ))}
      </div>
      {/* <div align="right">
          <ColorButton color='primary' onClick={()=>abrirCerrarModal()}>Close</ColorButton>
          
      </div> */}
    </div>
  )
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
          >
          <img className="slide-image" src={slide.urls} alt="" target="_blank"/>
          {/* <a className="project-contain btn" href={slide.imageURL}>
          View more
          </a> */}
          <a className="project-contain btn" onClick={()=>abrirCerrarModal()}>
            View more
          </a>
          <Modal 
          open={modal}
          onClose={abrirCerrarModal}
          >
          {body}
          </Modal>
           {/* <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3> */}
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
