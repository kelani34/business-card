import cardImg from './assets/profile-img.png'
import emailIcon from './assets/email-icon.png'
import linkedinIcon from './assets/linkedin-icon.png'

export default function Info(){
    return(
        <div className='info'>
            <img src={cardImg}/>
            <h1 className='card-name'>Shina-Kelani Taiwo</h1>
            <h2 className='card-sub'>Fullstack developer</h2>
            <a href="https://darthcoder.netlify.app" className='card-link'>kelani.website</a>
            <div >
                <a href='mailto:kelanitaiwo34@gmail.com'>
                    <button className='card-btn email'> 
                        <img src={emailIcon} className='card-icon'/>
                        <span className='card-btn-txt'>Email</span>
                    </button>
                </a>
                <a href='https://linkedin.com/in/kelanitaiwo'>
                    <button className='card-btn linkedin'> 
                        <img src={linkedinIcon} className='card-icon'/> 
                        <span className='card-btn-txt'>Linkedin</span>
                    </button>
                </a>
            </div>
        </div>
    )
}