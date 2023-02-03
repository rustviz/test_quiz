# build the book with the quiz
1. go to build_book/src, you'll see a folder mdbook-quiz, this is from cloned from https://github.com/cognitive-engineering-lab/mdbook-quiz.
2. go to this mdbook-quiz/example
3. under this dir, build the book by: mdbook build, then mdbook serve
4. you'll see a mdbook with quiz we are currently implementing


TODO: what we want to do
# edit the infrastructure of the quiz
1. still under mdbook-quiz, go to js/ib/questions, the tsx files are all files that define different formats of questions.
2. what we need to work: the visualization.tsx, defines the format of the quiz question of type "visualization". Feel free to check multiple choice.tsx/short answer.tsx for learning the structure (pretty easy to read and understand)
3. if you changed anything in .tsx, re-build the structure by 
1) going back to mdbook-quiz/js run: pnpm build
2) go to mdbook-quiz/example run: mdbook build, then mdbook serve



# the content of the quiz (feel free to modify the content and see if the quiz gets changed when you build)
1. the content of the quiz are defined inside mdbook-quiz/example/src/quiz.toml, this is what users modify for designing their own quizzes.
2. I had included vis_code.svg and vis_timeline.svg under same dir for convenience 
