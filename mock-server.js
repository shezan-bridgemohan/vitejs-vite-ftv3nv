import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const promoEligibility = {
	segmentValues: [
		'$0',
		'$0.50',
		'$1',
		'$3',
		'$6',
		'$15',
		'$40',
		'$90',
		'$200',
		'$400'
	],
	isEligible: false,
	remainingSeconds: 3,
	encryptedData: '4c6UNQGiQSUc3rLk7vXvAg=='
};

const promoAward = {
	awardAmount: '$400',
	remainingSeconds: 2000,
	resultMessage: 'Successful'
};

// Allow requests from all origins
app.use(cors());

// Configure body-parser to handle JSON data
app.use(bodyParser.json());

app.post('/api/promoWheel/getPromoEligibility', (req, res) => {
	console.log(req.body);
	setTimeout(() => {
		res.send(promoEligibility);
	}, 5000);
});

app.post('/api/promoWheel/getPromoAward', (req, res) => {
	setTimeout(() => {
		res.send(promoAward);
	}, 2000);
});

app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
