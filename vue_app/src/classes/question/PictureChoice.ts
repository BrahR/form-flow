import BaseQuestion from "@/classes/question/BaseQuestion";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import VideoOrImageToggle from "@/components/question/toggles/VideoOrImageToggle.vue";
import RequiredToggle from "@/components/question/toggles/RequiredToggle.vue";
import ChoicesPictureToggle from "@/components/question/toggles/ChoicesPictureToggle.vue";
import HideQuestionNumberToggle from "@/components/question/toggles/HideQuestionNumberToggle.vue";
import MultipleAnswerToggle from "@/components/question/toggles/MultipleAnswerToggle.vue";
import RandomizeToggle from "@/components/question/toggles/RandomizeToggle.vue";
import HideLabelToggle from "@/components/question/toggles/HideLabelToggle.vue";
import DoubleDisplaySizeToggle from "@/components/question/toggles/DoubleDisplaySizeToggle.vue";
import PictureChoicePreview from "@/components/question/preview/PictureChoicePreview.vue";
import PictureChoiceIcon from "@/components/survey/icons/PictureChoiceIcon.vue";

type Choice = {
  id: number;
  hidden: boolean;
  value: string;
  image: string;
  checked: boolean;
};

export default class PictureChoice extends BaseQuestion<PictureChoicePayload> {
  public type = "PictureChoice";
  public name = "Picture Choice";
  public preview = PictureChoicePreview;
  public icon = PictureChoiceIcon;
  public choices: Choice[];
  public required: _Required;
  public randomize: Randomize;
  public hiddenLabel: HiddenLabel;
  public doubleDisplaySize: DoubleDisplaySize;
  public multipleAnswer: MultipleAnswer;
  public hideQuestionNumber: HideQuestionNumber;
  public components = [
    LabelEditor,
    DescriptionEditor,
    ChoicesPictureToggle,
    RequiredToggle,
    VideoOrImageToggle,
    RandomizeToggle,
    HideLabelToggle,
    DoubleDisplaySizeToggle,
    MultipleAnswerToggle,
    HideQuestionNumberToggle,
  ];

  constructor(parameters: QuestionPayload<PictureChoicePayload> | undefined) {
    super(parameters);
    this.choices = parameters?.questionable.choices ?? [
      {
        id: 1,
        hidden: false,
        value: "boe",
        image: "https://i.ebayimg.com/images/g/Dv0AAOSwl9BWL6v9/s-l1200.webp",
        checked: false,
      },
      {
        id: 2,
        hidden: false,
        value: "jiden",
        image: "https://i.ebayimg.com/images/g/Dv0AAOSwl9BWL6v9/s-l1200.webp",
        checked: false,
      },
    ];
    this.required = {
      on: parameters?.question.required ?? false,
    };
    this.randomize = {
      on: parameters?.questionable.randomize ?? false,
    };
    this.hiddenLabel = {
      on: parameters?.questionable.hide_label ?? false,
    };
    this.doubleDisplaySize = {
      on: parameters?.questionable.double_display_size ?? false,
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

  public isChoiceEmpty(): boolean {
    return (
      this.choices.filter((choice) => choice.image !== "" && !choice.hidden)
        .length < 2
    );
  }

  public canSubmit(): boolean {
    return (
      !this.getLabeledError() &&
      !this.isChoiceEmpty() &&
      !this.multipleAnswer.error
    );
  }

  public getData(): QuestionPayload<PictureChoicePayload> | null {
    if (!this.labeled.editor.validate()) return null;

    return {
      ...this.payload,
      questionable: {
        choices: this.choices,
        multiple_answers: this.multipleAnswer.on,
        min_answers: this.multipleAnswer.min,
        max_answers: this.multipleAnswer.max,
        randomize: this.randomize.on,
        hide_label: this.hiddenLabel.on,
        double_display_size: this.doubleDisplaySize.on,
        hide_question_number: this.hideQuestionNumber.on,
      },
    };
  }
}
