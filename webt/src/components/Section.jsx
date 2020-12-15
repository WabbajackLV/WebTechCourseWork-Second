import React from "react";
import coffeeBeans from '../img/coffee-beans.png';
import coffeeCup from '../img/coffee-cup.png'

function Section(){
    return (<section>
        <img className="coffeeBeans" src={coffeeBeans} alt="" />
        <h1>Rustic Cup</h1>
        <hr/>
        <h3>A homelike friendly cafe</h3>
        <img className="coffeeCup" src={coffeeCup} alt="" />
    </section>);
}

export default Section;