import React from "react";

function Section2(){
    return (<section>
        <h3 className="offer">What we offer</h3>
            <hr/>
            <div className="offerRow">
                <img className="leftImg" src="img/cup-coffee.jpg" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet consequat dapibus. Nam suscipit magna tempor euismod eleifend. Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.</p>
            </div>
            <div className="offerRowRight">
                <img className="rigthImg" src="img/table.jpg" alt=""/>
                <p class="paragrRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet consequat dapibus. Nam suscipit magna tempor euismod eleifend. Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.</p>
            </div>
            <div className="offerRow lastOffer">
                <img className="leftImg" src="img/about.jpg" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet consequat dapibus. Nam suscipit magna tempor euismod eleifend. Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.</p>
            </div>
    </section>);
}

export default Section2;