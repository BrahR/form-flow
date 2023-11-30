import type QuestionType from "./QuestionType";
import type Welcome from "./Welcome";
import type GeneralText from "./GeneralText";
import type MultipleChoice from "./MultipleChoice";
import type LongText from "./LongText";
import type PictureChoice from "./PictureChoice";
import type QuestionGroup from "./QuestionGroup";
import type Dropdown from "./Dropdown";
import type Numerical from "./Numerical";
import type OpinionScale from "./OpinionScale";
import type Email from "./Email";
import type Rating from "./Rating";
import type LinkWeb from "./LinkWeb";
import type Ranking from "./Ranking";
import type Statement from "./Statement";
import type FileUpload from "./FileUpload";
import type Endings from "./Endings";

import type { GeneralTextFormat, GeneralTextType } from "./GeneralText";

type Question = {
  welcome: Welcome;
  generalText: GeneralText;
  multipleChoice: MultipleChoice;
  longText: LongText;
  pictureChoice: PictureChoice;
  questionGroup: QuestionGroup;
  dropdown: Dropdown;
  numerical: Numerical;
  opinionScale: OpinionScale;
  email: Email;
  rating: Rating;
  linkWeb: LinkWeb;
  ranking: Ranking;
  statement: Statement;
  fileUpload: FileUpload;
  endings: Endings;
};

type hasImageOrVideo =
  | Welcome
  | GeneralText
  | MultipleChoice
  | LongText
  | PictureChoice
  | Dropdown
  | Numerical
  | OpinionScale
  | Email
  | Rating
  | LinkWeb
  | Ranking
  | Statement
  | FileUpload
  | Endings;
type hasRequired = GeneralText | MultipleChoice | LongText | PictureChoice;
type hasHideQuestionNumber = GeneralText | MultipleChoice | LongText;
type hasRandomize = MultipleChoice | PictureChoice | Dropdown | Ranking;

export {
  GeneralTextFormat,
  GeneralTextType,
  Question,
  QuestionType,
  Welcome,
  GeneralText,
  MultipleChoice,
  LongText,
  PictureChoice,
  QuestionGroup,
  Dropdown,
  Numerical,
  OpinionScale,
  Email,
  Rating,
  LinkWeb,
  Ranking,
  Statement,
  FileUpload,
  Endings,
  hasImageOrVideo,
  hasRequired,
  hasHideQuestionNumber,
  hasRandomize,
};
