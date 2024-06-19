import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Lottie from 'lottie-react';

// Import necessary components from different files
import { Countdown, isMobile, appInsights } from './util.ts';
import { props } from './props.js';
import {
	getPromoAward,
	getPromoEligibility,
	isJpcWheel,
	launchToken,
	productId
} from './service.js';
import { Wheel } from '../node_modules/spin-wheel/dist/spin-wheel-esm.js';
import ConfettiComponent from './components/confetti.js';
import Loader from './components/loader.js';
import Modal from './components/modal';
import Shortform from './components/shortform.tsx';

// Import assets from different folders
import mobileLoadVideo from './assets/videos/load-mobile.json';
import desktopPoster from './assets/images/jpc-bg.webp';
import desktopLoadVideo from './assets/videos/load-desktop.mp4';
import backPlate from './assets/images/jpc-backplate.webp';
import betwayGoldRim from './assets/images/betway-rim-gold.webp';
import betwayRimLights from './assets/images/betway-rim.webp';
import betwaySpinIcon from './assets/images/betway-spin-icon.png';
import betwaySwarm from './assets/images/swarm.png';
import jpcSelector from './assets/images/jpc-selector.webp';
import jpcSpinIcon from './assets/images/jpc-spin-icon.webp';
import tickSound from './assets/audio/old-tick.wav';
import winAudio from './assets/audio/win.mp3';

