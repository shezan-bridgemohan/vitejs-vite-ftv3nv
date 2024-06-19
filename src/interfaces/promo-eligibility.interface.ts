export default interface IPromoEligibility {
    segmentValues: string[];
    isEligible: boolean;
    remainingSeconds: number;
    encryptedData: string;
  }