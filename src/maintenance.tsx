import clsx from 'clsx';
import { isJpcWheel } from './service';

function Maintenance() {
	return (
		// <div className="bg-[#6d1493] h-[100vh] text-white flex justify-center items-center text-[40px]">
		<div
			className={clsx(
				'h-[100vh] text-white px-[20px] xl:px-[30vw]',
				isJpcWheel ? 'bg-[#6d1493]' : 'bg-[#222222]'
			)}
		>
			<div className="h-full text-center pt-[25vh]">
				<h1 className="text-[26px] pb-[20px]">Maintenance</h1>
				<p className='text-[16px]'>
					We are currently performing maintenance on the Promo Wheel
					to enhance your gaming experience. It will be back online
					shortly, ready to give you more spins and exciting
					promotions! During this brief downtime, we invite you to
					explore our extensive collection of slots, table games, and
					live dealer games. Thank you for your patience.
				</p>
			</div>
		</div>
	);
}

export default Maintenance;
