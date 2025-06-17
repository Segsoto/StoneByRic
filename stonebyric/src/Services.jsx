import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VariableProximity from './VariableProximity';

const services = [
	{
		title: 'Walkways & Custom Patios',
		img: '/servicio1.jpg',
		desc: 'We design and build custom walkways and patios with attention to detail and durability. From flagstone to pavers, we ensure a beautiful and long-lasting result for your outdoor space.',
	},
	{
		title: 'Chimney Crowns & Fireplace Repair',
		img: '/servicio2.jpg',
		desc: 'Whether antique or new, we have the expertise to repair or build chimneys and fireplaces, ensuring safety and style for your home.',
	},
	{
		title: 'Driveway Install & Repair',
		img: '/servicio3.jpg',
		desc: 'We install and repair gravel, asphalt, tar and chip driveways, always communicating with our clients to exceed expectations.',
	},
	{
		title: 'Restoration & Cleaning of Stonework',
		img: '/servicio4.jpg',
		desc: 'Our team revives the color and finish of existing stonework with the right combination of skill, tools, and products. See the before and after difference!',
	},
	{
		title: 'Snow Removal',
		img: '/remuevenieves.png',
		desc: 'We manage snow removal for residential and commercial properties with our own fleet and team, ensuring your property is safe and accessible all winter.',
	},
];

export default function Services() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 700);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<section
				className='hero hero-services'
				style={{
					width: '100vw',
					minHeight: '320px',
					background: `url('/fondo3.jpg') center/cover no-repeat`,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					marginBottom: 48,
				}}
			>
				<VariableProximity
					label={'Servicios'}
					className={'variable-proximity-demo'}
					fromFontVariationSettings="'wght' 400, 'opsz' 9"
					toFontVariationSettings="'wght' 1000, 'opsz' 40"
					containerRef={null}
					radius={100}
					falloff='linear'
					style={{
						fontSize: 56,
						fontWeight: 900,
						color: '#fff',
						textShadow: '0 4px 32px #000',
						letterSpacing: 2,
						zIndex: 2,
						display: 'inline-block',
						background: 'none',
						borderRadius: 0,
						padding: 0,
					}}
				/>
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background: 'rgba(0,0,0,0.45)',
						zIndex: 1,
						borderRadius: 0,
					}}
				/>
			</section>
			<div
				className='section services-page services-wide'
				style={{ background: '#111112', padding: '0 0 48px 0' }}
			>
				<motion.h2
					initial='hidden'
					animate='visible'
					variants={{
						hidden: { opacity: 0, y: 30 },
						visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
					}}
					style={{
						fontSize: 32,
						fontWeight: 700,
						textAlign: 'center',
						marginBottom: 40,
						color: '#fff',
						marginTop: 64,
					}}
				>
					 
				</motion.h2>
				{isMobile ? (
					<div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
						{services.map((srv) => (
							<motion.div
								key={srv.title}
								className='service-card-mobile'
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
							>
								<img
									src={srv.img}
									alt={srv.title}
									style={{
										width: '100%',
										height: 140,
										objectFit: 'cover',
										borderRadius: 10,
										marginBottom: 12,
										background: '#18181b',
									}}
								/>
								<h3
									style={{
										color: '#b1001a',
										fontWeight: 700,
										fontSize: 20,
										marginBottom: 10,
									}}
								>
									{srv.title}
								</h3>
								<p style={{ fontSize: 16 }}>{srv.desc}</p>
							</motion.div>
						))}
					</div>
				) : (
					<div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
						{services.map((srv, i) => (
							<motion.div
								key={srv.title}
								className='service-row-desktop'
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 + i * 0.1 }}
								style={{
									flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
								}}
							>
								<img
									src={srv.img}
									alt={srv.title}
									style={{
										width: 340,
										height: 220,
										objectFit: 'cover',
										borderRadius: 18,
										boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
										background: '#18181b',
									}}
								/>
								<div
									style={{
										flex: 1,
										color: '#fff',
										padding: '0 12px',
									}}
								>
									<h3
										style={{
											color: '#b1001a',
											fontWeight: 700,
											fontSize: 26,
											marginBottom: 16,
										}}
									>
										{srv.title}
									</h3>
									<p style={{ fontSize: 18, lineHeight: 1.7 }}>
										{srv.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				)}
			</div>
		</>
	);
}
