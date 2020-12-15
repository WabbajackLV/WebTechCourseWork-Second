import React from "react";
import cup_coffee from '../img/cup-coffee.jpg';
import table from '../img/table.jpg';
import about from '../img/about.jpg';

function Section2(){
    return (<section>
        <h3 className="offer">What we offer</h3>
            <hr/>
            {/* Left side paragraph */}
            <div className="offerRow">
                <img className="leftImg" src={cup_coffee} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet consequat dapibus. Nam suscipit magna tempor euismod eleifend. Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.</p>
            </div>
            {/* Right side paragraph */}
            <div className="offerRowRight">
                <img className="rigthImg" src={table} alt=""/>
                <p class="paragrRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet consequat dapibus. Nam suscipit magna tempor euismod eleifend. Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.</p>
            </div>
            {/* Left side paragraph */}
            <div className="offerRow lastOffer">
                <img className="leftImg" src={about} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet consequat dapibus. Nam suscipit magna tempor euismod eleifend. Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.</p>
            </div>
    </section>);
}

export default Section2;