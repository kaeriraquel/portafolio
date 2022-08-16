import './home.css'
import Imagen from '../props/img.jpg'
import Buttons from '../button/button'
import {BsMouse} from 'react-icons/bs'
// import { AiOutlineAntDesign } from 'react-icons/ai'
import {useState} from 'react'


function Home(){
    // const [active, setActive] = useState(false)
    const [classes, setClasses] = useState('main-img')

    const handleClick = () => {
        if(classes === "main-img"){
            setClasses('main-img active')
        } else {
            setClasses('main-img')
        }
    }

    return(
        <div id="home" className="container home-container">
            <div className="logo">
                {/* <div className={active ? "main-img active" : "main-img"} onClick={() => setActive(!active)}> */}
                <div className={classes} onClick={() => handleClick()}>

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

            <h2 id="about"><span>About Me</span><br />
                <p className='aboutme mt-5'>
                Hello! My name is Raquel Gutierrez and I'm a Mexico-based
                developer. I'm currently on some freelancing projects on hybrid mode. 
                I have a diverse set of skills, ranging from Design, to HTML + CSS + Javascript,
                all the way to PHP, custom pages development using some Frameworks and React projects.
                </p>
            </h2>
            <Buttons />
        </div>
    )
}



export default Home