const SpinWheel = () => {
	const [isWheelCreated, setIsWheelCreated] = useState(false);
	const [isSpin, setIsSpin] = useState(false);
	const [isRest, setIsRest] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
	const [isEligible, setIsEligible] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);
	const [isWheelItems, setIsWheelItems] = useState(false);
	const [isButtonClicked, setIsButtonClicked] = useState(false);
	const [remainingSeconds, setRemainingSeconds] = useState(0);
	const [modalMessage, setModalMessage] = useState('');
	const [modalTitle, setModalTitle] = useState('');
	const [encryptedData, setEncryptedData] = useState('');
	const [prizeAmount, setPrizeAmount] = useState('$0');
	const [contentHeight, setContentHeight] = useState(0);
	const [isDocumentReady, setIsDocumentReady] = useState(false);
	const [secondsElapsed, setSecondsElapsed] = useState('00:00:00'); // Timer state

	let isGetPromoEligiblity = false;
	const btnSpinRef = useRef(null);
	const iconSpinRef = useRef(null);
	const containerRef = useRef(null);
	const randomSegmentsArray: string[] = [];
	const [jpcWheelProps, setJPCWheelProps] = useState(props[0]);
	const [betwayWheelProps, setBetwayWheelProps] = useState(props[1]);
	const wheelProps = isJpcWheel ? jpcWheelProps : betwayWheelProps;
	const wonAudio: Partial<HTMLAudioElement> =
		document.getElementById('wonAudio');

	const handleCloseModal = () => {
		setShowModal(false);
		setIsSpin(false);
		wonAudio.pause();
	};

	const bodyParams = {
		launchToken: launchToken,
		productId: productId
	};

	// getPromoEligibility
	useEffect(() => {
		if (!isGetPromoEligiblity) {
			isGetPromoEligiblity = true;
			getPromoEligibility(bodyParams)
				.then((eligibilityData) => {
					// Process data
					appInsights.trackTrace({
						message: `FE | getPromoEligibility > segmentValues : ${eligibilityData.segmentValues}`,
						severityLevel: 1
					});
					appInsights.trackTrace({
						message: `FE | getPromoEligibility > isEligible : ${eligibilityData.isEligible}`,
						severityLevel: 1
					});
					appInsights.trackTrace({
						message: `FE | getPromoEligibility > remainingSeconds : ${eligibilityData.remainingSeconds}`,
						severityLevel: 1
					});
					appInsights.trackTrace({
						message: `FE | getPromoEligibility > encryptedData : ${eligibilityData.encryptedData}`,
						severityLevel: 1
					});

					const updatedWheelProps = {
						...wheelProps,
						items: eligibilityData.segmentValues.map((label) => ({
							label
						}))
					};
					updatedWheelProps.items.sort(() => Math.random() - 0.5);

					for (const key in updatedWheelProps.items) {
						randomSegmentsArray.push(
							updatedWheelProps.items[key].label
						);
					}

					appInsights.trackTrace({
						message: `FE | Randomized segments: ${randomSegmentsArray.slice(
							0,
							10
						)}`,
						severityLevel: 1
					});

					isJpcWheel
						? setJPCWheelProps(updatedWheelProps)
						: setBetwayWheelProps(updatedWheelProps);

					setIsEligible(eligibilityData.isEligible);
					setRemainingSeconds(eligibilityData.remainingSeconds);
					setEncryptedData(eligibilityData.encryptedData);
					setIsLoading(false);
				})
				.catch(() => {
					setModalTitle('Oops!');
					setModalMessage(
						'Something went wrong, please try again later'
					);
					setShowModal(true);
				});
		}
	}, []);

	// Confirm if jpcWheelProps || betwayWheelProps exist
	useEffect(() => {
		if (
			(jpcWheelProps.items && jpcWheelProps.items.length > 0) ||
			(betwayWheelProps.items && betwayWheelProps.items.length > 0)
		) {
			setIsWheelItems(true);
		}
	}, [jpcWheelProps.items, betwayWheelProps.items]);

	// Countdown timer
	useEffect(() => {
		const intervalId = setInterval(() => {
			setSecondsElapsed(Countdown(remainingSeconds));
			setRemainingSeconds((prevSeconds) => prevSeconds - 1);
			if (remainingSeconds <= 0) {
				clearInterval(intervalId);
				setIsEligible(true);
				setRemainingSeconds(0);
			}
		}, 1000);
		return () => clearInterval(intervalId);
	}, [remainingSeconds]);

	// Enable or Disable button if not eligible
	useEffect(() => {
		setIsDisabled(!isEligible);
	}, [isEligible]);

	useEffect(() => {
		if (document.readyState === 'complete') {
			setIsDocumentReady(true);
			setContentHeight(
				document.getElementById('content-container').scrollHeight
			);
		} else {
			setIsDocumentReady(false);
		}
		if (isDocumentReady) {
			document.getElementById(
				'video-container'
			).style.height = `${contentHeight}px`;
		}
	}, [contentHeight, isDocumentReady, isLoading]);

	// Spin Function
	useEffect(() => {
		if (isWheelItems && !isWheelCreated) {
			const wheel = new Wheel(containerRef.current, wheelProps);
			setIsWheelCreated(true);
			wheel.spinToItem(0, 0, true, 0, 1); // Fake spin to align wheel wedge on load
			const tickAudio = new Audio(tickSound);

			wheel.onCurrentIndexChange = () => {
				tickAudio.play();
			};

			const handleClick = async (e) => {
				if (
					e.target === btnSpinRef.current ||
					e.target === iconSpinRef.current
				) {
					setIsDisabled(true);
					setIsButtonClicked(true);
					const duration = 7500;
					const spinDirection = 1;
					const revolutions = 3;

					wheel.spinToItem(1, 500, true, 0, -1);

					setTimeout(() => {
						wheel.spinToItem(0, 17000, true, 8, spinDirection);
						setIsSpin(true);
					}, 500);

					try {
						const awardData = await getPromoAward(encryptedData);
						appInsights.trackTrace({
							message: `FE | getPromoAward > awardAmount: ${awardData.awardAmount}`,
							severityLevel: 1
						});
						appInsights.trackTrace({
							message: `FE | getPromoAward > resultMessage: ${awardData.resultMessage}`,
							severityLevel: 1
						});
						appInsights.trackTrace({
							message: `FE | getPromoAward > remainingSeconds: ${awardData.remainingSeconds}`,
							severityLevel: 1
						});
						setPrizeAmount(awardData.awardAmount);
						setRemainingSeconds(awardData.remainingSeconds);

						const newPrizeIndex = wheelProps.items.findIndex(
							(item) => item.label === awardData.awardAmount
						);

						if (newPrizeIndex !== -1) {
							wheel.spinToItem(
								newPrizeIndex,
								duration,
								true,
								revolutions,
								spinDirection
							);

							setModalTitle(
								awardData.awardAmount === '$0'
									? 'Maybe next time!'
									: 'Congratulations!'
							);
							setModalMessage(
								awardData.awardAmount === '$0'
									? 'You did not receive a daily reward today. Please come back tomorrow to claim your daily reward.'
									: `Your bonus has been credited ${awardData.awardAmount}`
							);

							appInsights.trackTrace({
								message: `FE | Prize index from randomized segments: ${newPrizeIndex}`,
								severityLevel: 1
							});

							wheel.onRest = () => {
								setIsRest(true);
								setIsEligible(false);
								if (awardData.awardAmount !== '$0') {
									wonAudio.play();
								}

								setTimeout(() => {
									setShowModal(true);
									setShowConfetti(
										awardData.awardAmount !== '$0'
									);
								}, 1500);
							};
						} else {
							appInsights.trackException({
								exception: new Error(
									`FE | Invalid prize index`
								),
								severityLevel: 3
							});
						}
					} catch (error) {
						wheel.remove();
						document.getElementById(
							'content-container'
						).style.display = 'none';
						setModalTitle('Oops!');
						setModalMessage(
							'Something went wrong, please try again later'
						);
						setShowModal(true);
						appInsights.trackException({
							exception: new Error(
								`FE | Error processing getPromoAward data: ${error}`
							),
							severityLevel: 3
						});
					}
				}
			};

			window.addEventListener('click', handleClick);

			return () => {
				window.removeEventListener('click', handleClick);
			};
		}
	}, [isWheelItems]);

	if (isLoading) {
		return (
			<>
				<Loader />
				{showModal && (
					<Modal
						onClose={handleCloseModal}
						title={modalTitle}
						message={modalMessage}
						buttonText={isJpcWheel ? 'Ok' : 'Back to lobby'}
						buttonLink={
							isJpcWheel
								? 'https://pa.jackpotcitycasino.com/casino?partner=live'
								: 'https://pa.betway.com/casino?partner=live'
						}
					/>
				)}
			</>
		);
	} else {
		return (
			<>
				<div
					className={clsx(
						'relative overflow-hidden w-full h-full',
						isJpcWheel
							? isMobile
								? ''
								: ''
							: isMobile
							? "w-full h-full bg-[url('./assets/images/betway-bg-image-mobile.png')] bg-[#0054a5] bg-center"
							: "w-full h-full bg-[url('./assets/images/betway-bg-image.png')] bg-[#0054a5] bg-bottom"
					)}
					id="video-container"
				>
					{isJpcWheel &&
						(isMobile ? (
							<Lottie
								animationData={mobileLoadVideo}
								loop={true}
								rendererSettings={{
									preserveAspectRatio: 'xMidYMid slice'
								}}
								className="background-video absolute object-cover w-full h-full z-[1] max-[330px]:top-[-1.5%]"
							/>
						) : (
							<video
								autoPlay
								poster={desktopPoster}
								playsInline
								muted
								loop
								className="background-video absolute object-cover w-full h-full z-[1]"
							>
								<source
									src={desktopLoadVideo}
									type="video/mp4"
								/>
							</video>
						))}
					<div className="relative" id="content-container">
						<audio id="wonAudio" className="hidden">
							<source src={winAudio} type="audio/mpeg" />
						</audio>
						<span className="text-center w-full h-full absolute max-[330px]:mt-[6rem] mt-[3rem]">
							<>
								<div className="absolute w-full flex justify-center">
									{!isJpcWheel && (
										<img
											className="absolute z-0 w-[70vw] h-full top-[0%] slide"
											src={betwaySwarm}
											alt=""
										/>
									)}
									<div
										className={clsx(
											'parent relative px-4 w-[calc(100vw-2rem)] h-[calc(100vw-2rem)] sm:w-[450px] sm:h-[450px]',
											isRest
												? 'overflow-hidden lg:overflow-visible'
												: ''
										)}
									>
										{isJpcWheel && (
											<>
												<img
													className="absolute z-[2] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-full w-full"
													src={backPlate}
													alt="."
												/>
												<img
													className={clsx(
														'absolute z-[6] w-[41%] left-[49%] top-[-4%] translate-x-[-50%]',
														isRest
															? 'pulse-glow'
															: ''
													)}
													src={jpcSelector}
													alt=""
													id="jpc-selector"
												/>
											</>
										)}
										{!isJpcWheel && (
											<>
												<img
													className={clsx(
														'absolute z-[7] w-[98%] h-[98%] left-[1%] top-[1%] hidden',
														isRest &&
															prizeAmount !== '$0'
															? 'flicker'
															: ''
													)}
													src={betwayGoldRim}
													alt=""
												/>
												<img
													className={clsx(
														'absolute z-[6] w-[96%] h-[96%] left-[2%] top-[2%]',
														isRest ? 'hidden' : '',
														isSpin
															? 'blink'
															: 'hidden'
													)}
													src={betwayRimLights}
													alt=""
												/>
											</>
										)}
										<img
											className={clsx(
												'absolute z-[7] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer hover:scale-105 rounded-full',
												isJpcWheel
													? 'w-[25%] top-[50%]'
													: 'w-[18%] top-[50%]',
												isButtonClicked
													? 'spin-click'
													: '',
												isRest ? 'pulse-glow' : '',
												isDisabled
													? 'pointer-events-none'
													: ''
											)}
											src={
												isJpcWheel
													? jpcSpinIcon
													: betwaySpinIcon
											}
											alt=""
											ref={iconSpinRef}
										/>
										<div
											className={clsx(
												'absolute rounded-[50%] w-[100%] h-[100%] md:w-[96%] md:h-[96%] left-[0%] top-[0%] md:left-[2%] md:top-[3%]',
												isSpin
													? 'spinning'
													: 'overflow-hidden',
												isJpcWheel && isSpin
													? 'jpc-glow'
													: 'betway-glow'
											)}
										></div>
									</div>
								</div>
							</>
							<div
								ref={containerRef}
								className="wheel-wrapper"
							></div>
							<button
								className={clsx(
									'btn-spin w-[311px] text-[13px] font-bold p-4 mt-[3rem] mb-[1rem] rounded-[4px] relative !z-[2]',
									isDisabled
										? 'bg-[#eeeeee33] text-white hover:bg-[#eeeeee50] cursor-not-allowed'
										: 'text-white',
									wheelProps.buttonColor,
									wheelProps.buttonHoverColor
								)}
								disabled={isDisabled}
								ref={btnSpinRef}
							>
								{isDisabled
									? `Next Spin in ${secondsElapsed}`
									: 'Spin'}
							</button>
							<Shortform />
						</span>
					</div>
				</div>

				{showModal && (
					<>
						<Modal
							onClose={handleCloseModal}
							title={modalTitle}
							message={modalMessage}
							buttonText={
								isJpcWheel ? 'Back to lobby' : 'Back to lobby'
							}
							buttonLink={
								isJpcWheel
									? 'https://pa.jackpotcitycasino.com/casino?partner=live'
									: 'https://pa.betway.com/casino?partner=live'
							}
						/>
						{showConfetti && <ConfettiComponent />}
					</>
				)}
			</>
		);
	}
};

export default SpinWheel;
