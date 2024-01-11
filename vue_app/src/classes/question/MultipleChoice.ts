import BaseQuestion from "@/classes/question/BaseQuestion.ts";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import VideoOrImageToggle from "@/components/question/toggles/VideoOrImageToggle.vue";
import RequiredToggle from "@/components/question/toggles/RequiredToggle.vue";
import HideQuestionNumberToggle from "@/components/question/toggles/HideQuestionNumberToggle.vue";
import VerticalDisplayToggle from "@/components/question/toggles/VerticalDisplayToggle.vue";
import MultipleAnswerToggle from "@/components/question/toggles/MultipleAnswerToggle.vue";
import RandomizeToggle from "@/components/question/toggles/RandomizeToggle.vue";
import MultipleChoicesToggle from "@/components/question/toggles/MultipleChoicesToggle.vue";
import GeneralTextPreview from "@/components/question/preview/GeneralTextPreview.vue";
import GeneralTextIcon from "@/components/survey/icons/GeneralTextIcon.vue";

type Choice = {
  id: number;
  hidden: boolean;
  value: string;
  checked: boolean;
};

export default class MultipleChoice extends BaseQuestion<MultipleChoicePayload> {
  public type = "MultipleChoice";
  public name = "Multiple Choice";
  public preview = GeneralTextPreview;
  public icon = GeneralTextIcon;
  public choices: Choice[];
  public randomize: Randomize;
  public verticalDisplay: VerticalDisplay;
  public multipleAnswer: MultipleAnswer;
  public hideQuestionNumber: HideQuestionNumber;
  public components = [
    LabelEditor,
    DescriptionEditor,
    MultipleChoicesToggle,
    RequiredToggle,
    VideoOrImageToggle,
    RandomizeToggle,
    VerticalDisplayToggle,
    MultipleAnswerToggle,
    HideQuestionNumberToggle,
  ];

  constructor(parameters: QuestionPayload<MultipleChoicePayload> | undefined) {
    super(parameters);
    this.choices = parameters?.questionable.choices ?? [];
    this.randomize = {
      on: parameters?.questionable.randomize ?? false,
    };
    this.verticalDisplay = {
      on: parameters?.questionable.vertical_display ?? false,
    };
    this.multipleAnswer = {
      on: parameters?.questionable.multiple_answers ?? false,
      min: parameters?.questionable.min_answers ?? 1,
      max: parameters?.questionable.max_answers ?? 2,
      error: false,
    };
    this.hideQuestionNumber = {
      on: parameters?.questionable.hide_question_number ?? false,
    };
  }

  public isChoiceDuplicate() {
    return this.choices.some(
      (choice, i) =>
        this.choices.map((val) => val.value).indexOf(choice.value) !== i &&
        !choice.hidden &&
        !!choice.value
    );
  }

  public isChoiceEmpty() {
    return (
      this.choices.filter((choice) => choice.value !== "" && !choice.hidden)
        .length < 2
    );
  }

  public canSubmit() {
    return (
      !this.getLabeledError() &&
      !this.isChoiceDuplicate() &&
      !this.isChoiceEmpty() &&
      !this.multipleAnswer.error
    );
  }

  public getData(): QuestionPayload<MultipleChoicePayload> | null {
    if (!this.labeled.editor.validate()) return null;

    return {
      ...this.payload,
      questionable: {
        choices: this.choices,
        randomize: this.randomize.on,
        vertical_display: this.verticalDisplay.on,
        multiple_answers: this.multipleAnswer.on,
        min_answers: this.multipleAnswer.min,
        max_answers: this.multipleAnswer.max,
        hide_question_number: this.hideQuestionNumber.on,
      },
    };
  }
}
