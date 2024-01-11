import BaseQuestion from "@/class/question/BaseQuestion";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import VideoOrImageToggle from "@/components/question/toggles/VideoOrImageToggle.vue";
import RequiredToggle from "@/components/question/toggles/RequiredToggle.vue";
import HideQuestionNumberToggle from "@/components/question/toggles/HideQuestionNumberToggle.vue";
import StartAtZeroToggle from "@/components/question/toggles/StartAtZeroToggle.vue";
import ScaleToggle from "@/components/question/toggles/ScaleToggle.vue";
import GeneralTextPreview from "@/components/question/preview/GeneralTextPreview.vue";
import GeneralTextIcon from "@/components/survey/icons/GeneralTextIcon.vue";

export default class OpinionScale extends BaseQuestion<OpinionScalePayload> {
  public type = "OpinionScale";
  public name = "Opinion Scale";
  public preview = GeneralTextPreview;
  public icon = GeneralTextIcon;
  public scaleType: ScaleType;
  public parameters: _Parameters;
  public labels: ScaleLabels;
  public startAtZero: StartAtZero;
  public hideQuestionNumber: HideQuestionNumber;
  public components = [
    LabelEditor,
    DescriptionEditor,
    ScaleToggle,
    VideoOrImageToggle,
    RequiredToggle,
    StartAtZeroToggle,
    HideQuestionNumberToggle,
  ];

  constructor(parameters: QuestionPayload<OpinionScalePayload> | undefined) {
    super(parameters);
    this.scaleType = {
      number: {
        on: false,
      },
      stars: {
        on: false,
      },
      slider: {
        on: false,
      },
    };

    this.parameters = {
      value: parameters?.questionable.steps ?? 3,
      min: 3, // usued for now
      max: 10, // used for now
    };

    this.labels = {
      right: parameters?.questionable.labels?.right ?? "",
      left: parameters?.questionable.labels?.left ?? "",
      center: parameters?.questionable.labels?.center ?? "",
    };

    this.startAtZero = {
      on: parameters?.questionable.start_at_zero ?? false,
    };

    this.hideQuestionNumber = {
      on: parameters?.questionable.hide_question_number ?? false,
    };
  }

  public canSubmit() {
    return !this.getLabeledError();
  }

  public getData(): QuestionPayload<OpinionScalePayload> | null {
    if (!this.labeled.editor.validate()) return null;

    return {
      ...this.payload,
      questionable: {
        steps: this.parameters.value,
        labels: this.labels,
        start_at_zero: this.startAtZero.on,
        hide_question_number: this.hideQuestionNumber.on,
      },
    };
  }
}
