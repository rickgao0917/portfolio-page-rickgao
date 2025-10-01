import { Exercise } from '@/types/study';
import jsonData from './ch1.json';

// Generate formatted markdown from JSON
let markdownContent = `# ${jsonData.title}\n\n`;

jsonData.sections.forEach((section: any) => {
  markdownContent += `## ${section.title}\n\n`;

  section.problems.forEach((problem: any) => {
    markdownContent += `### Problem ${problem.id}\n\n`;

    // Add context if it exists
    if (problem.context) {
      markdownContent += `*Context:* ${problem.context}\n\n`;
    }

    // Handle problems with parts
    if (problem.parts && problem.parts.length > 0) {
      // If there's a question at the top level, show it first
      if (problem.question) {
        markdownContent += `${problem.question}\n\n`;
      }

      problem.parts.forEach((part: any) => {
        markdownContent += `**Part (${part.part})`;
        if (part.title) {
          markdownContent += ` - ${part.title}`;
        }
        markdownContent += `:**\n\n`;

        if (part.question) {
          markdownContent += `${part.question}\n\n`;
        }
        if (part.formula) {
          markdownContent += `${part.formula}\n\n`;
        }

        if (part.solution) {
          markdownContent += `**Solution:**\n\n${part.solution}\n\n`;
        }
      });
    } else {
      // Simple problem without parts
      if (problem.question) {
        markdownContent += `${problem.question}\n\n`;
      }

      if (problem.solution) {
        markdownContent += `**Solution:**\n\n${problem.solution}\n\n`;
      }
    }
  });
});

export const blitzsteinChpt1Exercises: Exercise = {
  id: 'blitzstein-chpt1-exercises',
  title: 'Blitzstein Chapter 1 - Probability and Combinatorics',
  subject: 'Probability Theory',
  problem: markdownContent,
  solution: '',
  date: '2025-09-30',
  tags: ['blitzstein', 'probability', 'counting']
};