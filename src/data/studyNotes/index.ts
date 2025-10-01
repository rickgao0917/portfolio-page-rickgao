import { StudyNote } from '@/types/study';
import { blitzsteinChapter1 } from './blitzstein-chpt1';
import { blitzsteinChapter2 } from './blitzstein-chpt2';

export const allStudyNotes: StudyNote[] = [
  blitzsteinChapter1,
  blitzsteinChapter2
];

export const getStudyNoteById = (id: string): StudyNote | undefined => {
  return allStudyNotes.find(note => note.id === id);
};

export const getStudyNotesBySubject = (subject: string): StudyNote[] => {
  return allStudyNotes.filter(note => note.subject.toLowerCase() === subject.toLowerCase());
};

export const getUniqueSubjects = (): string[] => {
  const subjects = new Set(allStudyNotes.map(note => note.subject));
  return Array.from(subjects);
};