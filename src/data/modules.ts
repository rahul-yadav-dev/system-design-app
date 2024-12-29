import { Module } from '../types/course';

export const modules: Module[] = [
  {
    id: 'fundamentals',
    title: 'System Design Fundamentals',
    description: 'Core concepts and principles of system design',
    category: 'fundamentals',
    lectures: ['intro', 'requirements', 'components', 'interfaces']
  },
  {
    id: 'patterns',
    title: 'Design Patterns',
    description: 'Common architectural and design patterns',
    category: 'patterns',
    lectures: ['singleton', 'factory', 'observer', 'strategy']
  },
  {
    id: 'scalability',
    title: 'Scalability & Performance',
    description: 'Techniques for building scalable systems',
    category: 'scalability',
    lectures: ['horizontal-scaling', 'vertical-scaling', 'caching', 'load-balancing']
  }
];