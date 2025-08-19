'use client';

import Button from '@/component/common/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/component/common/chart';
import { MetricCard } from '@/component/ui/home/metric-card';
import { formatCurrency } from '@/lib/utils/helper';
import { ChevronRight, User } from 'lucide-react';
import { useState } from 'react';
import { BiSolidCaretLeftCircle, BiSolidCaretRightCircle } from 'react-icons/bi';
import { MdOutlineHouse } from 'react-icons/md';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import SingleCard from './cards';

const chartData = [
	{ month: 'Jan', inflow: 35000000, commission: 25000000, gmv: 10000000 },
	{ month: 'Feb', inflow: 8000000, commission: 27000000, gmv: 10000000 },
	{ month: 'Mar', inflow: 18000000, commission: 8000000, gmv: 5000000 },
	{ month: 'Apr', inflow: 18000000, commission: 22000000, gmv: 10000000 },
	{ month: 'May', inflow: 10000000, commission: 5000000, gmv: 8000000 },
	{ month: 'Jun', inflow: 35000000, commission: 48000000, gmv: 8000000 },
	{ month: 'Jul', inflow: 23000000, commission: 33000000, gmv: 13000000 },
	{ month: 'Aug', inflow: 23000000, commission: 8000000, gmv: 18000000 },
	{ month: 'Sep', inflow: 35000000, commission: 30000000, gmv: 8000000 },
	{ month: 'Oct', inflow: 42000000, commission: 10000000, gmv: 16000000 },
	{ month: 'Nov', inflow: 38000000, commission: 9500000, gmv: 14500000 },
	{ month: 'Dec', inflow: 45000000, commission: 11000000, gmv: 17000000 },
];

const cardData = [
	{
		id: 1,
		title: 'MOST CLICKED',
		img: '/assets/img-1.jpg',
		count: 2,
	},
	{
		id: 2,
		title: 'MOST WATCHLISTED',
		img: '/assets/img-2.svg',
		count: 5,
	},
	{
		id: 3,
		title: 'HOTTEST LISTING',
		img: '/assets/img-3.svg',
		count: 5,
	},
];

const chartConfig = {
	inflow: {
		label: 'Total Inflow',
		color: '#4545FE',
	},
	commission: {
		label: 'Commission Revenue',
		color: '#12B76A',
	},
	gmv: {
		label: 'GMV',
		color: '#F04438',
	},
};

