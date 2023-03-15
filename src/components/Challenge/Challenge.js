import './style.css';
import '../../index.css'

function Challenge(){
    return(
        <div class="challenge-container">
            <div class="main-container">
                <div class="challenge-content">
                    <img src="/assets/images/crypto.svg" class="challenge-img" alt="challenge-img"/>
                    <div class="challenge-txt">
                        <h2>Crypto & Blockchain projects face a unique challenge</h2>
                        <h3>when it comes to advertising. Most traditional Ad networks not only restrict the kinds of ads allowed on the network by policy, but also are not designed with the correct target audience in mind.</h3>
                        <p>As a result, companies often resort to manually searching for communities online, contacting sales teams, and spending an excessive amount of time and budget posting ads, often with questionable and untracked results.</p>
                    </div>
                </div>
                <div class="challenge-content alt-challenge">
                    <img src="/assets/images/course.svg" class="course-img" alt="course-img"/>
                    <div class="challenge-txt">
                        <h2>AdBash is the first Ad Network tailor built for the Web3 space.</h2>
                        <h3>We aggregate the biggest and most effective communities, and provide real-time tracking for both communities and advertisers. </h3>
                        <p>The AdBash team reviews every single ad on the network, as well as thoroughly examines each community before it is on-boarded.<br/><br/>
                            We carry out 24/7 analysis on the network, and take steps in order to ensure all communities on the network are highly performing.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Challenge;