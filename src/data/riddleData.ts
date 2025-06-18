
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
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    answer: 'Ut enim ad minim',
    explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    difficulty: 'Medium'
  },
  {
    id: '2',
    date: '2025-01-17',
    question: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?',
    answer: '42',
    explanation: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.',
    difficulty: 'Hard'
  }
];

export const getTodaysRiddle = () => mathRiddles[0];
