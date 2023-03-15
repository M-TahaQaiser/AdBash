import './style.css';
import '../../index.css'

function Header(){
    return(
        <div class="header-container">
            <div class="main-container">
                <div class="header-content">
                    <img src="/assets/images/logo.svg" class="main-logo" alt="logo-img"></img>
                    <div class="nav-items">
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                        <a href="#"><button>CTA HERE</button></a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;