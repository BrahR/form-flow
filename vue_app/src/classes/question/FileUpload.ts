import BaseQuestion from "@/class/question/BaseQuestion";
import LabelEditor from "@/components/question/toggles/LabelEditor.vue";
import DescriptionEditor from "@/components/question/toggles/DescriptionEditor.vue";
import VideoOrImageToggle from "@/components/question/toggles/VideoOrImageToggle.vue";
import RequiredToggle from "@/components/question/toggles/RequiredToggle.vue";
import HideQuestionNumberToggle from "@/components/question/toggles/HideQuestionNumberToggle.vue";
import FileTypeToggle from "@/components/question/toggles/FileTypeToggle.vue";
import MaximaumSizeToggle from "@/components/question/toggles/MaximaumSizeToggle.vue";
import RatingPreview from "@/components/question/preview/RatingPreview.vue";
import RatingIcon from "@/components/survey/icons/RatingIcon.vue";

type SizeUnit = ["KB", "MB"];

export default class FileUpload extends BaseQuestion<FileUploadPayload> {
  public type = "FileUpload";
  public name = "File Upload";
  public preview = RatingPreview;
  public icon = RatingIcon;
  public customExtension: CustomExtension;
  public maximumSize: MaximumSize;
  public static sizeUnit: SizeUnit = ["KB", "MB"];
  public hideQuestionNumber: HideQuestionNumber;
  public components = [
    LabelEditor,
    DescriptionEditor,
    VideoOrImageToggle,
    RequiredToggle,
    FileTypeToggle,
    MaximaumSizeToggle,
    HideQuestionNumberToggle,
  ];

  constructor(parameters: QuestionPayload<FileUploadPayload> | undefined) {
    super(parameters);
    this.customExtension = {
      on: false,
      value: [],
      error: false,
    };

    this.maximumSize = {
      on: false,
      type: "KB",
      value: 100,
    };

    this.hideQuestionNumber = {
      on: false,
    };
  }

  public canSubmit(): boolean {
    return !this.getLabeledError();
  }

  public getData(): QuestionPayload<FileUploadPayload> | null {
    if (!this.labeled.editor.validate()) return null;

    return {
      ...this.payload,
      questionable: {},
    };
  }
}