const Main = () => {
	const [startIndex, setStartIndex] = useState<number>(0);
	const visibleMonths = 9;

	const visibleData = chartData.slice(startIndex, startIndex + visibleMonths);
	const canScrollLeft = startIndex > 0;
	const canScrollRight = startIndex + visibleMonths < chartData.length;

	const scrollLeft = () => {
		if (canScrollLeft) {
			setStartIndex(Math.max(0, startIndex - 3));
		}
	};

	const scrollRight = () => {
		if (canScrollRight) {
			setStartIndex(Math.min(chartData.length - visibleMonths, startIndex + 3));
		}
	};
	return (
		<div className="px-[4rem] bg-[#F9FAFB] min-h-screen">
			<h1 className="text-[20px] font-semibold leading-[100%] tracking-normal py-6">Welcome, Ahmed</h1>
			<div className="grid grid-rows-2 grid-cols-3 gap-6">
				<div className="row-span-2 col-span-2 bg-white rounded-[16px] border border-[#E4E4E4] p-4">
					<div className="flex justify-between pb-6 border-b border-[#E4E4E4] mb-6">
						<div>
							<h1 className="text-[20px] font-semibold text-[#191919]">Sales Overview</h1>
							<p className="text-[#606060] text-[12px] font-normal">Showing overview Jan 2022 - Sep 2022</p>
						</div>
						<div className="flex flex-col-reverse items-end gap-4">
							<div className="flex items-center gap-2">
								<Button
									variant="accent"
									className="border-none text-[14px] text-[#3D3D3D] font-normal hover:text-[#191919] hover:bg-[#F5F5F5] hover:font-semibold"
									size="small">
									1 Week
								</Button>
								<Button
									variant="accent"
									className="border-none text-[14px] text-[#3D3D3D] font-normal hover:text-[#191919] hover:bg-[#F5F5F5] hover:font-semibold"
									size="small">
									1 Month
								</Button>
								<Button
									variant="accent"
									className="border-none text-[14px] text-[#191919] bg-[#F5F5F5] font-semibold"
									size="small">
									1 Year
								</Button>
							</div>
							<Button
								variant="outline"
								className="text-[#191919] py-3 px-9 text-[12px] rounded-[72px] border border-[#E4E4E4]">
								View Transactions
							</Button>
						</div>
					</div>
					<div className="grid gap-2 grid-rows-2 grid-cols-4">
						<div className="row-span-2 col-span-2 flex bg-white overflow-y-hidden">
							<div className="flex justify-center items-center max-h-[82.5%]">
								<Button
									variant="outline"
									size="small"
									onClick={scrollLeft}
									disabled={!canScrollLeft}
									className="h-8 w-8 p-0 bg-transparent border-none">
									<BiSolidCaretLeftCircle className="h-4 w-4 text-black opacity-40" />
								</Button>
							</div>
							<ChartContainer config={chartConfig} className="w-[100%] h-[100%]">
								<ResponsiveContainer width="100%" height="100%">
									<BarChart
										data={visibleData}
										barCategoryGap="20%"
										margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
										<CartesianGrid strokeDasharray="3 3" className="stroke-none" />
										<XAxis dataKey="month" className="text-muted-foreground" tick={{ fontSize: 12 }} />
										<YAxis
											className="text-muted-foreground"
											tick={{ fontSize: 12 }}
											domain={[0, 50000000]}
											ticks={[0, 10000000, 20000000, 30000000, 40000000, 50000000]}
											tickFormatter={(value) => `${value / 1000000}m`}
										/>
										<ChartTooltip
											content={<ChartTooltipContent />}
											formatter={(value: number, name: string) => {
												const config = chartConfig[name as keyof typeof chartConfig];
												return [formatCurrency(value), ` ${config?.label || name}`];
											}}
										/>
										<Bar dataKey="inflow" fill="#4545FE" radius={[2, 2, 0, 0]} />
										<Bar dataKey="commission" fill="#12B76A" radius={[2, 2, 0, 0]} />
										<Bar dataKey="gmv" fill="#F04438" radius={[2, 2, 0, 0]} />
									</BarChart>
								</ResponsiveContainer>
							</ChartContainer>
							<div className="overflow-y-hidden w-auto max-h-[82.5%] flex justify-center items-center shadow-[-4px_0px_12px_0px_#0000000A]">
								<Button
									variant="outline"
									size="small"
									onClick={scrollRight}
									disabled={!canScrollRight}
									className="w-[40px]! h-8 p-0 border-none">
									<BiSolidCaretRightCircle className="h-4 w-4 text-black opacity-40" />
								</Button>
							</div>
						</div>

						<MetricCard
							className="row-span-1 col-span-1"
							title="Total Inflow"
							value={120000000}
							change={2.5}
							isHighlighted={true}
						/>
						<MetricCard className="row-span-1 col-span-1" title="MRR" value={50000000} change={2.5} />
						<MetricCard
							className="row-span-1 col-span-1"
							title="Commission Revenue"
							value={200000000}
							change={0.5}
							isDifferent={true}
						/>
						<MetricCard
							className="row-span-1 col-span-1"
							title="GMV"
							value={100000000}
							change={0.5}
							isNegative={true}
						/>
					</div>
				</div>
				<div className="row-span-1 col-span-1 bg-white rounded-[16px] border border-[#E4E4E4]">
					<div className="bg-[#f4f5f6] flex justify-between items-center p-4 rounded-t-[16px]">
						<div className="flex items-center gap-3">
							<div className="flex items-center justify-center">
								<MdOutlineHouse className="w-[20px] h-[19px] text-[#4545FE]" />
							</div>
							<h2 className="text-[14px] font-medium text-[#292929] leading-[100%] tracking-normal">
								Listings Overview
							</h2>
						</div>
						<button className="flex items-center gap-1 text-[#4545FE] hover:text-[#4545FE]/90 transition-colors cursor-pointer">
							<span className="text-sm font-medium">View all</span>
							<ChevronRight className="w-4 h-4" />
						</button>
					</div>
					<div className="grid grid-cols-3 gap-8 p-4">
						<div className="text-start">
							<p className="text-sm text-[#525252] mb-2">Total</p>
							<p className="text-[24px] font-bold text-[#141414]">1.8k</p>
						</div>
						<div className="text-start">
							<p className="text-sm text-[#525252] mb-2">Active</p>
							<p className="text-[24px] font-bold text-[#141414]">80</p>
						</div>
						<div className="text-start">
							<p className="text-sm text-[#525252] mb-2">Archived</p>
							<p className="text-[24px] font-bold text-[#141414]">1k</p>
						</div>
					</div>
				</div>
				<div className="row-span-1 col-span-1 bg-white rounded-[16px] border-2 border-[#E4E4E4]">
					<div className="bg-[#f4f5f6] flex justify-between items-center p-4 rounded-t-[16px]">
						<div className="flex items-center gap-3">
							<div className="flex items-center justify-center">
								<User className="w-[20px] h-[19px] text-[#4545FE]" />
							</div>
							<h2 className="text-[14px] font-medium text-[#292929] leading-[100%] tracking-normal">
								Users Overview
							</h2>
						</div>
						<button className="flex items-center gap-1 text-[#4545FE] hover:text-[#4545FE]/90 transition-colors cursor-pointer">
							<span className="text-sm font-medium">View all</span>
							<ChevronRight className="w-4 h-4" />
						</button>
					</div>
					<div className="grid grid-cols-3 gap-8 p-4">
						<div className="text-start">
							<p className="text-sm text-[#525252] mb-2">Total</p>
							<p className="text-[24px] font-bold text-[#141414]">20.7k</p>
						</div>
						<div className="text-start">
							<p className="text-sm text-[#525252] mb-2">Riders</p>
							<p className="text-[24px] font-bold text-[#141414]">8.5k</p>
						</div>
						<div className="text-start">
							<p className="text-sm text-[#525252] mb-2">Subscribers</p>
							<p className="text-[24px] font-bold text-[#141414]">7.5k</p>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4 py-8">
				{cardData.map((card) => {
					return <SingleCard key={card.id} {...card} />;
				})}
			</div>
		</div>
	);
};
export default Main;
