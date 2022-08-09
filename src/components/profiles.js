import LinkedinLogo from '../assets/linkedin.png';
import LeetcodeLogo from '../assets/leetcode.jpg';
import GithubLogo from '../assets/github.jpg';
import CodechefLogo from '../assets/codechef.jpg';
import './profiles.css';

export default function profiles(){
    return(
        <div>
            <ul className="nav flex-column profiles">
                <li className="nav-item">
                    <a  href="https://in.linkedin.com/in/saurabh-nagre" target="_blank" rel='noreferrer'>
                        <img className='links' src={LinkedinLogo} alt="saurabh-nagre"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a  href="https://leetcode.com/saurabhnagre196/" target="_blank" rel='noreferrer'>
                        <img className='links' src={LeetcodeLogo} alt="saurabhnagre196"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a  href="https://github.com/saurabh-nagre" target="_blank" rel='noreferrer'>
                        <img className='links' src={GithubLogo} alt="saurabh-nagre"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a  href="https://www.codechef.com/users/saurabh_nagre" target="_blank" rel='noreferrer'>
                        <img className='links' src={CodechefLogo} alt="saurabh-nagre"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}