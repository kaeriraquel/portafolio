import './home.css'
import Imagen from '../props/img.jpg'
import Buttons from '../button/button'
import {BsMouse} from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'


function Home(){
    return(
        <div id="home" className="container home-container">
            <div className="logo">
                <div className="main-img">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>

                <img src={Imagen} alt="" />
            </div>

            <a href="#footer" className="scroll-down">
                <hr />
                <h5>scroll down</h5>
                <BsMouse className='scroll' />
                <hr />
            </a>

            <h2><span>About Me</span><br />
                <p className='aboutme mt-5'>
                Hello! My name is Raquel Gutierrez and I'm a Saltillo Coah Mex-based
                developer. If I'm not freelancing at some projects,
                I'm working remotely on projects or hybrid mode. 
                I have a diverse set of skills, ranging from Design, to HTML + CSS + Javascript,
                all the way to PHP, custom pages development using some Frameworks.
                </p>
            </h2>

            <Buttons />
        </div>
    )
}
// const toggle = document.querySelector('.main-img')
// toggle.addEventListener('click', () => {
//     toggle.classList.toggle('active')
// })


export default Home
