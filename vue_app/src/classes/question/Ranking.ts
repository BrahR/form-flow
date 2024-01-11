import BaseQuestion from "@/class/question/BaseQuestion";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import VideoOrImageToggle from "@/components/question/toggles/VideoOrImageToggle.vue";
import RequiredToggle from "@/components/question/toggles/RequiredToggle.vue";
import HideQuestionNumberToggle from "@/components/question/toggles/HideQuestionNumberToggle.vue";
import RandomizeToggle from "@/components/question/toggles/RandomizeToggle.vue";
import RankingChoicesToggle from "@/components/question/toggles/RankingChoicesToggle.vue";
import FixNumbersToggle from "@/components/question/toggles/FixNumbersToggle.vue";
import RatingPreview from "@/components/question/preview/RatingPreview.vue";
import RatingIcon from "@/components/survey/icons/RatingIcon.vue";

type Choice = {
  id: number;
  value: string;
};

export default class Ranking extends BaseQuestion<RankingPayload> {
  public type = "Ranking";
  public name = "Ranking";
  public preview = RatingPreview;
  public icon = RatingIcon;
  public choices: Choice[];
  public randomize: Randomize;
  public fixNumbers: FixNumbers;
  public hideQuestionNumber: HideQuestionNumber;
  public components = [
    LabelEditor,
    DescriptionEditor,
    RankingChoicesToggle,
    FixNumbersToggle,
    VideoOrImageToggle,
    RequiredToggle,
    RandomizeToggle,
    HideQuestionNumberToggle,
  ];

  constructor(parameters: QuestionPayload<RankingPayload> | undefined) {
    super(parameters);
    this.choices = parameters?.questionable.choices ?? [];
    this.randomize = {
      on: parameters?.questionable.randomize ?? false,
    };
    this.fixNumbers = {
      on: parameters?.questionable.fix_numbers ?? false,
    };
    this.hideQuestionNumber = {
      on: parameters?.questionable.hide_question_number ?? false,
    };
  }

  public get getValidChoices(): Choice[] {
    return this.choices.filter((choice) => !!choice.value);
  }

  public isChoiceDuplicate(): boolean {
    return this.choices.some(
      (choice, i) =>
        this.choices.map((val) => val.value).indexOf(choice.value) !== i &&
        !!choice.value
    );
  }

  public canSubmit(): boolean {
    return (
      !this.getLabeledError() &&
      !this.isChoiceDuplicate() &&
      !(this.choices.length < 2)
    );
  }

  public getData(): QuestionPayload<RankingPayload> | null {
    return {
      ...this.payload,
      questionable: {
        choices: this.getValidChoices,
        randomize: this.randomize.on,
        fix_numbers: this.fixNumbers.on,
        hide_question_number: this.hideQuestionNumber.on,
      },
    };
  }
}
