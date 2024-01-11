import Editor from "@/classes/Editor";

export default abstract class BaseQuestion<P extends QuestionPayloads> {
  abstract type: string;
  abstract name: string;
  abstract preview: Component;
  abstract icon: Component;
  public labeled: QuestionEditor;
  public described: QuestionEditor;
  public imageOrVideo: ImageOrVideo;
  public required: _Required;
  abstract components: Component[];

  constructor(
    parameters: // TODO: look into this
    Omit<QuestionPayload<P>, "questionable"> | QuestionPayload<P> | undefined
  ) {
    this.labeled = {
      on: false,
      editor: new Editor(parameters?.question.html_label ?? ""),
    };

    this.described = {
      on: false,
      editor: new Editor(parameters?.question.html_description ?? ""),
    };

    this.imageOrVideo = {
      on: parameters?.question.attachment !== "" || false,
      url: parameters?.question.attachment ?? "",
      error: false,
    };

    this.required = {
      on: parameters?.question.required ?? false,
    };

    this.initializePayload();
  }

  public payload!: Omit<QuestionPayload<P>, "questionable">;
  private initializePayload(): void {
    this.payload = {
      type: this.type,
      question: {
        html_label: this.labeled.editor.model,
        html_description: this.described.editor.model,
        required: this.required.on,
        attachment: "",
      },
    };
  }

  public getLabeledError(): string | null {
    return (this.labeled.editor.model.length ?? 0) < 1 &&
      this.labeled.editor.isDirty
      ? "Please enter a label"
      : null;
  }

  abstract canSubmit(): boolean;
  abstract getData(): QuestionPayload<P> | null;
}
