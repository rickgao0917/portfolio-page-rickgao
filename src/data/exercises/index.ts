import { Exercise } from '@/types/study';
import { blitzsteinChpt1Exercises } from './blitzstein-chpt1-exercises';

export const allExercises: Exercise[] = [
  blitzsteinChpt1Exercises,
];

export const getExerciseById = (id: string): Exercise | undefined => {
  return allExercises.find(exercise => exercise.id === id);
};

export const getExercisesBySubject = (subject: string): Exercise[] => {
  return allExercises.filter(exercise => exercise.subject.toLowerCase() === subject.toLowerCase());
};

export const getUniqueExerciseSubjects = (): string[] => {
  const subjects = new Set(allExercises.map(exercise => exercise.subject));
  return Array.from(subjects);
};