type LongText = {
  name: string;
  preview: Component;
  icon: Component;
  action: boolean;
  labeled: {
    on: boolean;
    editor: EditorType;
  };
  described: {
    on: boolean;
    editor: EditorType;
  };
  answerFormat: {
    on: boolean;
    format: string;
  };
  minMaxChar: {
    min: number;
    max: number;
  };
  required: {
    on: boolean;
  };
  imageOrVideo: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  components: Component[];
};
