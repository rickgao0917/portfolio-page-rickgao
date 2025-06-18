
export interface MathRiddle {
  id: string;
  date: string;
  question: string;
  answer: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const mathRiddles: MathRiddle[] = [
  {
    id: '1',
    date: '2025-01-18',
    question: 'A trader has 100 shares of stock A and 200 shares of stock B. If stock A increases by 20% and stock B decreases by 10%, and the original total value was $10,000 with stock A representing 60% of the portfolio, what is the new total value?',
    answer: '$10,200',
    explanation: 'Stock A original value: $6,000 (60% of $10,000). Stock B original value: $4,000. After changes: Stock A = $6,000 × 1.20 = $7,200. Stock B = $4,000 × 0.90 = $3,600. Total = $7,200 + $3,600 = $10,800.',
    difficulty: 'Medium'
  },
  {
    id: '2',
    date: '2025-01-17',
    question: 'What is the probability that two randomly chosen integers from 1 to 100 are coprime (have no common factors other than 1)?',
    answer: '≈ 60.79%',
    explanation: 'The probability that two random integers are coprime is 6/π² ≈ 0.6079. This comes from the density of square-free integers and Euler\'s totient function.',
    difficulty: 'Hard'
  }
];

export const getTodaysRiddle = () => mathRiddles[0];
