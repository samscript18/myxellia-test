import { Newspaper, Search, User } from 'lucide-react';
import { BsCardText } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { PiToolbox } from 'react-icons/pi';

const DashboardNavbar = () => {
	return (
		<nav className="bg-white border-b border-gray-200 py-5 px-[4rem] shadow-sm">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-2 text-[#191919] bg-[#F5F5F5] rounded-[8px] px-9 py-2 cursor-pointer">
					<HiHome className="w-6 h-6" fill="currentColor" />
					<span className="font-semibold text-sm">Dashboard</span>
				</div>
				<div className="flex items-center space-x-2 text-[#3D3D3D] hover:text-[#191919] hover:bg-[#F5F5F5] hover:rounded-[8px] px-9 py-2 hover:font-semibold font-normal cursor-pointer">
					<PiToolbox className="w-6 h-6" />
					<span className="text-sm">Listings</span>
				</div>
				<div className="flex items-center space-x-2 text-[#3D3D3D] hover:text-[#191919] hover:bg-[#F5F5F5] hover:rounded-[8px] px-9 py-2 hover:font-semibold font-normal  cursor-pointer">
					<User className="w-6 h-6" />
					<span className="text-sm">Users</span>
				</div>
				<div className="flex items-center space-x-2 text-[#3D3D3D] hover:text-[#191919] hover:bg-[#F5F5F5] hover:rounded-[8px] px-9 py-2 hover:font-semibold font-normal  cursor-pointer">
					<BsCardText className="w-6 h-6" />
					<span className="text-sm">Request</span>
				</div>
				<div className="flex items-center space-x-2 text-[#3D3D3D] hover:text-[#191919] hover:bg-[#F5F5F5] hover:rounded-[8px] px-9 py-2 hover:font-semibold font-normal  cursor-pointer">
					<Newspaper className="w-6 h-6" />
					<span className="text-sm">Applications</span>
				</div>

				<div className="relative">
					<Search className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3D3D3D]" />
					<input
						type="text"
						placeholder="Search listings, users here..."
						className="pl-10 pr-4 py-2.5 border bg-graY-400 placeholder:text-[#919191] placeholder:font-normal border-gray-300 rounded-lg text-[12px] focus:outline-none focus:ring-2 focus:ring-[#191919] focus:border-transparent w-64"
					/>
				</div>
			</div>
		</nav>
	);
};
export default DashboardNavbar;
