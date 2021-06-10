import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import featureLogo from '../assets/Group 90.png';
import speedLogo from '../assets/speed.png';
import prototypeLogo from '../assets/prototyping-1.png';
import vectorLogo from '../assets/vector.png';

function Features() {
	const featureData = [
		{
			image: speedLogo,
			title: 'Fast Performance',
			description:
				'Get your blood tests delivered at home collect a sample from the news your blood tests.',
			color: '#f45c65',
			bg: 'rgba(244, 92, 101,0.1)',
		},
		{
			image: prototypeLogo,
			title: 'Prototyping',
			description:
				'Get your blood tests delivered at home collect a sample from the news your blood tests.',
			color: '#2864fc',
			bg: 'rgba(40, 100, 252,0.1)',
		},
		{
			image: vectorLogo,
			title: 'Vector Editing',
			description:
				'Get your blood tests delivered at home collect a sample from the news your blood tests.',
			color: '#48945c',
			bg: 'rgba(72, 148, 92,0.1)',
		},
	];

	return (
		<Container maxWidth='md'>
			<Grid container spacing={5} style={{ marginTop: 32 }}>
				<Grid item xs={12} md={5}>
					<img src={featureLogo} width='100%' height='100%' />
				</Grid>
				<Grid item xs={12} md={7}>
					<Typography variant='h4' component='h4' className='feature-title'>
						Awesome apps
						<br /> features
					</Typography>
					<Typography variant='body1' style={{ color: '#615f5f' }}>
						Increase productivity with a simple to-do app. app for
						<br /> managing your personal budgets.
					</Typography>
					<div style={{ marginTop: 64 }}>
						{featureData.map((feature, index) => (
							<Grid key={index} item container className='feature-container'>
								<Grid className='feature-img-wrapper' item xs={2}>
									<span
										className='feature-bg-img'
										style={{ background: feature.bg }}
									>
										<img
											src={feature.image}
											alt='feature-icon'
											width='40'
											height='40'
										/>
									</span>
								</Grid>
								<Grid item xs={10} style={{ paddingLeft: 14 }}>
									<Typography
										variant='h6'
										component='h6'
										style={{ color: feature.color, fontWeight: 600 }}
										gutterBottom
									>
										{feature.title}
									</Typography>
									<Typography
										variant='body1'
										style={{ width: '80%', color: '#615f5f' }}
									>
										{feature.description}
									</Typography>
								</Grid>
							</Grid>
						))}
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Features;
