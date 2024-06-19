import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SpinWheel from './spin-wheel.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className="bg-[#230040] p-0 m-0 h-full w-full" id="app-container">
			<div className="bg-[#230040] w-full 2xl:max-w-[80rem] 2xl:mx-auto 2xl:my-0 flex flex-col relative">
				<div className="sticky top-0 bg-[#110020] text-white text-[16px] h-[48px] z-[100] flex content-center flex-wrap justify-between pl-4 pr-2">
					<div className="h-full flex items-center flex-wrap justify-center">
						<svg
							aria-labelledby="Jackpot City Casino"
							viewBox="0 0 90 24"
							className="h-[24px]"
						>
							<path
								fill="#bd0aff"
								d="M66.5,15.98l-21.6,6.43-1.32.39-1.39.41-24.31-7.24h-2.64l26.92,8.01h.02s2.71-.8,2.71-.8l1.32-.39,22.92-6.82h-2.63ZM42.19.78l1.39.41,1.32.39,7.81,2.32h2.63l-9.12-2.72-1.32-.39L42.21,0h-.02s-13.15,3.91-13.15,3.91h2.63l10.51-3.13ZM71.91,15.98l-24.31,7.24-1.39-.41-1.32-.39-21.6-6.43h-2.64l22.92,6.82,1.32.39,2.69.8h.02s26.94-8.01,26.94-8.01h-2.64ZM44.9,1.59l1.32-.39,1.39-.41,10.51,3.13h2.63L47.63,0h-.02s-2.71.8-2.71.8l-1.32.39-9.12,2.72h2.63l7.81-2.32Z"
							></path>
							<path
								fill="#fff"
								d="M35.27,16.53c.11-.07.24-.1.38-.1.1,0,.19.01.27.04.08.03.14.06.2.1.06.04.12.08.17.12v-.49c-.08-.07-.17-.12-.28-.16s-.23-.06-.38-.06c-.17,0-.32.03-.47.09-.15.06-.28.14-.39.25-.11.11-.2.24-.27.38s-.1.31-.1.49.03.35.1.49c.07.15.15.28.27.38.11.11.24.19.39.25.15.06.31.09.47.09.15,0,.28-.02.4-.06.12-.04.22-.1.3-.17v-.47c-.09.07-.18.13-.29.17-.1.05-.24.07-.39.07-.14,0-.26-.03-.38-.1-.11-.07-.2-.16-.27-.27-.07-.11-.1-.24-.1-.39s.03-.28.1-.39c.07-.11.16-.2.27-.27h0ZM39.02,16.01l-1.08,2.34h.57l.18-.43h.92l.18.43h.57l-1.08-2.34h-.24ZM38.85,17.51l.29-.71.29.71h-.58ZM42.94,17.89c-.07.04-.15.06-.25.06-.14,0-.27-.03-.39-.08-.12-.05-.23-.11-.34-.19v.48c.09.07.2.12.33.17.13.05.26.07.39.07.16,0,.31-.03.44-.09.13-.06.24-.14.32-.25.08-.1.12-.23.12-.37,0-.13-.04-.24-.12-.34-.08-.1-.2-.18-.36-.25l-.28-.12c-.1-.04-.18-.08-.25-.12-.07-.04-.1-.1-.1-.17,0-.06.02-.1.06-.14.04-.04.09-.07.15-.08.06-.02.12-.03.18-.03.12,0,.23.02.32.07.09.04.18.09.27.14v-.48c-.08-.05-.17-.09-.28-.13-.11-.04-.23-.06-.37-.06-.15,0-.28.03-.41.09-.13.06-.23.14-.3.25-.08.1-.12.23-.12.37s.03.26.1.37c.06.11.19.2.37.27l.36.14c.07.03.13.06.19.1.06.04.08.09.08.15,0,.08-.03.13-.1.17h0ZM46.44,16.02h-.48v2.33h.48v-2.33ZM49.53,16.96l1.38,1.42h.17v-2.34h-.48v1.42l-1.38-1.44h-.17v2.34h.48v-1.4ZM55.09,16.32c-.11-.11-.24-.19-.39-.25-.15-.06-.3-.09-.47-.09s-.32.03-.47.09c-.15.06-.28.14-.39.25-.11.11-.2.24-.26.38-.06.15-.1.31-.1.49s.03.35.1.49c.06.15.15.28.26.38.11.11.24.19.39.25.15.06.3.09.47.09s.32-.03.47-.09c.15-.06.28-.14.39-.25.11-.11.2-.24.26-.38.06-.15.1-.31.1-.49s-.03-.35-.1-.49c-.06-.15-.15-.28-.26-.38ZM54.86,17.58c-.06.11-.15.21-.26.27-.11.07-.23.1-.37.1s-.26-.03-.37-.1c-.11-.07-.2-.16-.26-.27-.06-.11-.09-.24-.09-.39s.03-.28.09-.39c.06-.11.15-.2.26-.27.11-.07.23-.1.37-.1s.26.03.37.1c.11.07.19.16.26.27.06.11.09.24.09.39s-.03.27-.09.39ZM2.57,14.29c-1.07,0-1.94-.31-2.57-.93l.89-1.57h0c.49.47.97.69,1.52.69.91,0,1.49-.6,1.49-1.54v-6.41h2.04v6.44c0,1.09-.32,1.94-.95,2.51-.58.53-1.42.81-2.43.81h0ZM15.06,14.03l-3.11-8.07-.03-.07h-2.31l-.03.07-3.12,8.07-.06.15h2.13l.03-.07.48-1.32h3.45l.48,1.32.03.07h2.12l-.06-.15ZM9.59,11.08l1.18-3.25,1.17,3.25h-2.35,0ZM23.23,12.19l-.06.11c-.78,1.36-1.97,2.04-3.54,2.04-1.19,0-2.28-.42-3.08-1.19-.82-.79-1.27-1.89-1.27-3.1s.45-2.32,1.27-3.1c.8-.77,1.89-1.19,3.08-1.19,1.97,0,3.01,1.1,3.54,2.03l.06.11-.11.05-1.48.73-.1.05-.05-.1c-.35-.68-1.08-1.11-1.86-1.11-1.34,0-2.36,1.09-2.36,2.54s1.01,2.54,2.36,2.54c.8,0,1.51-.43,1.86-1.11l.05-.1.1.05,1.48.71.11.05h0ZM31.74,14.19h-2.41l-.03-.04-2.36-3.12-.51.61v2.55h-1.95V5.89h1.95v3.39l2.65-3.35.03-.04h2.42l-.16.19-3.15,3.72,3.37,4.21.15.18ZM36.85,5.89h-3.89v8.3h1.95v-2.89h1.94c.86,0,1.58-.28,2.09-.8.47-.48.73-1.16.73-1.9,0-1.35-.87-2.72-2.82-2.72h0ZM36.62,9.59h-1.71v-2h1.71c.63,0,1.07.41,1.07,1s-.43,1-1.07,1ZM44.96,5.75c-2.51,0-4.33,1.8-4.33,4.29s1.82,4.29,4.33,4.29,4.34-1.8,4.34-4.29-1.82-4.29-4.34-4.29ZM44.96,12.58c-1.37,0-2.33-1.04-2.33-2.54s.96-2.54,2.33-2.54,2.34,1.04,2.34,2.54-.96,2.54-2.34,2.54ZM56.61,5.89v1.74h-2.35v6.56h-1.96v-6.56h-2.36v-1.74h6.67ZM64.63,14.34c-1.38,0-2.65-.49-3.57-1.37-.94-.91-1.46-2.18-1.46-3.59s.52-2.68,1.46-3.59c.92-.89,2.19-1.37,3.57-1.37,2.28,0,3.48,1.28,4.09,2.34l-1.76.86c-.44-.85-1.35-1.39-2.33-1.39-1.67,0-2.93,1.35-2.93,3.15s1.26,3.15,2.93,3.15c1,0,1.89-.53,2.33-1.39l1.76.85c-.91,1.57-2.28,2.36-4.08,2.36h0ZM72.15,5.89h-1.95v8.3h1.95V5.89ZM80.11,5.89v1.74h-2.35v6.56h-1.96v-6.56h-2.36v-1.74h6.67ZM89.28,5.89l-.11.18-3.07,4.74v3.39h-1.95v-3.39l-3.09-4.74-.11-.18h2.23l.03.05,1.91,3.09,1.89-3.09.03-.06h2.23Z"
							></path>
						</svg>
						<img
							src="https://pa.jackpotcitycasino.com/static/media/livecasinohotel-topbar-logo-pa.73c1af52.svg"
							alt="Live Casino Hotel"
							className="h-[48px] ml-2"
						></img>
					</div>
					<div className="h-full flex content-center flex-wrap justify-center">
						<div className="flex content-center flex-wrap justify-center text-[12px] font-bold leading-[14px]">
							<span>$99999.99</span>
						</div>
						<div className="flex content-center flex-wrap justify-center mx-2">
							<svg
								viewBox="0 0 24 24"
								className="h-[24px] w-[24px]"
								fill="white"
							>
								<path d="M12 0a12 12 0 0 0-7 21.8 12.1 12.1 0 0 0 14 0A12 12 0 0 0 12 0zm7 19.1V18a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v1.1c-1.8-1.8-3-4.4-3-7.1C2 6.5 6.5 2 12 2s10 4.5 10 10c0 2.8-1.1 5.3-3 7.1zM12 4c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"></path>
							</svg>
						</div>
						<div className="flex content-center flex-wrap justify-center">
							<img
								src="https://pa.jackpotcitycasino.com/static/media/pennsylvania-rg-logo.7fb67fd2.svg"
								alt="Responsible gaming logo"
								data-testid="responsible-gaming-logo"
								className="responsibleGamingLogo__Img-idTYiL kJJGqc"
							/>
						</div>
					</div>
				</div>
				<div className="sticky top-[48px] bg-[#391a54] text-white text-[16px] font-bold h-[48px] z-[100] flex content-center flex-wrap">
					<span className="flex content-center justify-center h-full flex-wrap hover:cursor-pointer hover:text-[#d4d4d4] text-[14px] p-[15px] font-bold leading-[18px]">
						<svg
							viewBox="0 0 24 24"
							className="h-[15px] mr-[15px] mt-[2px]"
							fill="white"
						>
							<path d="M5 12c0-.5.2-1 .6-1.4l10-10c.8-.8 2-.8 2.8 0s.8 2 0 2.8L9.8 12l8.6 8.6c.8.8.8 2 0 2.8s-2 .8-2.8 0l-10-10A2 2 0 0 1 5 12z"></path>
						</svg>
						Bonus Wheel
					</span>
				</div>
				<SpinWheel />
				<div
					id="legal"
					className="text-[#999999] text-center text-[12px]"
				>
					<p className="mt-12">
						Jackpot City is regulated by the Pennsylvania Gaming
						Control Board (“PGCB”) and offers online sports and
						casino wagering within Pennsylvania through an agreement
						with Stadium Casino RE LLC d/b/a Live! Casino.
						<br />
						<br />
						Stadium Casino RE LLC License Number – 105232
						<br />
						Interactive Gaming Operator License Number – 129662-1
						<br />
						<br />
						Jackpot City is operated in the United States by Digital
						Gaming Corporation USA, 123 Town Square Place, PO Box
						#530, Jersey City, NJ 07130-1756
						<br />
						<br />
						Patrons must be over the age of 21 and physically
						present in Pennsylvania to wager.
					</p>
					<div id="links" className="text-white underline mt-10">
						<div className="center mt-5">
							<a
								className="dark-c-gray-50 light-c-gray-50"
								data-link-id="Footer0"
								href="/dyn/tcFull"
								data-intent='{"name":"launch-dynamic-content","id":"tcFull"}'
							>
								Terms of Use
							</a>
							|
							<a
								className="dark-c-gray-50 light-c-gray-50"
								data-link-id="Footer1"
								href="/dyn/privacyPolicy"
								data-intent='{"name":"launch-dynamic-content","id":"privacyPolicy"}'
							>
								Privacy Policy
							</a>
							&nbsp;
						</div>
						<div className="center mt-1">
							<a
								className="dark-c-gray-50 light-c-gray-50"
								data-link-id="Footer2"
								href="/dyn/responsibleGaming"
								data-intent='{"name":"launch-dynamic-content","id":"responsibleGaming"}'
							>
								Responsible Gaming
							</a>
							|
							<a
								className="dark-c-gray-50 light-c-gray-50"
								data-link-id="Footer3"
								href="/dyn/ensightenConsent"
								data-intent='{"name":"launch-dynamic-content","id":"ensightenConsent"}'
							>
								Do Not Sell or Share My Personal Information
							</a>
						</div>
						<div className="center mt-1">
							<a
								className="dark-c-gray-50 light-c-gray-50"
								target="_blank"
								data-link-id="Footer4"
								href="https://support.usa.jackpotcitycasino.com/"
								data-intent='{"name":"launch-external-url","url":"https://support.usa.jackpotcitycasino.com/"}'
							>
								Contact Us
							</a>
						</div>
					</div>
					<div className="flex justify-center flex-wrap mt-10">
						<img src="https://betway-sports-backoffice-content.launchapp.us/Storage/5/7161.png" />
						<img src="https://betway-sports-backoffice-content.launchapp.us/Storage/5/7602.png" />
						<img src="https://betway-sports-backoffice-content.launchapp.us/Storage/5/7603.png" />
						<img src="https://betway-sports-backoffice-content.launchapp.us/Storage/5/7163.png" />
					</div>
					<div className="center mt-10 dark-c-gray-400 light-c-gray-400">
						<strong>
							If you or someone you know has a gambling problem,
							help is available. Call
						</strong>
						<strong className="dark-c-gray-50 light-c-gray-50">
							1-800-GAMBLER
						</strong>
						or visit
						<a
							target="_blank"
							data-link-id="Footer7"
							href="https://www.ncpgambling.org/"
							data-intent='{"name":"launch-external-url","url":"https://www.ncpgambling.org/"}'
						>
							www.ncpgambling.org
						</a>
						.
					</div>
					<hr className="my-10 border-t-[1px] border-[#999999]"></hr>
					<div className="flex justify-center mt-10">
						<img
							className="zoom-150 px-3"
							src="https://betway-sports-backoffice-content.launchapp.us/Storage/5/45.png"
						/>
						<img
							className="zoom-150 px-3"
							src="https://betway-sports-backoffice-content.launchapp.us/Storage/5/46.png"
						/>
					</div>
					<div className="text-white">
						© 2024 Digital Gaming Corporation USA, d/b/a Jackpot
						City, 123 Town Square Place, PO Box #530, Jersey City,
						NJ 07130-1756
					</div>
					<div className="text-white my-10">
						Platform Version: 8.16
					</div>
					<hr className="my-10 border-t-[1px] border-[#999999]"></hr>
				</div>
				<div className="sticky bottom-0 bg-[#110020] text-[#cbc8cc] text-[10px] h-[48px] z-[100] flex justify-around content-center flex-wrap font-light">
					<div className="flex flex-wrap justify-center content-center flex-col">
						<svg
							viewBox="0 0 24 24"
							className="h-[20px]"
							fill="#cbc8cc"
						>
							<path d="m23.7 11.3-11-11a1 1 0 0 0-1.4 0l-11 11c-.4.4-.4 1 0 1.4s1 .4 1.4 0L4 10.4V23c0 .5.4 1 1 1h5c.6 0 1-.5 1-1v-5h2v5c0 .5.4 1 1 1h5c.5 0 1-.5 1-1V12.2a1 1 0 0 0-2 0V22h-3v-5c0-.5-.4-1-1-1h-4a1 1 0 0 0-1 1v5H6V8.4l6-6 10.3 10.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z"></path>
						</svg>
						<span>Home</span>
					</div>
					<div className="flex flex-wrap justify-center content-center flex-col">
						<svg
							viewBox="0 0 24 24"
							className="h-[20px]"
							fill="#cbc8cc"
						>
							<path d="M21 6h-.6L14.7.3a1 1 0 0 0-1.4 0L11.5 2 9.7.3a1 1 0 0 0-1.4 0l-3 3a1 1 0 1 0 1.4 1.4L9 2.4 12.5 6H1A1 1 0 0 0 0 7v16c0 .5.5 1 1 1h20a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm-8-2.5 1-1L17.6 6h-2.2l-2.5-2.5ZM2 22V8h15c.5 0 1 .5 1 1v2h-1.8c-2 0-4 1.5-4.2 3.6a4 4 0 0 0 4 4.4h2v2c0 .5-.5 1-1 1H2Zm14-5a2 2 0 0 1-2-2.3c.2-1 1.1-1.7 2.1-1.7H22v4h-6Zm6 4c0 .5-.5 1-1 1h-1.2l.2-1v-2h2v2Zm-2-10V9c0-.4 0-.7-.2-1H21c.5 0 1 .5 1 1v2h-2Z"></path>
						</svg>
						<span>Banking</span>
					</div>
					<div className="flex flex-wrap justify-center content-center flex-col">
						<svg
							viewBox="0 0 24 24"
							className="h-[20px]"
							fill="#cbc8cc"
						>
							<path d="M24 9c0-1.7-.9-3-2-3v6c1.1 0 2-1.3 2-3zm-3 1V1c0-.3-.2-.6-.4-.8-.3-.2-.7-.2-1-.1L9.8 4H5C2.2 4 0 6.2 0 9s2.2 5 5 5h.3l2.9 8c.3.8.8 1.4 1.6 1.7.4.2.8.3 1.3.3l1-.2a3.1 3.1 0 0 0 1.9-3.5v-.2l-.2-.5v-.1l-1-2.8c-.2-.5-.8-.8-1.3-.6-.5.2-.8.8-.6 1.3l.2.5v.1l1 2.7c.2.5-.1 1.1-.6 1.3-.2.1-.5.1-.8 0s-.4-.3-.5-.6L7.4 14h2.4l9.8 3.9.4.1.6-.2c.3-.2.4-.5.4-.8v-7zM5 12c-1.7 0-3-1.4-3-3s1.3-3 3-3v6zm4 0H7V6h2v6zm10 3.5-8-3.2V5.7l8-3.2v13z"></path>
						</svg>
						<span>Promotions</span>
					</div>
				</div>
			</div>
		</div>
	</React.StrictMode>
);
