export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Category = 'fundamentals' | 'patterns' | 'scalability' | 'databases' | 'microservices' | 'security' | 'cloud';

export interface Module {
  id: string;
  title: string;
  description: string;
  category: Category;
  lectures: string[];
}

export interface Progress {
  completedLectures: string[];
  currentLectureId: string;
}