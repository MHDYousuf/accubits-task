import { Button, Chip, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import tickLogo from '../assets/tick.png';
import bannerLogo from '../assets/Vector Smart Object.png';
import buildingPNG from '../assets/Layer 5.png';

function Banner() {
	return (
		<section id='banner'>
			<div className='banner-container'>
				<Container maxWidth='md'>
					<Grid container className='banner-wrapper' spacing={6}>
						<Grid item xs={12} md={8} className='banner-text-wrapper'>
							<Chip
								className='chip'
								label='#1 Editors Choice App of 2020'
								avatar={
									<div className='editor-logo-wrapper'>
										<img
											src={tickLogo}
											alt='tick'
											width='20'
											height='20'
											className='editor-logo'
										/>
									</div>
								}
							/>
							<Typography
								variant='h3'
								component='h2'
								className='banner-title'
								gutterBottom
							>
								Best app for your
								<br /> modern lifestyle
							</Typography>
							<Typography
								variant='body1'
								gutterBottom
								style={{ color: '#615f5f', width: '80%' }}
							>
								Increase productivity with a sample to-do app. app for managing
								your personal budgets.
							</Typography>
							<Grid container style={{ marginTop: 14 }}>
								<Button className='primary-btn'>Try for free</Button>
								<Button className='ghost-btn' style={{ marginLeft: 14 }}>
									Watch demo video
								</Button>
							</Grid>
						</Grid>
						<Grid item xs={12} md={4}>
							<img src={bannerLogo} className='banner-logo' />
						</Grid>
					</Grid>
				</Container>
				<div className='building-overlay'>
					<img src={buildingPNG} alt='building' width='100%' height='100%' />
				</div>
			</div>
		</section>
	);
}

export default Banner;
