import BaseQuestion from "@/class/question/BaseQuestion";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import VideoOrImageToggle from "@/components/question/toggles/VideoOrImageToggle.vue";
import RequiredToggle from "@/components/question/toggles/RequiredToggle.vue";
import HideQuestionNumberToggle from "@/components/question/toggles/HideQuestionNumberToggle.vue";
import RatingToggle from "@/components/question/toggles/RatingToggle.vue";
import RatingPreview from "@/components/question/preview/RatingPreview.vue";
import RatingIcon from "@/components/survey/icons/RatingIcon.vue";

type _Rating = {
  type: number;
  value: 0 | 1 | 2;
};

export default class Rating extends BaseQuestion<RatingPayload> {
  public type = "Rating";
  public name = "Rating";
  public preview = RatingPreview;
  public icon = RatingIcon;
  public rating: _Rating;
  public parameter: _Parameters;
  public hideQuestionNumber: HideQuestionNumber;
  public components = [
    LabelEditor,
    DescriptionEditor,
    RatingToggle,
    VideoOrImageToggle,
    RequiredToggle,
    HideQuestionNumberToggle,
  ];

  constructor(parameters: QuestionPayload<RatingPayload> | undefined) {
    super(parameters);
    this.rating = {
      type: parameters?.questionable.rating_type ?? 0,
      value: parameters?.questionable.rating_value ?? 0,
    };

    this.parameter = {
      value: 1,
      min: 1,
      max: 10,
    };

    this.hideQuestionNumber = {
      on: parameters?.questionable.hide_question_number ?? false,
    };
  }

  public canSubmit(): boolean {
    return !this.getLabeledError();
  }

  public getData(): QuestionPayload<RatingPayload> | null {
    return {
      ...this.payload,
      questionable: {
        rating_type: this.rating.type,
        rating_value: this.rating.value,
        hide_question_number: this.hideQuestionNumber.on,
      },
    };
  }
}
