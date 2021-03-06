import './members.css'

const Members = () => {
    return(
        <div id='members' className="container members-container">
            <h1 className="member-txt">Members</h1>

            <div className="member member-1">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className='name'>Raquel</h1>
                    <h3 className='position'>Leader</h3>   
                    <h4 className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit quibusdam nemo et nihil officiis.</h4> 
                    <a href="#contact" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>           
            </div>
            
            <div className="member member-2">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className='name'>Gutierrez</h1>
                    <h3 className='position'>Leader</h3>   
                    <h4 className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit quibusdam nemo et nihil officiis.</h4> 
                    <a href="#contact" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>           
            </div>
        </div>
    )
}

export default Members