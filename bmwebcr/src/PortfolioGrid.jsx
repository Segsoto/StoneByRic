import React from "react";
import ChromaGrid from "./ChromaGrid";

const items = [
	{
		image: "https://i.pravatar.cc/300?img=1",
		title: "Landing Abogado",
		subtitle: "Sitio profesional para despacho legal",
		handle: "bmwebcr.vercel.app",
		borderColor: "#004AAD",
		gradient: "linear-gradient(145deg, #004AAD, #000)",
		url: "https://bmwebcr.vercel.app/",
	},
	{
		image: "https://i.pravatar.cc/300?img=2",
		title: "Stone By Ric",
		subtitle: "Portafolio de servicios de construcción",
		handle: "stonebyric.vercel.app",
		borderColor: "#2ECC71",
		gradient: "linear-gradient(180deg, #2ECC71, #000)",
		url: "https://stonebyric.vercel.app/",
	},
	{
		image: "https://i.pravatar.cc/300?img=3",
		title: "App Gestión Z",
		subtitle: "Sistema de gestión personalizado",
		handle: "www.gestion-z.com",
		borderColor: "#FF6B35",
		gradient: "linear-gradient(165deg, #FF6B35, #000)",
		url: "https://gestion-z.com",
	},
];

export default function PortfolioGrid() {
	return (
		<section className="portfolio-section">
			<div className="portfolio-grid-wrapper">
				<ChromaGrid
					items={items}
					radius={300}
					damping={0.45}
					fadeOut={0.6}
					ease="power3.out"
				/>
			</div>
		</section>
	);
}
