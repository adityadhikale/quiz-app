export interface Option {
  id: number;
  description: string;
  question_id: number;
  is_correct: boolean;
  unanswered: boolean;
  photo_url: string | null;
}

export interface Question {
  id: number;
  description: string;
  difficulty_level: string | null;
  topic: string;
  is_published: boolean;
  detailed_solution: string;
  type: string;
  is_mandatory: boolean;
  created_by: string | null;
  updated_by: string;
  photo_url: string | null;
  options: Option[];
}

export interface QuizData {
  id: number;
  title: string;
  description: string;
  difficulty_level: string | null;
  topic: string;
  time: string;
  is_published: boolean;
  duration: number;
  negative_marks: string;
  correct_answer_marks: string;
  shuffle: boolean;
  show_answers: boolean;
  questions_count: number;
  questions: Question[];
}
