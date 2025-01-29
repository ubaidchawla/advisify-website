import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
function DesktopMenu() {
	return (
		<DesktopNav>				
			<NavItem url="/">Home</NavItem>
			<NavItem url="about-us">About Us</NavItem>
			<NavItem url="pricing">Pricing</NavItem>
			<NavItem url="service">Services</NavItem>
			<NavItem url="team">Team</NavItem>
			
		</DesktopNav>
	);
}

export default DesktopMenu;
