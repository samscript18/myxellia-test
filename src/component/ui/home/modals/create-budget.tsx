import ModalWrapper from '@/component/animations/modal-wrapper';
import { Calculator, Settings2, TrendingUp } from 'lucide-react';
import { BsBarChartLine } from 'react-icons/bs';

interface Props {
	onClose?: () => void;
}

const CreateBudgetModal = ({ onClose }: Props) => {
	return (
		<ModalWrapper>
			<div className="bg-white flex flex-col items-center justify-center rounded-[10px] max-w-[438px] h-auto max-h-[93vh] shadow-2xl">
				<div className="w-full h-auto bg-[#0C2841] flex justify-center pt-5 px-4 overflow-hidden rounded-t-[10px]">
					<div className="w-[386px] h-[246px] bg-[#061520]/70 rounded-[10px] flex items-start justify-center">
						<Calculator className="w-[80px] h-[80px] text-white mt-[3rem] z-10" />
					</div>
				</div>
				<div className="px-8 py-6">
					<div className="space-y-8 px-4">
						<div className="flex items-start gap-4">
							<div className="w-[24px] h-[24px] flex items-center justify-center flex-shrink-0 mt-1">
								<Settings2 className="w-6 h-6 text-[#52525B]" />
							</div>
							<div>
								<h3 className="font-semibold text-[#191919] text-[16px] mb-1 leading-[100%] tracking-normal">
									Set up annual budgets by account category
								</h3>
								<p className="text-[12px] text-[#606060] font-normal">
									Allocate funds across income and expense lines with full visibility.
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="w-[24px] h-[24px] border border-[#52525B] rounded-md  flex items-center justify-center flex-shrink-0 mt-1">
								<TrendingUp className="w-4 h-4 text-[#52525B]" />
							</div>
							<div>
								<h3 className="font-semibold text-[#191919] text-[16px] mb-1 leading-[100%] tracking-normal">
									Track actuals vs budget in real time
								</h3>
								<p className="text-[12px] text-[#606060] font-normal">
									See how your community is performing against plan, month by month.
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="w-[24px] h-[24px] flex items-center justify-center flex-shrink-0 mt-1">
								<BsBarChartLine className="w-5 h-5 text-[#52525B]" />
							</div>
							<div>
								<h3 className="font-semibold text-[#191919] text-[16px] mb-1 leading-[100%] tracking-normal">
									Adjust figures and forecast with ease
								</h3>
								<p className="text-[12px] text-[#606060] font-normal">
									Edit amounts, apply percentage changes, or roll forward last year&#39;s data—all in one place.
								</p>
							</div>
						</div>

						<button
							onClick={onClose}
							className="w-full text-[16px] leading-[140%] tracking-[1%] bg-[#18181B] text-white py-3 rounded-full font-medium hover:bg-[#18181B]/90 transition-colors cursor-pointer">
							Create Budget
						</button>
					</div>
				</div>
			</div>
		</ModalWrapper>
	);
};
export default CreateBudgetModal;
