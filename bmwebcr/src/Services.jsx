import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VariableProximity from './VariableProximity';
import { useLanguage } from './LanguageContext';

const services = [
	{
		title: { es: 'Desarrollo Web a Medida', en: 'Custom Web Development' },
		img: '/servicio1.jpg',
		desc: {
			es: 'Creamos sitios web modernos, responsivos y optimizados para tu negocio. Desde landing pages hasta plataformas complejas, nos adaptamos a tus necesidades.',
			en: 'We create modern, responsive, and optimized websites for your business. From landing pages to complex platforms, we adapt to your needs.',
		},
	},
	{
		title: { es: 'Aplicaciones y Sistemas', en: 'Apps & Systems' },
		img: '/servicio2.jpg',
		desc: {
			es: 'Desarrollamos aplicaciones web y sistemas de gestión personalizados para automatizar procesos y mejorar la eficiencia de tu empresa.',
			en: 'We develop custom web apps and management systems to automate processes and improve your company’s efficiency.',
		},
	},
	{
		title: { es: 'E-commerce y Tiendas Online', en: 'E-commerce & Online Stores' },
		img: '/servicio3.jpg',
		desc: {
			es: 'Lleva tu negocio al mundo digital con tiendas online seguras, escalables y fáciles de administrar. Integración con pagos y logística.',
			en: 'Take your business online with secure, scalable, and easy-to-manage e-commerce solutions. Payment and logistics integration included.',
		},
	},
	{
		title: { es: 'Mantenimiento y Soporte', en: 'Maintenance & Support' },
		img: '/servicio4.jpg',
		desc: {
			es: 'Ofrecemos mantenimiento, actualizaciones y soporte técnico para que tu sitio o app siempre funcione al máximo.',
			en: 'We offer maintenance, updates, and technical support so your site or app always runs at its best.',
		},
	},
	{
		title: { es: 'Consultoría Digital', en: 'Digital Consulting' },
		img: '/remuevenieves.png',
		desc: {
			es: 'Te asesoramos en transformación digital, estrategia web y mejores prácticas para potenciar tu presencia online.',
			en: 'We advise you on digital transformation, web strategy, and best practices to boost your online presence.',
		},
	},
];

export default function Services() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
	const { lang } = useLanguage();

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
					background: `url('/FONDOINICIO.jpg') center/cover no-repeat`,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					marginBottom: 48,
				}}
			>
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
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 2,
					}}
				>
					<div
						style={{
							transform: 'translateX(-18px)',
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<VariableProximity
							label={lang === 'es' ? 'Servicios' : 'Services'}
							className={'variable-proximity variable-proximity-demo'}
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
								textAlign: 'center',
								width: '100%',
								maxWidth: 400,
							}}
						/>
					</div>
				</div>
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
									alt={srv.title[lang]}
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
									{srv.title[lang]}
								</h3>
								<p style={{ fontSize: 16 }}>{srv.desc[lang]}</p>
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
									alt={srv.title[lang]}
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
										{srv.title[lang]}
									</h3>
									<p style={{ fontSize: 18, lineHeight: 1.7 }}>
										{srv.desc[lang]}
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
