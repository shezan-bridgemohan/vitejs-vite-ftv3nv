import { isJpcWheel } from '../service';
import mobileLoadVideo from '../assets/videos/load-mobile.mp4';
import mobilePoster from '../assets/images/jpc-bg-mobile.webp';
import desktopLoadVideo from '../assets/videos/load-desktop.mp4';
import desktopPoster from '../assets/images/jpc-bg.webp';
import { isMobile } from '../util';

export default function Loader() {
	if (isJpcWheel) {
		return (
			<video
				autoPlay
				poster={isMobile ? mobilePoster : desktopPoster}
				playsInline
				muted
				loop
				className="background-video absolute object-cover w-full h-full z-[1]"
			>
				<source
					src={isMobile ? mobileLoadVideo : desktopLoadVideo}
					type="video/mp4"
				/>
			</video>
		);
	} else {
		return (
			<div className="absolute top-[0%] w-full h-full z-9 bg-[#222222]">
				<div className="bg-black flex justify-center content-start">
					<div className="radar-wrapper">
						<div className="radar-emitter w-[8vh] h-[8vh] lg:w-[15vh] lg:h-[15vh]">
							<div className="radar-wave radar-wave1"></div>
							<div className="radar-wave radar-wave2"></div>
							<div className="radar-wave radar-wave3"></div>
							<div className="radar-wave radar-wave4"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
