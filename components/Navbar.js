import { Button, Container, Grid, useMediaQuery } from '@material-ui/core';
import React from 'react';
import brandLogo from '../assets/AppLab.png';

function Navbar() {
	const matches = useMediaQuery('(min-width:768px)');
	return (
		<Container maxWidth='lg'>
			<Grid container className='nav-wrapper'>
				<div>
					<img src={brandLogo} alt='brand-logo' width='115' height='30' />
				</div>
				{matches ? (
					<ul>
						<li>Home</li>
						<li>Key features</li>
						<li>Pricing</li>
						<li>Testimonial</li>
						<li>FAQ</li>
						<li className='primary-btn'>Try for free</li>
					</ul>
				) : (
					<Button>Menu</Button>
				)}
			</Grid>
		</Container>
	);
}

export default Navbar;
