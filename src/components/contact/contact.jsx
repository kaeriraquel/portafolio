import './contact.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

function Contact(){
    return(
        <div id='contact' className="container contact-container">
            <h1>CONTACT ME</h1>
            <div className="contact-links">
                {/* <link rel="stylesheet" href="www.linkedin.com/in/erika-raquel-gutierrez-aguilar-a0152b115" /> */}
                <a href="www.linkedin.com/in/erika-raquel-gutierrez-aguilar-a0152b115" className="contact linkedin">
                    <AiFillLinkedin className="icon" />
                    <h2>LinkedIn <span>Random Text</span></h2>
                </a>

                <a href="www.youtube.com" className="contact whatsapp">
                    <AiOutlineWhatsApp className="icon" />
                    <h2>WhatsApp <span>844-459-8597</span></h2>
                </a>

                <a href="www.youtube.com" className="contact instagram">
                    <AiFillGithub className="icon" />
                    <h2>GitHub <span>Random_Text</span></h2>
                </a>

            </div>
        </div>
    )
}

export default Contact