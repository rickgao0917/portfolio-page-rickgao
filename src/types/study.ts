export interface StudyNote {
  id: string;
  title: string;
  subject: string;
  date: string;
  content: string;
  tags?: string[];
}

export interface Exercise {
  id: string;
  title: string;
  subject: string;
  problem: string;
  solution: string;
  hints?: string[];
}