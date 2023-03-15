import './style.css';
import '../../index.css'

function Footer(){
    return(
        <div class="footer-container">
            <img src="/assets/images/logo.svg" class="logo-img" alt="logo-img"/>
            <ul>
                <li><a href="#">title here</a></li>
                <li><a href="#">title here</a></li>
                <li><a href="#">title here</a></li>
            </ul>
            <p>Copyright ©  2023  AdBash®. All rights reserved.</p>
        </div>

    );
}

export default Footer;