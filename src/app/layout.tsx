import type { Metadata } from 'next';
import './globals.css';
import { euclid } from '@/lib/utils/fonts';
import { Suspense } from 'react';
import { ModalProvider } from '@/lib/contexts/modal-context';

export const metadata: Metadata = {
	title: {
		default: 'Myxellia',
		template: 'Myxellia | %s',
	},
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${euclid.className} antialiased`}>
				<ModalProvider>
					<Suspense>{children}</Suspense>
				</ModalProvider>
			</body>
		</html>
	);
}
