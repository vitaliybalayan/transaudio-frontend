'use client';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Card, Layout, Space, Typography } from 'antd';
import { ApolloClientProvider } from '@/providers/ApolloClientProvider';
import ThemeProvider from '@/providers/ThemeProvider';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ApolloClientProvider>
					<ThemeProvider>
						<Layout>
							<Space direction={'vertical'} size={'large'}>
								<header>
									<div className={'container'}>
										<Card
											className="card-shadow header-gradient"
											style={{ padding: 24 }}
										>
											<Space
												direction="vertical"
												size={8}
												style={{ width: '100%' }}
											>
												<Typography.Title level={2} style={{ margin: 0 }}>
													Сервис транскрибации аудио
												</Typography.Title>
												<Typography.Text type="secondary">
													Загрузите аудиофайл — и мы покажем ход загрузки
													и статусы обработки.
												</Typography.Text>
											</Space>
										</Card>
									</div>
								</header>

								<Layout.Content>{children}</Layout.Content>
							</Space>
						</Layout>
					</ThemeProvider>
				</ApolloClientProvider>
			</body>
		</html>
	);
}
