export interface Lecture {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  content: string;
  codeExample: string;
  nextLectureId?: string;
  prevLectureId?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  lectures: string[];
}