'use client'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

export default function MyCarousel({ children }: { children: React.ReactElement[] })
{
    return (
        <Carousel autoFocus={true} showIndicators={true} showThumbs={false} showStatus={false} infiniteLoop={true} showArrows={true}>
            {children as any}
        </Carousel>
    );
}
