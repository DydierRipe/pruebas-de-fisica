"use strict"

let ball = document.querySelector(".ball");
let chart = document.querySelector(".proofs-chart");

let properties = {
    "ambience" : {
        "gravity" : 9.8,
    },
    "ball" : {
        "dimentions" : [5, 5],
        "weight" : 30
    },
    "chart" : {
        "sizePx" : [chart.style.width, chart.style.height],
        "sizeReal" : [145, 111.67]
    }
}

let transformer = (posX, posY) => { // 1m = 6px
    let posYpx = 670 - posY * 6, posXpx = posX * 6;

    ball.style.transform = `translate(${posXpx}px, ${posYpx}px)`;
}

let startSimulation = (condition, callBack, ...callBackVars) => {
    while (condition) {
        setTimeOut(callBack(callBackVars), 10);
    }
}
