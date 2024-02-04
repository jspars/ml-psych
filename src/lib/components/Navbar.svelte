<script lang="ts">
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap';

	let isOpen = false;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<Navbar class="z-3" color="dark" dark expand="md">
	<NavbarBrand href="/" class="text-3xl">LP</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto navbar-fixed-top" navbar navbar-fixed-top>
			<NavItem>
				<NavLink href="/about" class="px-4">About</NavLink>
			</NavItem>
            <NavItem>
				<NavLink href="/fees_and_insurance" class="px-4">Insurance and Fees</NavLink>
			</NavItem>
            <NavItem>
				<NavLink href="https://simplepractice.com"  target="_blank" class="px-4">Client Portal</NavLink>
			</NavItem>
			<Dropdown nav inNavbar>
				<DropdownToggle nav caret class="px-4">More</DropdownToggle>
				<DropdownMenu end>
					<DropdownItem>
						<NavLink href="">FAQs</NavLink>
					</DropdownItem>
					<DropdownItem>
						<NavLink href="/publications">Publications</NavLink>
					</DropdownItem>
					<DropdownItem>
						<NavLink href="/resources">External Resources</NavLink>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<NavItem>
				<NavLink href="/contact" class="px-4">Contact</NavLink>
			</NavItem>  
		</Nav>
	</Collapse>
</Navbar>

<style>
    .navbar-nav > li {
		margin-right: 2rem;
	}
</style>
