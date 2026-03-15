import { Exercise } from '@/types/study';
import markdownContent from './blitzstein-ch2.md?raw';

export const blitzsteinChpt2Exercises: Exercise = {
  id: 'blitzstein-chpt2-exercises',
  title: 'Blitzstein Chapter 2 - Conditional Probability',
  subject: 'Probability Theory',
  problem: markdownContent,
  solution: '',
  date: '2025-09-30',
  tags: ['blitzstein', 'probability', 'conditioning', 'bayes']
};
