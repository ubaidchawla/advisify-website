import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import Faq from "../../components/home/home-five/faq";
import Testimonials from "../../components/home/home-five/testimonials";
import PricePlan from "../../components/home/home-one/price-plan";

function Pricing() {
	return (
		<>
			<BreadCrumb title="Pricing" />
			<PricePlan />
			<AutoSlider />
			<Testimonials />
			<Faq />
		</>
	);
}

export default Pricing;
