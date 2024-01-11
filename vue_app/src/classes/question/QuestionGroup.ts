import BaseQuestion from "@/class/question/BaseQuestion";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import RequiredToggle from "@/components/question/toggles/RequiredToggle.vue";
import HideQuestionNumberToggle from "@/components/question/toggles/HideQuestionNumberToggle.vue";
import RandomizeGroupToggle from "@/components/question/toggles/RandomizeGroupToggle.vue";
import ButtonToggle from "@/components/question/toggles/ButtonToggle.vue";
import QuestionGroupPreview from "@/components/question/preview/QuestionGroupPreview.vue";
import QuestionGroupIcon from "@/components/survey/icons/QuestionGroupIcon.vue";

type Button = {
  on: boolean;
  value: string;
  error: boolean;
};

// TODO: finish QuestionGroup
export default class QuestionGroup extends BaseQuestion<QuestionGroupPayload> {
  public type = "QuestionGroup";
  public name = "Question Group";
  public preview = QuestionGroupPreview;
  public icon = QuestionGroupIcon;
  public hideQuestionNumber: HideQuestionNumber;
  public randomize: Randomize;
  public button: Button;
  public components = [
    LabelEditor,
    DescriptionEditor,
    ButtonToggle,
    RequiredToggle,
    HideQuestionNumberToggle,
    RandomizeGroupToggle,
  ];

  constructor(parameters: QuestionPayload<QuestionGroupPayload> | undefined) {
    super(parameters);
    this.hideQuestionNumber = {
      on: false,
    };

    this.randomize = {
      on: false,
    };

    this.button = {
      on: false,
      value: "",
      error: false,
    };
  }

  public canSubmit(): boolean {
    return false;
  }

  public getData(): QuestionPayload<QuestionGroupPayload> | null {
    if (!this.labeled.editor.validate()) return null;

    return {
      ...this.payload,
      questionable: {},
    };
  }
}
