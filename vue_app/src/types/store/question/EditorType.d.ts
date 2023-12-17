import type { Ref } from "vue";
import type { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import type { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";

type EditorType = {
  instance: ClassicEditor;
  editor: typeof ClassicEditor;
  model: string;
  config: typeof EditorConfig;
  isDirty: boolean;
  ready: (editor: ClassicEditor) => void;
};
