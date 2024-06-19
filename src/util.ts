import { ApplicationInsights } from '@microsoft/applicationinsights-web';
export const appInsights = new ApplicationInsights({
	config: {
		connectionString:
			'InstrumentationKey=5100b646-7ad2-4c99-84fe-e9b896a152db'
		/* ...Other Configuration Options... */
	}
});

appInsights.loadAppInsights();

const windowWidth = window.innerWidth;
export const isMobile = windowWidth <= 640 ? true : false;

export function Countdown(seconds: number) {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secondsLeft = seconds % 60;

	return `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
}