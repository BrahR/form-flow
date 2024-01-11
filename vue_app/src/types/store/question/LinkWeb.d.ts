type LinkWeb = {
  name: string;
  preview: Component;
  icon: Component;
  action: boolean;
  labeled: {
    on: boolean;
    editor: EditorType;
  };
  described: {
    shown: boolean;
    on: boolean;
    editor: EditorType;
  };
  link: {
    on: boolean;
    value: string;
  };
  imageOrVideo: {
    on: boolean;
  };
  required: {
    on: boolean;
  };
  hideQuestionNumber: {
    on: boolean;
  };
  components: Component[];
};
