import {useState} from 'react'
import { Modal,Button } from 'react-bootstrap'
import './carousel.css'

function ItemModal({tecnologias,imageURL,nombreImg,titulo, children,link}) {
    const [smShow, setSmShow] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);
    return (
      <>
        <Button onClick={() => setSmShow(true)} className="me-2">SHOW</Button>
       
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              {
                <h1>{titulo}</h1>
              }
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
          {
            
          }
          
          <div>
          {tecnologias.map((tecnologia) => {
            return (<div><h1>{tecnologia}</h1></div>)
          })}
          </div>
          </Modal.Body>
          
        </Modal>
      </>
    );
  }
  
  
  export default ItemModal