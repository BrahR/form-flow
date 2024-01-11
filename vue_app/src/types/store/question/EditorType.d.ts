type EditorType = {
  instance: ClassicEditor;
  editor: never;
  model: string;
  config: EditorConfig;
  isDirty: boolean;
  ready: (editor: ClassicEditor) => void;
};
