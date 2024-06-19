import { product } from '../service';

function Shortform() {
	if (product == 'JPC PA') {
		return (
			<p className="bg-[#23004090] text-white text-[12px] md:text-[14px] p-[15px] z-10 relative">
				Promo ends: 11:59pm ET on 11/30/2024. Promo is open only to
				existing Jackpot City customers present in PA, 21+. Bonus Wheel
				does not randomly assign amounts; bonus funds earned are
				determined based on previous day's wagering activity. Receive
				anywhere between $0-400 daily in casino bonus funds; see{' '}
				<u>Exhibit A</u> in full T&C's on amounts awarded based on prior
				day's wagering activity. Minimum wagering requirement (i.e., you
				must wager on casino slot games twenty-five (25) times the sum
				of the casino bonus funds credited to your account - e.g., if
				you receive $100 in casino bonus funds, you must then place
				combined wagers on slot games that value at least $2,500 (100 x
				25)) before that portion of your bonus balance associated with
				this promotion is available for withdrawal. Unless you contact
				customer support in advance, opting out of promo or withdrawing
				funds before wagering requirement is met will forfeit your
				entire bonus balance from this and other promos. Casino bonus
				funds expire 30 days after issuance. Promo subject to full&nbsp;
				<a
					target="_blank"
					className="underline"
					href="https://pa.jackpotcitycasino.com/dyn/BonusWheelTerms?partner=live"
				>
					T&C's
				</a>
				. Gambling problem? Call/text 1-800-GAMBLER.
			</p>
		);
	} else if (product == 'JPC NJ') {
		return (
			<p className="bg-[#23004090] text-white text-[12px] md:text-[14px] p-[15px] z-10 relative">
				Promo ends: 11:59pm ET on 11/30/2024. Promo is open only to
				existing Jackpot City customers present in NJ, 21+. Bonus Wheel
				does not randomly assign amounts; bonus funds earned are
				determined based on previous day's wagering activity. Receive
				anywhere between $0-330 daily in casino bonus funds; see Exhibit
				A in full T&C's on amounts awarded based on prior day's wagering
				activity. Minimum wagering requirement (i.e., you must wager on
				casino slot games twenty-five (25) times the sum of the casino
				bonus funds credited to your account - e.g., if you receive $100
				in casino bonus funds, you must then place combined wagers on
				slot games that value at least $2,500 (100 x 25)) before that
				portion of your bonus balance associated with this promotion is
				available for withdrawal. Unless you contact customer support in
				advance, opting out of promo or withdrawing funds before
				wagering requirement is met will forfeit your entire bonus
				balance from this and other promos. Casino bonus funds expire 30
				days after issuance. Promo subject to full&nbsp;
				<a
					target="_blank"
					className="underline"
					href="https://nj.jackpotcitycasino.com/dyn/BonusWheelTerms"
				>
					T&C's
				</a>
				. Gambling problem? Call/text 1-800-GAMBLER.
			</p>
		);
	} else if (product == 'Betway PA') {
		return (
			<p className="bg-[#222222] text-white text-[12px] md:text-[14px] p-[15px] z-10 relative">
				Promo ends: 11:59pm ET on 10/24/2024. Promo is open only to
				existing Betway customers present in PA, 21+. Bonus Wheel does
				not randomly assign amounts; bonus funds earned are determined
				based on previous day's wagering activity. Receive anywhere
				between $0-400 daily in casino bonus funds; see <u>Exhibit A</u>{' '}
				in full T&C's on amounts awarded based on prior day's wagering
				activity. Minimum wagering requirement (i.e., you must wager on
				casino slot games twenty-five (25) times the sum of the casino
				bonus funds credited to your account - e.g., if you receive $100
				in casino bonus funds, you must then place combined wagers on
				slot games that value at least $2,500 (100 x 25)) before that
				portion of your bonus balance associated with this promotion is
				available for withdrawal. Unless you contact customer support in
				advance, opting out of promo or withdrawing funds before
				wagering requirement is met will forfeit your entire bonus
				balance from this and other promos. Casino bonus funds expire 30
				days after issuance. Promo subject to full&nbsp;{' '}
				<a
					target="_blank"
					className="underline"
					href="https://pa.betway.com/dyn/BonusWheelTerms?partner=live"
				>
					<strong>T&C's</strong>
				</a>
				. Gambling Problem? Call 1-800-GAMBLER.
			</p>
		);
	} else if (product == 'Betway NJ') {
		return (
			<p className="bg-[#222222] text-white text-[12px] md:text-[14px] p-[15px] z-10 relative">
				Promo ends: 11:59pm ET on 11/30/2024. Promo is open only to
				existing Betway customers present in NJ, 21+. Bonus Wheel does
				not randomly assign amounts; bonus funds earned are determined
				based on previous day's wagering activity. Receive anywhere
				between $0-330 daily in casino bonus funds; see <u>Exhibit A</u>{' '}
				in full T&C's on amounts awarded based on prior day's wagering
				activity. Minimum wagering requirement (i.e., you must wager on
				casino slot games twenty-five (25) times the sum of the casino
				bonus funds credited to your account - e.g., if you receive $100
				in casino bonus funds, you must then place combined wagers on
				slot games that value at least $2,500 (100 x 25)) before that
				portion of your bonus balance associated with this promotion is
				available for withdrawal. Unless you contact customer support in
				advance, opting out of promo or withdrawing funds before
				wagering requirement is met will forfeit your entire bonus
				balance from this and other promos. Casino bonus funds expire 30
				days after issuance. Promo subject to full&nbsp;
				<a
					target="_blank"
					className="underline"
					href="https://nj.betway.com/dyn/BonusWheelTerms"
				>
					<strong>T&C's</strong>
				</a>
				. Gambling Problem? Call 1-800-GAMBLER.
			</p>
		);
	}
}

export default Shortform;
