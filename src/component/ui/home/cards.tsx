interface Props {
	id: number;
	title: string;
	img: string;
	count: number;
}

const SingleCard = ({ id, count, img, title }: Props) => {
	return (
		<div
			key={id}
			className="relative h-[286px] w-full overflow-hidden rounded-[12px] cursor-pointer group">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out group-hover:scale-105"
				style={{
					backgroundImage: `url(${img})`,
				}}>
				<div className="absolute inset-0 bg-gradient-to-t from-[#00000099] to-[#0000000D]" />
			</div>
			<div className="relative z-10 flex h-full flex-col justify-end p-2.5">
				<div>
					<p className="text-[14px] font-normal mb-2 leading-[100%] tracking-normal text-white">{title}</p>
					<h1 className="mb-4 text-[18px] font-semibold leading-[100%] tracking-normal text-white">
						Urban Prime Plaza Premiere
					</h1>
					<div className="flex justify-center items-center space-x-2">
						{Array.from({ length: count }).map((_, index) => {
							return (
								<div
									key={index}
									className={`h-1.5 w-1.5 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/40'}`}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse opacity-20"></div>
		</div>
	);
};
export default SingleCard;
