
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
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. What is the sum of all integers from 1 to n?',
    answer: 'n(n+1)/2',
    explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. This is the famous arithmetic series formula discovered by Gauss.',
    difficulty: 'Medium'
  },
  {
    id: '2',
    date: '2025-01-17',
    question: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur? If you have a 3x3 grid, how many different paths are there from top-left to bottom-right?',
    answer: '6',
    explanation: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error. You need to move 2 steps right and 2 steps down, so it\'s C(4,2) = 6 different combinations.',
    difficulty: 'Hard'
  },
  {
    id: '3',
    date: '2025-01-16',
    question: 'Consectetur adipiscing elit, sed do eiusmod tempor? What comes next in the sequence: 1, 1, 2, 3, 5, 8, 13, ...?',
    answer: '21',
    explanation: 'This is the Fibonacci sequence where each number is the sum of the two preceding ones. Lorem ipsum dolor sit amet, consectetur adipiscing elit. The next number is 8 + 13 = 21.',
    difficulty: 'Easy'
  },
  {
    id: '4',
    date: '2025-01-15',
    question: 'Ut enim ad minim veniam, quis nostrud exercitation? A farmer has chickens and rabbits. If there are 35 heads and 94 feet total, how many chickens are there?',
    answer: '23',
    explanation: 'Let c = chickens, r = rabbits. We have c + r = 35 and 2c + 4r = 94. Solving: r = 12, so c = 23. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    difficulty: 'Medium'
  }
];

export const getTodaysRiddle = () => mathRiddles[0];
