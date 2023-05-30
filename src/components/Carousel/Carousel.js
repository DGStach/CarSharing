//https://www.youtube.com/watch?v=CMg_1KxpM_4

import React from "react";
import {CarouselItem} from "./CarouselItem";

export const Carousel = () => {
    const items = [{
        title: "Reno Compact",
        icon: require("./carIcons/car1.png")
    },
        {
            title: "Reno Clio",
            icon: require("./carIcons/car2.png")
        },
        {
            title: "Scoda Octavia",
            icon: require("./carIcons/car3.webp")
        },
    ]

    return (
        <div>
            <CarouselItem/>
        </div>
    )
}