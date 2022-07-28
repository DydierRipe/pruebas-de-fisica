"use strict"

let properties = {
    "ambience" : {
        "gravity" : 9.8,
    },
    "ball" : {
        "dimentions" : [5, 5],
        "weight" : 30
    }
}

let ball = document.querySelector(".ball");

let transformer = (posX, posY) => { // 1m = 6px
    let posYpx = 670 - posY * 6, posXpx = posX * 6;

    ball.style.transform = `translate(${posXpx}px, ${posYpx}px)`;
}

let freeFall = () => {

}
