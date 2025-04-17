import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function addFadeEffect(
    element: Element,
    options: Object = { start: "center center", end: "top 5%", markers: false }
) {
    const tl = gsap.timeline();

    tl.to(element, {
        scrollTrigger: {
            trigger: element,
            scrub: true,
            ...options
        },
        opacity: 0
    });
}
