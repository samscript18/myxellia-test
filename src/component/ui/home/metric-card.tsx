'use client';

import { Card, CardContent } from '../../common/card';
import { formatCurrency } from '@/lib/utils/helper';
import { cn } from '@/lib/utils/cn';
import { IoArrowDownCircleSharp, IoArrowUpCircleSharp } from 'react-icons/io5';

interface MetricCardProps {
	title: string;
	value: number;
	change: number;
	isHighlighted?: boolean;
	isDifferent?: boolean;
	isNegative?: boolean;
	currency?: string;
	className?: string;
}

export const MetricCard = ({
	title,
	value,
	change,
	isHighlighted = false,
	className = '',
	isNegative = false,
	currency = '₦',
	isDifferent = false,
}: MetricCardProps) => {
	const changeColor = isHighlighted
		? 'text-[#12B76A]'
		: isNegative
		? 'text-[#F04438]'
		: isDifferent
		? 'text-[#14B8A6]'
		: 'text-[#12B76A]';
	const TrendIcon = isNegative ? IoArrowDownCircleSharp : IoArrowUpCircleSharp;

	return (
		<Card
			className={`${cn(
				className,
				'rounded-[16px] p-2 border border-[#E4E4E4] justify-center items-center shadow-none'
			)}`}>
			<CardContent>
				<div className="space-y-2">
					<p
						className={`text-[19px] font-semibold ${
							isHighlighted
								? 'text-[#4545FE]'
								: isNegative
								? 'text-[#F04438]'
								: isDifferent
								? 'text-[#14B8A6]'
								: 'text-[#12B76A]'
						}`}>
						{formatCurrency(value, currency)}
					</p>
					<div className="flex items-center justify-start gap-2">
						<p className="text-[10px] font-medium text-[#3D3D3D]">{title}</p>
						<div className={`flex items-center gap-1 ${changeColor}`}>
							<TrendIcon className="h-4 w-4" />
							<span className="text-[10px] font-medium">{change}%</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
