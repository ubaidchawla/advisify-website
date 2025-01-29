import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import PlayBtn from "../../../../assets/images/v3/videoplay.png";
import Dashboard from "../../../../assets/images/v7/deshbordv7.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import FadeInUp from "../../../animation/FadeInUp";
import HeroContent from "./HeroContent";
function Hero() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="sofax-section-padding6" id="hero">
			<div className="container">
				<HeroContent />
				<ModalVideo
					channel="youtube"
					youtube={{ autoplay: 0 }}
					isOpen={isOpen}
					videoId="6mttwIBcig0"
					onClose={() => setOpen(false)}
				/>

				<FadeInStaggerTwo className="sofax-hero-btn-wrap">
					<FadeInStaggerTwoChildren>
						<Link className="sofax-default-btn pill" data-text="Start Your Free Trial" to="/contact-us">
							<span className="button-wraper">Start Your Free Trial</span>
						</Link>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren>
						<button className="sofax-popup-video video-init" onClick={() => setOpen(true)}>
							<img src={PlayBtn} alt="Play Btn" />
							Watch A Demo
						</button>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
				<FadeInUp className="hero7-thumb extra-mt">
					<img src={Dashboard} alt="Dashboard" />
				</FadeInUp>
			</div>
		</div>
	);
}

export default Hero;
