type Question = {
  welcome: Welcome;
  generalText: GeneralText;
  multipleChoice: MultipleChoice;
  // longText: LongText;
  pictureChoice: PictureChoice;
  questionGroup: QuestionGroup;
  // dropdown: Dropdown;
  // numerical: Numerical;
  opinionScale: OpinionScale;
  // email: Email;
  rating: Rating;
  // linkWeb: LinkWeb;
  ranking: Ranking;
  statement: Statement;
  fileUpload: FileUpload;
  endings: Endings;
};

type hasImageOrVideo =
  | Welcome
  | GeneralText
  | MultipleChoice
  | PictureChoice
  | OpinionScale
  | Rating
  | Ranking
  | Statement
  | FileUpload
  | Endings;

type hasRequired = GeneralText | MultipleChoice | LongText | PictureChoice;
type hasHideQuestionNumber = GeneralText | MultipleChoice | LongText;
type hasRandomize =
  | MultipleChoice
  | PictureChoice
  | QuestionGroup
  | Dropdown
  | Ranking;
type hasHiddenLabel = PictureChoice;
type hasDoubleDisplay = PictureChoice;
type hasVerticalDisplay = MultipleChoice;
type hasMultipleAnswers = MultipleChoice | PictureChoice;
type hasChoices = MultipleChoice | PictureChoice | Ranking;
type hasButton = Welcome | QuestionGroup | Statement;
type hasScale = OpinionScale | Rating;
