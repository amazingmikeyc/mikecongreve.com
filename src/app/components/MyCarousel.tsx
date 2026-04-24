'use client'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {ReactNode} from "react";


export default function MyCarousel({ children }: { children: ReactNode })
{
    return (
    <Carousel  autoFocus={true} showIndicators={true} showThumbs={false} showStatus={false} infiniteLoop={true} showArrows={true}>
        {children}
    </Carousel>)
}