'use client';

import { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import ModalWrapper from '@/component/animations/modal-wrapper';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';

interface CalendarProps {
	onClose?: () => void;
	onDateSelect?: (date: Date) => void;
	selectedDate?: Date;
}

export default function Calendar({ onClose, onDateSelect }: CalendarProps) {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDay, setSelectedDay] = useState<number>(new Date().getDate());

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

	const getDaysInMonth = (date: Date) => {
		return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	};

	const getFirstDayOfMonth = (date: Date) => {
		return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	};

	const getPreviousMonth = () => {
		setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
	};

	const getNextMonth = () => {
		setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
	};

	const handleDateClick = (day: number) => {
		setSelectedDay(day);
		const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
		onDateSelect?.(newDate);
	};

	const renderCalendarDays = () => {
		const daysInMonth = getDaysInMonth(currentDate);
		const firstDay = getFirstDayOfMonth(currentDate);
		const weeks = [];

		const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
		const daysInPrevMonth = prevMonth.getDate();

		let currentWeek = [];

		for (let i = firstDay - 1; i >= 0; i--) {
			const day = daysInPrevMonth - i;
			currentWeek.push(
				<td
					onClick={() => {
						getPreviousMonth();
						setSelectedDay(day);
					}}
					key={`prev-${day}`}
					className="border-[0.47px] border-[#242424] pl-2 text-start pb-14 w-[50px] h-[90px] text-[#969696] hover:bg-[#98A2B3]/20 transition-colors text-[9.94px]">
					{day}
				</td>
			);
		}

		for (let day = 1; day <= daysInMonth; day++) {
			const isSelected = day === selectedDay;
			currentWeek.push(
				<td
					key={day}
					onClick={() => handleDateClick(day)}
					className={`w-[50px] h-[90px] transition-colors text-[9.94px] font-medium border-[0.47px] border-[#242424] pl-2 text-start pb-14 ${
						isSelected ? 'bg-[#2525E6] text-white' : 'text-white hover:bg-[#98A2B3]/20'
					}`}>
					{day}
				</td>
			);
			if (currentWeek.length === 7) {
				weeks.push(<tr key={`week-${weeks.length}`}>{currentWeek}</tr>);
				currentWeek = [];
			}
		}

		let nextMonthDay = 1;

		while (currentWeek.length < 7) {
			currentWeek.push(
				<td
					onClick={() => {
						getNextMonth();
						setSelectedDay(nextMonthDay);
					}}
					key={`next-${nextMonthDay}`}
					className="border-[0.47px] border-[#242424] pl-2 text-start pb-14 w-[50px] h-[90px] text-[#969696] hover:bg-[#98A2B3]/20 transition-colors text-[9.94px]">
					{nextMonthDay}
				</td>
			);
			nextMonthDay++;
		}

		if (currentWeek.length > 0) {
			weeks.push(<tr key={`week-${weeks.length}`}>{currentWeek}</tr>);
		}

		return weeks;
	};

	return (
		<ModalWrapper>
			<div className="text-white w-full h-[93vh] shadow-2xl overflow-y-scroll">
				<div className="bg-[#171717] flex items-center justify-between p-4 pb-6">
					<div className="flex items-center gap-3">
						<button
							onClick={onClose}
							className="p-1 hover:bg-[#98A2B3]/20 rounded-sm cursor-pointer transition-colors">
							<ArrowLeft className="w-5 h-5" />
						</button>
						<h2 className="text-[16px] font-semibold">Calendar</h2>
					</div>
					<button
						onClick={onClose}
						className="p-1 hover:bg-[#98A2B3]/20 rounded-sm cursor-pointer transition-colors">
						<X className="w-5 h-5" />
					</button>
				</div>

				<div className="bg-[#0D0D0D] p-4 flex items-center justify-center gap-10 pb-6">
					<button
						onClick={getPreviousMonth}
						className="p-2 text-[#98A2B3] hover:bg-[#98A2B3]/20 rounded-sm cursor-pointer transition-colors">
						<FaCaretLeft className="w-5 h-5" />
					</button>
					<h3 className="text-[16px] font-semibold">
						{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
					</h3>
					<button
						onClick={getNextMonth}
						className="p-2 text-[#98A2B3] hover:bg-[#98A2B3]/20 rounded-sm cursor-pointer transition-colors">
						<FaCaretRight className="w-5 h-5" />
					</button>
				</div>
				<div className="p-4 bg-[#0D0D0D]">
					<table className="w-full border-collapse">
						<thead>
							<tr className="bg-[#0D0D0D] p-4 pb-2">
								{dayNames.map((day) => (
									<th
										key={day}
										className="text-start border-[0.47px] pl-2 border-[#242424] text-[7.58px] text-[#969696] font-medium py-2">
										{day}
									</th>
								))}
							</tr>
						</thead>
						<tbody className="bg-[#0D0D0D] p-4">{renderCalendarDays()}</tbody>
					</table>
				</div>
			</div>
		</ModalWrapper>
	);
}
