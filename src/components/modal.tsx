import clsx from 'clsx';
import { isJpcWheel } from '../service';
interface ModalProps {
	onClose: () => void;
	message: string;
	title: React.ReactNode;
	buttonText: string;
	buttonLink: string;
}

function Modal({
	onClose,
	message,
	title,
	buttonText,
	buttonLink
}: ModalProps) {
	const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-75"
			onClick={handleClickOutside}
		>
			<div
				className={clsx(
					'text-center p-4 rounded-lg shadow-lg relative w-[311px] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw]',
					isJpcWheel ? 'bg-[#4F3366]' : 'bg-[#555555]'
				)}
			>
				<h2 className="text-[#F3F0F5] font-[700] text-[14px]">
					{title}
				</h2>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-white hover:text-[#F3F0F5]"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<div className="text-center text-[#F3F0F5] text-[14px] pt-4 pb-4">
					{message}
				</div>
				<a
					href={buttonLink}
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'block w-[100%] px-4 py-2 text-white font-[700] text-[13px] rounded text-center',
						isJpcWheel ? 'bg-[#BD0AFF]' : 'bg-[#0054a4]'
					)}
				>
					{buttonText}
				</a>
			</div>
		</div>
	);
}

export default Modal;
