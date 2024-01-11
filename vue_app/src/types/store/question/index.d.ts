type QuestionObject = {
  welcome: Welcome;
  generalText: GeneralText;
  multipleChoice: MultipleChoice;
  pictureChoice: PictureChoice;
  questionGroup: QuestionGroup;
  opinionScale: OpinionScale;
  rating: Rating;
  ranking: Ranking;
  statement: Statement;
  fileUpload: FileUpload;
  endings: Endings;
};

type Question =
  | Welcome
  | GeneralText
  | MultipleChoice
  | PictureChoice
  | QuestionGroup
  | OpinionScale
  | Rating
  | Ranking
  | Statement
  | FileUpload
  | Endings;

type HasKey<T, K extends string> = {
  [P in keyof T]: K extends keyof T[P] ? P : never;
}[keyof T];

type Has<T extends string> = QuestionObject[HasKey<QuestionObject, T>];

// type hasImageOrVideo =
//   | Welcome
//   | GeneralText
//   | MultipleChoice
//   | PictureChoice
//   | OpinionScale
//   | Rating
//   | Ranking
//   | Statement
//   | FileUpload
//   | Endings;

// type hasRequired = GeneralText | MultipleChoice | LongText | PictureChoice;
// type hasHideQuestionNumber = GeneralText | MultipleChoice | LongText;
// type hasRandomize =
//   | MultipleChoice
//   | PictureChoice
//   | QuestionGroup
//   | Dropdown
//   | Ranking;
// type hasHiddenLabel = PictureChoice;
// type hasDoubleDisplay = PictureChoice;
// type hasVerticalDisplay = MultipleChoice;
// type hasMultipleAnswers = MultipleChoice | PictureChoice;
// type hasChoices = MultipleChoice | PictureChoice | Ranking;
// type hasButton = Welcome | QuestionGroup | Statement;
// type hasScale = OpinionScale | Rating;
