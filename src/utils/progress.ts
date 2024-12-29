import { Progress } from '../types/course';

export const saveProgress = (progress: Progress): void => {
  localStorage.setItem('courseProgress', JSON.stringify(progress));
};

export const loadProgress = (): Progress | null => {
  const saved = localStorage.getItem('courseProgress');
  return saved ? JSON.parse(saved) : null;
};

export const markLectureComplete = (lectureId: string): void => {
  const progress = loadProgress() || { completedLectures: [], currentLectureId: '' };
  if (!progress.completedLectures.includes(lectureId)) {
    progress.completedLectures.push(lectureId);
    progress.currentLectureId = lectureId;
    saveProgress(progress);
  }
};