import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

//COMPANY LOGOS
import company1 from '../assets/9.png';
import company2 from '../assets/Group 44.png';
import company3 from '../assets/Group 56.png';
import company4 from '../assets/Group 57.png';
import company5 from '../assets/Group 86.png';

function Companies() {
	return (
		<section id='companies'>
			<Container maxWidth='lg' className='companies-container'>
				<Typography className='companies-title'>
					Trusted by companies like
				</Typography>
				<Grid container className='companies-wrapper' spacing={5}>
					{[company1, company2, company3, company4, company5].map(
						(images, index) => (
							<Grid key={index} item xs={6} md={2} className='company-wrap'>
								<img src={images} alt='companies' width='100' height='60' />
							</Grid>
						)
					)}
				</Grid>
			</Container>
		</section>
	);
}

export default Companies;
