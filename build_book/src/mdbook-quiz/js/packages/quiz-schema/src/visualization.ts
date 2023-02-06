import type { Markdown, QuestionFields } from "./common";

export interface VisualizationPrompt {
  /** The text of the prompt. */
  prompt: Markdown;

  /** The contents of the program that need to be visualized */
  program: string

  /** The visualizations */
  viz1: Markdown
  viz2: Markdown

  /** An array of incorrect answers. */
  distractors: Markdown[];

  /** If defined, don't randomize distractors and put answer at this index. */
  answerIndex?: number;
}

export interface VisualizationAnswer {
  /** The text of the correct answer. */
  answer: Markdown | Markdown[];
}

export type Visualization = QuestionFields<
  "Visualization",
  VisualizationPrompt,
  VisualizationAnswer
>;
