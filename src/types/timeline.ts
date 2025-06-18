
export interface TimelineItem {
  type: 'experience' | 'project';
  title: string;
  company?: string;
  location?: string;
  category?: string;
  period: string;
  description: string;
  achievements?: string[];
  responsibilities?: string[];
  features?: string[];
  impact?: string[];
  tech: string[];
  wip?: boolean;
  links?: {
    demo?: string;
    github?: string;
  };
}
