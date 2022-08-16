import './footer.css'
import { BsMouse } from 'react-icons/bs'
// import { BsInstagram } from 'react-icons/bs'
// import { FaFacebookF } from 'react-icons/fa'
// import { TiSocialDribbble } from 'react-icons/ti'
// import { TiSocialYoutube } from 'react-icons/ti'
// import { TiSocialGithub } from 'react-icons/ti'

function Footer(){
    return(
        <div id='footer' className="container footer-container">
                        
            <h1>That's all :)
                <a href="#home">
                    <h2>
                        <BsMouse />- Scroll up-
                    </h2>
                </a>
            </h1>
            {/* <div className="social-links">

                <a href="www.youtube.com">
                    <BsInstagram className='social'/>
                </a>
                <a href="www.youtube.com">
                    <FaFacebookF className='social'/>
                </a>
                <a href="www.youtube.com">
                    <TiSocialDribbble className='social'/>
                </a>
                <a href="www.youtube.com">
                    <TiSocialGithub className='social'/>
                </a>
                <a href="www.youtube.com">
                    <TiSocialYoutube className='social'/>
                </a>
            </div> */}

        </div>
    )
}

export default Footer