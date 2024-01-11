import BaseQuestion from "@/class/question/BaseQuestion";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import VideoOrImageToggle from "@/components/question/toggles/VideoOrImageToggle.vue";
import AfterSubmitToggle from "@/components/question/toggles/AfterSubmitToggle.vue";
import DefaultEndingToggle from "@/components/question/toggles/DefaultEndingToggle.vue";
import ReloadRedirectToggle from "@/components/question/toggles/ReloadRedirectToggle.vue";
import AutoReloadToggle from "@/components/question/toggles/AutoReloadToggle.vue";
import ShareSurveyToggle from "@/components/question/toggles/ShareSurveyToggle.vue";
import EndingsPreview from "@/components/question/preview/EndingsPreview.vue";
import EndingsIcon from "@/components/survey/icons/EndingsIcon.vue";

type Label = {
  on: boolean;
  value: string;
};

export default class Endings extends BaseQuestion<EndingsPayload> {
  public type = "Endings";
  public name = "Ending Page";
  public preview = EndingsPreview;
  public icon = EndingsIcon;
  public afterSubmit: AfterSubmit;
  public shareButtons: ShareButtons;
  public defaultEnding: DefaultEnding;
  public reloadRedirect: ReloadRedirect;
  public label: Label;
  public autoReload: AutoReload;
  public components = [
    AfterSubmitToggle,
    VideoOrImageToggle,
    LabelEditor,
    DescriptionEditor,
    ShareSurveyToggle,
    DefaultEndingToggle,
    ReloadRedirectToggle,
    AutoReloadToggle,
  ];

  constructor(parameters: QuestionPayload<EndingsPayload> | undefined) {
    super(parameters);
    this.afterSubmit = {
      type: "custom",
    };

    this.shareButtons = {
      on: false,
    };

    this.defaultEnding = {
      on: false,
    };

    this.reloadRedirect = {
      on: false,
      label: "",
      type: 0,
    };

    this.autoReload = {
      on: false,
      timer: 10,
    };

    this.label = {
      on: false,
      value: "",
    };
  }

  public canSubmit(): boolean {
    return !this.getLabeledError();
  }

  public getData(): QuestionPayload<EndingsPayload> | null {
    return {
      ...this.payload,
      questionable: {},
    };
  }
}
