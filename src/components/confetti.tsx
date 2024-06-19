import  desktopCoinGif  from '../assets/videos/coin-drop-desktop.gif';
import mobileCoinGif from '../assets/videos/coin-drop-mobile.gif';
import { isJpcWheel } from '../service.ts';
import { isMobile } from '../util.ts';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

export default function ConfettiComponent() {
	const { width, height } = useWindowSize();
	const themeColors = isJpcWheel
		? ['#fb00ff', '#7b00ff', '#4c00ff', '#00a2ff']
		: ['#1218a4', '#53c6e0', '#53c6e0'];

	return isJpcWheel ? (
		<div className="absolute h-[100vh] w-[100vw] top-0 overflow-hidden">
			<Confetti
				className="!z-[10]"
				width={width}
				height={height}
				colors={themeColors}
				numberOfPieces={200}
			/>
		</div>
	) : (
		<div className="!z-[8] absolute h-[100vh] w-[100vw] top-0 overflow-hidden">
			<img
				src={isMobile ? mobileCoinGif : desktopCoinGif}
				className="min-h-[125%] md:min-h-full min-w-[150%] md:min-w-full right-0 bottom-0 fixed"
			/>
		</div>
	);
}
