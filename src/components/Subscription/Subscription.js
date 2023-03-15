import './style.css';
import '../../index.css'

function Subscription(){
    return(
        <div class="sub-main-container">
            <div class="subs-container">
                <div class="subs-details">
                    <img src="/assets/images/blog.svg" class="blog-img" alt="blog-img"/>
                    <h2>Broadcast your project<br/>to the best targeted communities online,</h2>
                    <p>and get maximum coverage<br/>for your products.</p>
                </div>
                <div class="subscriptions-container">
                    <div class="sub-row">
                        <div class="subscriptions">
                            <div class="sub-head">
                                <h2>Bronze:</h2>
                                <span>$1000</span>
                            </div>
                            <div class="sub-inner">
                                <h3>200,000 Impressions</h3>
                                <p>Distribution to a minimum of 4 communities</p>
                                <p class="customer">Customer Support</p>
                                <a href="#">
                                    <button>CTA HERE</button>
                                </a>
                            </div>
                        </div>
                        <div class="subscriptions subscription-silver">
                            <div class="sub-head">
                                <h2>Silver:</h2>
                                <span>$1600</span>
                            </div>
                            <div class="sub-inner">
                                <h3>500,000 Impressions</h3>
                                <p>Distribution to a minimum of 4 communities</p>
                                <p>Customer Support</p>
                                <a href="#">
                                    <button>CTA HERE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="subscriptions subscription-gold">
                        <div class="sub-head">
                            <h2>Gold:</h2>
                            <span>$2500</span>
                        </div>
                        <div class="sub-inner">
                                <div class="inner-left">
                                    <h3>1,000,000 Impressions</h3>
                                    <p>Distribution to a minimum of 4 communities</p>
                                    <p>Customer Support</p>
                                </div>
                                <a href="#">
                                    <button>CTA HERE</button>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Subscription;