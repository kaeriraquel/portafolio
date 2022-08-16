import './contact.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai' 
 
function Contact(){
    return(
        <div id='contact' className="container contact-container">
            <h1>CONTACT ME</h1>
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/erika-raquel-gutierrez-aguilar-a0152b115" className="contact linkedin">
                    <AiFillLinkedin className="icon" />
                    <h2>LinkedIn</h2>
                </a>

                <a href="https://wa.me/528444598594?text=Hola!%20Raquel%20,%20buen%20día!." className="contact whatsapp">
                    <AiOutlineWhatsApp className="icon" />
                    <h2>WhatsApp <span>+52 844-459-8594</span></h2>
                </a>

                <a href="https://github.com/kaeriraquel/PROYECTOS-WEB.git" className="contact instagram">
                    <AiFillGithub className="icon" />
                    <h2>GitHub <span>Project Repository</span></h2>
                </a>

            </div>
        </div>
    )
}

export default Contact