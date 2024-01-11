import BaseQuestion from "@/class/question/BaseQuestion";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import VideoOrImageToggle from "@/components/question/toggles/VideoOrImageToggle.vue";
import LabelButtonText from "@/components/question/toggles/LabelButtonText.vue";
import StatementPreview from "@/components/question/preview/StatementPreview.vue";
import StatementIcon from "@/components/survey/icons/StatementIcon.vue";

type Button = {
  value: string;
  error: boolean;
};

export default class Statement extends BaseQuestion<StatementPayload> {
  public type = "Statement";
  public name = "Statement";
  public preview = StatementPreview;
  public icon = StatementIcon;
  public hideQuestionNumber: HideQuestionNumber;
  public button: Button;
  public components = [
    LabelEditor,
    DescriptionEditor,
    VideoOrImageToggle,
    LabelButtonText,
  ];

  constructor(parameters: QuestionPayload<StatementPayload> | undefined) {
    super(parameters);
    this.hideQuestionNumber = {
      on: parameters?.questionable.hide_question_number ?? false,
    };

    this.button = {
      value: parameters?.questionable.button_text ?? "",
      error: false,
    };
  }

  public canSubmit(): boolean {
    return !this.getLabeledError() && !this.button.error;
  }

  public getData(): QuestionPayload<StatementPayload> | null {
    return {
      ...this.payload,
      questionable: {
        button_text: this.button.value,
        hide_question_number: this.hideQuestionNumber.on,
      },
    };
  }
}
