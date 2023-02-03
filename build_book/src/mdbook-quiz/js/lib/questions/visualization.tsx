import classNames from "classnames";
import React from "react";

import { MarkdownView } from "../components/markdown";
import { Markdown, QuestionFields, QuestionMethods } from "./types";
import { Snippet } from "../components/snippet";
// var helper = require("./helper.js");

export interface VisualizationPrompt {
  /** The text of the prompt. */
  prompt: Markdown;
  program: string;
  viz1 : Markdown
  viz2: Markdown
  code1: Markdown
  code2: Markdown
  /** An array of text explaining each choice. */
  choices: Markdown[];
}

export interface VisualizationAnswer {
  /** The index of the correct answer in the choices array (0-based). */
  answer: number;
}

export type Visualization = QuestionFields<
  "Visualization",
  VisualizationPrompt,
  VisualizationAnswer
>;

export let VisualizationMethods: QuestionMethods<VisualizationPrompt, VisualizationAnswer> = {
  PromptView: ({ prompt }) => 
  (
    <>
    {/* <img onMouseEnter={() => helper.helpers('copy')} ></img> */}
    {/* <div class="flex-container vis_block" style="position:relative; margin-left:-75px; margin-right:-75px; display: flex;"> */}
    {/* <object type="image/svg+xml"  data={prompt.viz1} onMouseEnter={() => helper.helpers('copy')}></object> */}
    <MarkdownView markdown={prompt.prompt} />
    <Snippet snippet={prompt.program} />
    <h3>A. </h3>
    <MarkdownView markdown={prompt.viz1} />
    <MarkdownView markdown={prompt.code1} />
    <h3>B.  </h3>
    <MarkdownView markdown={prompt.viz2} />
    {/* <MarkdownView markdown={prompt.code2} /> */}
    </>
    
  ),

  ResponseView: ({ prompt, formValidators: { required } }) => (
    <>
      {prompt.choices.map((choice, i) => {
        let id = `answer${i}`;
        return (
          <div className="choice" key={i}>
            <input type="radio" {...required("answer")} value={i} id={id} />
            <label htmlFor={id}>
              <MarkdownView markdown={choice} />
            </label>
          </div>
        );
      })}
    </>
  ),

  getAnswerFromDOM(data) {
    return { answer: parseInt(data.answer) };
  },

  AnswerView: ({ answer, baseline, prompt }) => (
    <div
      className={classNames("md-flex", answer.answer == baseline.answer ? "correct" : "incorrect")}
    >
      <MarkdownView markdown={prompt.choices[answer.answer]} />
    </div>
  ),
};
