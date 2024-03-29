import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const urbanist = Urbanist({
	weight: ["200", "400", "600", "800"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Portafolio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={urbanist.className}>{children}</body>
		</html>
	);
}
