import cardImg from './assets/profile-img.png'
import emailIcon from './assets/email-icon.png'
import linkedinIcon from './assets/linkedin-icon.png'

export default function Info(){
    return(
        <div className='info'>
            <img src={cardImg}/>
            <h1 className='card-name'>Laura Smith</h1>
            <h2 className='card-sub'>Frontend developer</h2>
            <a href="#" className='card-link'>laura.website</a>
            <div >
                <button className='card-btn email'> 
                    <img src={emailIcon} className='card-icon'/>
                    <span className='card-btn-txt'>Email</span>
                </button>
                <button className='card-btn linkedin'> <img src={linkedinIcon} className='card-icon'/> <span className='card-btn-txt'>Linkedin</span></button>
            </div>
        </div>
    )
}