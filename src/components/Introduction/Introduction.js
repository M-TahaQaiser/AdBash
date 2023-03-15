import './style.css';
import '../../index.css'

function Introduction(){
    return(
        <div class="main-container">
            <div class="intro-container">
                <div class="intro-txt">
                    <h1><span>The leading Ad Network</span><br/>tailor-built for the Web3<br/>ecosystem</h1>
                    <div class="intro-img-txt">
                        <div class="img-txt">
                            <img src="/assets/images/lighthouse.svg"></img>
                            <p>Expose your crypto & blockchain project<br/>to leading communities in the space.</p>
                        </div>
                        <div class="img-txt">
                            <img src="/assets/images/funnel.svg"></img>
                            <p>Automate monetization of your alpha community<br/>and receive ads from quality advertisers.</p>
                        </div>
                    </div>
                    <a href="#"><button>CTA HERE</button></a>
                </div>
                <img src="/assets/images/product.svg"></img>
            </div>
        </div>

    );
}

export default Introduction;