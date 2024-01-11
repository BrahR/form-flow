type QuestionObject = {
  welcome: Welcome;
  generalText: GeneralText;
  multipleChoice: MultipleChoice;
  pictureChoice: PictureChoice;
  questionGroup: Omit<QuestionGroup, "imageOrVideo">;
  opinionScale: OpinionScale;
  rating: Rating;
  ranking: Ranking;
  statement: Statement;
  fileUpload: FileUpload;
  endings: Endings;
};

type Questions = QuestionObject[keyof QuestionObject];

type HasKey<T, K extends string> = {
  [P in keyof T]: K extends keyof T[P] ? P : never;
}[keyof T];

type Has<T extends string> = QuestionObject[HasKey<QuestionObject, T>];
