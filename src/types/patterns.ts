export interface Pattern {
  id: string;
  name: string;
  description: string;
  useCases: string[];
  implementation: string;
  considerations?: string[];
  category: 'creational' | 'structural' | 'behavioral';
}