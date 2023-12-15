import type { Ref } from "vue";
import type { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import type { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";

type EditorType = {
  instance: null;
  editor: typeof ClassicEditor;
  model: string;
  config: typeof EditorConfig;
  ready: (editor: ClassicEditor) => void;
};
