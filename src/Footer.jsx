import instagramIcon from './assets/Instagram icon.png'
import facebookIcon from './assets/Facebook icon.png'
import githubIcon from './assets/GitHub icon.png'
import twitterIcon from './assets/Twitter icon.png'
export default function Footer(){
    return (
        <div className='footer'>
            <div className='footer-contain'>
                <img src={instagramIcon} href='https://instagram.com/kehlani'/>
                <img src={facebookIcon} href='https://facebook.com/kehlani'/>
                <img src={githubIcon} href='https://github.com/kelani34'/>
                <img src={twitterIcon} href='https://twitter.com/kehlani'/>
            </div>
        </div>
    )
}