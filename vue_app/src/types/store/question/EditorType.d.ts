type EditorType = {
  instance: ClassicEditor;
  editor: ClassicEditor;
  model: string;
  config: EditorConfig;
  isDirty: boolean;
  ready: (editor: ClassicEditor) => void;
};
