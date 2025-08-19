import Image from 'next/image';
import { Logo } from '../../../../public/assets';
import { Bell } from 'lucide-react';
import { TbCalculatorFilled } from 'react-icons/tb';
import { FaCalendarDays } from 'react-icons/fa6';
import { BsFillChatSquareDotsFill } from 'react-icons/bs';
import { Avatar, AvatarFallback, AvatarImage } from '@/component/common/avatar';
import Calendar from './modals/calendar';
import CreateBudgetModal from './modals/create-budget';

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	isCalendarOpen: boolean;
	setIsCalendarOpen: (isCalendarOpen: boolean) => void;
}

const TopNavbar = ({ isCalendarOpen, isOpen, setIsCalendarOpen, setIsOpen }: Props) => {
	return (
		<>
			{isCalendarOpen && <Calendar onClose={() => setIsCalendarOpen(false)} />}
			{isOpen && <CreateBudgetModal onClose={() => setIsOpen(false)} />}
			<div className="bg-black py-5 px-[4rem]">
				<div className="flex justify-between items-center">
					<Image src={Logo} alt="Myxellia Logo" width={153} height={26} />
					<div className="flex justify-end items-center space-x-8">
						<Bell className="w-[30px] h-[30px] text-white cursor-pointer" fill="currentColor" />
						<TbCalculatorFilled
							onClick={() => setIsOpen(true)}
							className="w-[32px] h-[32px] text-white cursor-pointer"
						/>
						<FaCalendarDays
							onClick={() => setIsCalendarOpen(true)}
							className="w-[30px] h-[30px] text-white cursor-pointer"
						/>
						<BsFillChatSquareDotsFill className="w-[30px] h-[30px] text-white relative cursor-pointer" />
						<Avatar className="w-[40px] h-[40px] bg-white cursor-pointer">
							<AvatarImage src="" alt="User" />
							<AvatarFallback className="font-medium text-[23px] leading-[130%] tracking-normal">
								D
							</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</div>
		</>
	);
};
export default TopNavbar;
