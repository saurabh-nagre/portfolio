import React from 'react';
import "./resume.css";
import Mail from '../assets/mail-logo.png';
import Insta from '../assets/instagram.png';
export default function Resume(props){
    return(
        <div className={`bg-${props.mode} resume`}>
            <div className='dash row'>
                <div className='col'><h6 className={`${props.mode}`} >Take a look on Resume</h6></div>
                    <div className='col'>
                    
                    <a  href='https://drive.google.com/file/d/1MOvFTdE_bjbvmsEahJbgQ1M8WjHR1Taf/view' target={'_blank'} rel="noreferrer">
                            <button className={`${props.mode} mybtn btn btn-secondary`}>Resume</button>
                        </a>
                </div>
            </div>
            <div className='row center'>
                <div className={`${props.mode} txt`}>Stay Connected</div>
                    <a className='mail' href='mailto:nagre.saurabh.10@gmail.com'><img className='logo flt' src={Mail} alt="Mail"/></a>
                    <a className='insta' href='https://www.instagram.com/mr.saurabh_nagre/'><img className='logo' src={Insta} alt="Instagram"/></a>
             </div>
        </div>
    );
}