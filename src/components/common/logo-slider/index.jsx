import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Alterbone from "../../../assets/images/v1/alterbone.png";
import Carbonia from "../../../assets/images/v1/carbonia.png";
import Logoipsum from "../../../assets/images/v1/logoipsum.png";
import Tinygone from "../../../assets/images/v1/tinygone.png";
import Waverio from "../../../assets/images/v1/waverio.png";

const sliderData = [
	{
		id: crypto.randomUUID(),
		img: Waverio,
	},
	{
		id: crypto.randomUUID(),
		img: Logoipsum,
	},
	{
		id: crypto.randomUUID(),
		img: Alterbone,
	},
	{
		id: crypto.randomUUID(),
		img: Carbonia,
	},
	{
		id: crypto.randomUUID(),
		img: Tinygone,
	},
	{
		id: crypto.randomUUID(),
		img: Waverio,
	},
	{
		id: crypto.randomUUID(),
		img: Logoipsum,
	},
	{
		id: crypto.randomUUID(),
		img: Alterbone,
	},
	{
		id: crypto.randomUUID(),
		img: Carbonia,
	},
	{
		id: crypto.randomUUID(),
		img: Tinygone,
	},
];

const swiperSettings = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
};

function LogoSlider({ light }) {
	return (
		<section className={`sofax-slider-section ${light && "bg-light"}`}>
			<div className="container">
				<div className="sofax-title-section">
					<h4>Trusted by 1600+ of the world&apos;s most popular companies</h4>
				</div>
				<div className="sofax-brand-slider">
					{
						<Swiper {...swiperSettings}>
							{sliderData.map((item) => (
								<SwiperSlide key={item.id}>
									<div className="sofax-logo-icon-item">
										<img src={item.img} alt={item.title} />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					}
				</div>
			</div>
		</section>
	);
}

export default LogoSlider;
