import { appInsights } from './util.ts';

const { VITE_ENVIRONMENT, VITE_DEV_FUNC_APP, VITE_PROD_FUNC_APP } = import.meta
	.env;
let domain;

if (VITE_ENVIRONMENT.includes('local')) {
	domain = 'http://localhost:3000';
	console.log('connected to: ', domain);
} else if (VITE_ENVIRONMENT.includes('dev')) {
	domain = VITE_DEV_FUNC_APP;
} else if (VITE_ENVIRONMENT.includes('prod')) {
	domain = VITE_PROD_FUNC_APP;
}

const urlParams = new URLSearchParams(window.location.search);
export const productId = urlParams.get('productId');
export const launchToken = urlParams.get('launchToken');
export const testCase = urlParams.get('testcase');

const productMap = {
	[import.meta.env.VITE_BETWAY_NJ]: 'Betway NJ',
	[import.meta.env.VITE_JPC_NJ]: 'JPC NJ',
	[import.meta.env.VITE_BETWAY_PA]: 'Betway PA',
	[import.meta.env.VITE_JPC_PA]: 'JPC PA'
};

export const product = productMap[productId] || '';
export const isJpcWheel = product.toUpperCase().includes('JPC');

export async function getPromoEligibility(data) {
	const controller = new AbortController();
	const signal = controller.signal;
	const timeout = setTimeout(() => {
		controller.abort();
		throw new Error('getPromoEligibility timed out after 17 seconds');
	}, 17000);

	const headers1 = new Headers();
	headers1.set('Content-Type', 'application/json');

	setTestCaseHeader(headers1, testCase); // Helper function to set headers and track

	try {
		const response = await fetch(
			domain + '/api/promoWheel/getPromoEligibility',
			{
				method: 'POST',
				headers: headers1,
				body: JSON.stringify(data),
				signal
			}
		);

		const responseJSON = await response.json();

		const missingValues = checkForMissingValues(responseJSON, [
			'segmentValues',
			'isEligible',
			'remainingSeconds',
			'encryptedData'
		]);

		if (missingValues.length > 0) {
			appInsights.trackException({
				exception: new Error(
					`FE | ${missingValues.join(
						', '
					)} is missing in getPromoEligibility response!`
				),
				severityLevel: 3
			});
			throw new Error(`Missing keys: ${missingValues.join(', ')}`);
		}

		if (!response.ok) {
			const error =
				response.status === 404
					? new Error(
							`getPromoEligibility request failed (Not Found): ${response.status}`
					  )
					: new Error(
							`getPromoEligibility request failed: ${response.status}`
					  );

			appInsights.trackException({
				exception: error,
				severityLevel: 3
			});

			throw error;
		}

		return responseJSON;
	} catch (ex) {
		appInsights.trackException({
			exception: new Error(`getPromoEligibility request failed: ${ex}`),
			severityLevel: 3
		});
		throw ex;
	} finally {
		clearTimeout(timeout); // Cleanup timeout even if request finishes before timeout
	}
}

export async function getPromoAward(encryptedData: string) {
	const controller = new AbortController();
	const signal = controller.signal;

	const timeout = setTimeout(() => {
		controller.abort();
		throw new Error('getPromoAward timed out after 22 seconds');
	}, 22000);

	const encryption = {
		EncryptedData: encryptedData
	};

	const headers2 = new Headers();
	headers2.set('Content-Type', 'application/json');

	setTestCaseHeader(headers2, testCase);

	try {
		const response = await fetch(domain + '/api/promoWheel/getpromoaward', {
			method: 'POST',
			headers: headers2,
			body: JSON.stringify(encryption),
			signal
		});

		const responseJSON = await response.json();

		const missingValues = checkForMissingValues(responseJSON, [
			'awardAmount',
			'remainingSeconds',
			'resultMessage'
		]);

		if (missingValues.length > 0) {
			appInsights.trackException({
				exception: new Error(
					`FE | ${missingValues.join(
						', '
					)} is missing in getPromoAward response!`
				),
				severityLevel: 3
			});
			throw new Error(`Missing keys: ${missingValues.join(', ')}`);
		}

		if (!response.ok) {
			const error =
				response.status === 404
					? new Error(
							`getPromoAward request failed (Not Found): ${response.status}`
					  )
					: new Error(
							`getPromoAward request failed: ${response.status}`
					  );

			appInsights.trackException({
				exception: error,
				severityLevel: 3
			});

			throw error;
		}

		return responseJSON;
	} catch (ex) {
		appInsights.trackException({
			exception: new Error(`getPromoAward request failed: ${ex}`),
			severityLevel: 3
		});
		throw ex;
	} finally {
		clearTimeout(timeout); // Cleanup timeout even if request finishes before timeout
	}
}

function setTestCaseHeader(headers: Headers, testCase: string | null) {
	if (testCase) {
		headers.append('X-Test-Case', testCase);
		appInsights.trackTrace({
			message: `FE | Executing : ${testCase}`,
			severityLevel: 1
		});
	}
}

function checkForMissingValues(
	response: any,
	requiredKeys: string[]
): string[] {
	// Create a lower-cased map of the response keys
	const lowerCaseResponseKeys = new Map<string, any>(
		Object.entries(response).map(([key, value]) => [
			key.toLowerCase(),
			value
		])
	);

	// Filter the required keys to find missing ones
	const missingKeys = requiredKeys.filter((key) => {
		const lowerKey = key.toLowerCase();
		return (
			!lowerCaseResponseKeys.has(lowerKey) ||
			lowerCaseResponseKeys.get(lowerKey) === null ||
			lowerCaseResponseKeys.get(lowerKey) === ''
		);
	});

	return missingKeys;
}