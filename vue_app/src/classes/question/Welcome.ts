import BaseQuestion from "@/classes/question/BaseQuestion";
import WelcomePreview from "@/components/question/preview/WelcomePreview.vue";
import WelcomeIcon from "@/components/survey/icons/WelcomeIcon.vue";
import VideoOrImageToggle from "@/components/question/toggles/VideoOrImageToggle.vue";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import WelcomeButton from "@/components/question/toggles/WelcomeButton.vue";

export default class Welcome extends BaseQuestion<WelcomePayload> {
  public type = "Welcome";
  public name = "Welcome Page";
  public preview = WelcomePreview;
  public icon = WelcomeIcon;
  public button: WelcomeButton;
  public components = [
    VideoOrImageToggle,
    LabelEditor,
    DescriptionEditor,
    WelcomeButton,
  ];

  constructor(parameters: QuestionPayload<WelcomePayload> | undefined) {
    super(parameters);
    this.button = {
      value: parameters?.questionable.button ?? "",
      error: false,
    };
  }

  public canSubmit() {
    return !this.getLabeledError() && !this.button.error;
  }

  public getData(): QuestionPayload<WelcomePayload> | null {
    if (!this.labeled.editor.validate()) return null;

    return {
      ...this.payload,
      questionable: {
        button: this.button.value,
      },
    };
  }
}
