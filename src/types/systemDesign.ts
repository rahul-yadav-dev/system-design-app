export interface SystemDesignTopic {
  id: string;
  title: string;
  description: string;
  content: string;
  level: 'high' | 'low';
  components?: string[];
  considerations?: string[];
  diagram?: string;
}