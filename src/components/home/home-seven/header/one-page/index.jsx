import MobileNavbar from "../../../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "../HeaderButton";
import HeaderLogo from "../HeaderLogo";
const menuItemsData = [
	{
		title: "Home",
		url: "#hero",
	},
	{
		title: "Features",
		url: "#Features",
	},
	{
		title: "Service",
		url: "#service",
	},

	{
		title: "Testimonial",
		url: "#testimonial",
	},
	{
		title: "Blog",
		url: "#blog",
	},
];
function Header() {
	return (
		<header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<nav className="menu-block" id="append-menu-header">
							<ul className="site-menu-main">
								<li className="nav-item">
									<a href="#hero" className="nav-link-item">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a href="#features" className="nav-link-item">
										Features
									</a>
								</li>
								<li className="nav-item">
									<a href="#service" className="nav-link-item">
										Service
									</a>
								</li>
								<li className="nav-item">
									<a href="#testimonial" className="nav-link-item">
										Testimonial
									</a>
								</li>
								<li className="nav-item">
									<a href="#blog" className="nav-link-item">
										Blog
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="Sofax" onePage={true} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
