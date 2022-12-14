import { gsap } from "gsap"; // pure gsap
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // pure gsap
import React, { useEffect } from "react";
import { Reveal, Timeline, Tween } from "react-gsap";
import useWindowDimensions from "./useWindowDimensions";

export const FadeInLeft = ({ children }) => (
	<Reveal repeat trigger={<div />}>
		<Tween from={{ opacity: 0, transform: "translate3d(-40vw, 0, 0)" }} ease="back.out(1.4)">
			{children}
		</Tween>
	</Reveal>
);
export const FadeInRight = ({ children }) => (
	<Reveal repeat trigger={<div />}>
		<Tween from={{ opacity: 0, transform: "translate3d(+40vw, 0, 0)" }} ease="back.out(1.4)">
			{children}
		</Tween>
	</Reveal>
);

export const FadeInRegular = ({ children }) => (
	<ScrollTrigger start="-350px center" end="+=300" scrub={0.5}>
		<Tween from={{ opacity: 0 }} duration={2}>
			{children}
		</Tween>
	</ScrollTrigger>
);

export const FadeInImageGrid = ({ children }) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
		}
		gsap.to(".box", { y: 100 });
		ScrollTrigger.batch(".box", {
			onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
			onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 100, stagger: 0.1, overwrite: true }),
			start: "top bottom-=100px",
		});
		ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".box", { y: -100, opacity: 0 }));
		ScrollTrigger.refresh();
	}, []);

	return <div className="box">{children}</div>;
};


export const FadeInImageSocialMedia = ({ children }) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
		}
		gsap.to(".socialbox", { y: 100, opacity: 0 });
		ScrollTrigger.batch(".socialbox", {
			onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: { each: 0.15 }, overwrite: true }),
			// onLeave: batch => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
			onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
			// onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
			start: "-250px center",
		});
	}, []);

	return <div className="socialbox">{children}</div>;
};

export const RepeatTilt = ({ children }) => (
	<Tween to={{ opacity: 0, repeat: -1, yoyo: true, repeatDelay: 0.5 }} duration={2}>
		{children}
	</Tween>
);
export const FadeInText = ({ children }) => (
	<Timeline target={children} repeat={-1}>
		{/* prettier-ignore */}
		<>
      <Tween from={{ opacity: 0,  scale:0.1}}/>
      <Tween to={{ opacity: 1, scale:1.0}} duration={4} ease="expo.out(1.2)"/>
      <Tween to={{ opacity: 0, scale:1.0}} duration={3}/>
    </>
	</Timeline>
);

export const BounceAround = ({ children }) => {
	var { height, width } = useWindowDimensions();
	var width = width * 0.6;
	return (
		<Timeline target={children} repeat={-1} yoyo="true">
			{/* prettier-ignore */}
			<>
        <Tween duration={0} to={{opacity:0.3 , filter: "invert(23%) sepia(90%) saturate(1378%) hue-rotate(192deg) brightness(99%) contrast(96%)" }}/>

        <Tween duration={3} to={{ x: `${width}px`,y: "200px"}} />
        <Tween duration={0} to={{filter:"invert(88%) sepia(3%) saturate(4267%) hue-rotate(168deg) brightness(107%) contrast(80%)"}} />

        <Tween duration={3} to={{ x: "0", y: "500px", rotation:"360deg"}} />
        <Tween duration={0} to={{ filter: "invert(23%) sepia(90%) saturate(1378%) hue-rotate(192deg) brightness(99%) contrast(96%)"}} />

        <Tween duration={3} to={{ x: `${width}px`, y: "700px", rotation:"360deg"}} />
        <Tween duration={0} to={{ filter: "invert(23%) sepia(90%) saturate(1378%) hue-rotate(192deg) brightness(99%) contrast(96%)" }} />

        <Tween duration={3} to={{ x: "0", y: "1000px", rotation:"360deg"}} />
        <Tween duration={0} to={{ filter: "invert(23%) sepia(90%) saturate(1378%) hue-rotate(192deg) brightness(99%) contrast(96%)" }} />

        <Tween duration={3} to={{ x: `${width}px`, y: "1300px" }} />
    </>
		</Timeline>
	);
};

export const BounceAround2 = ({ children }) => {
	var { height, width } = useWindowDimensions();
	var width = width * 0.6;
	return (
		<Timeline target={children} repeat={-1} yoyo="true">
			{/* prettier-ignore */}
			<>
        <Tween duration={0} to={{x: `${width}px`, opacity:0.3 ,}}/>
        <Tween duration={4} to={{ x: "0",y: "100px"}} />
        <Tween duration={2} to={{ x: `${width}px`, y: "300px"}} />
        <Tween duration={2} to={{ x: 0, y: "800px", rotation:"360deg"}} />
        <Tween duration={4} to={{ x: `${width}px`, y: "1200px"}} />
        <Tween duration={3} to={{ x: "0", y: "1600px", rotation:"360deg"}} />
    </>
		</Timeline>
	);
};
