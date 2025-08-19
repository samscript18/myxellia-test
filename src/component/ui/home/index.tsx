'use client';

import { useState } from 'react';
import DashboardNavbar from './dashboard-nav';
import Main from './main';
import TopNavbar from './top-nav';

const Dashboard = () => {
	const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<div>
			<TopNavbar
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				isCalendarOpen={isCalendarOpen}
				setIsCalendarOpen={setIsCalendarOpen}
			/>
			<DashboardNavbar />
			<Main />
		</div>
	);
};
export default Dashboard;
