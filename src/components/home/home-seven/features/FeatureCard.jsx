function FeatureCard({ feature: { icon, title, description } }) {
	return (
		<div className="sofax-features-boxv7">
			<div className="sofax-features-iconv7">
				<img src={icon} alt="icon" />
			</div>
			<div className="sofax-features-contentv7">
				<h4>{title}</h4>
				<p>{description}</p>
				<p></p>
			</div>
		</div>
	);
}

export default FeatureCard;
