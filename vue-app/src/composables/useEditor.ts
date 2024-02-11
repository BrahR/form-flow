import { ref } from "vue";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Bold, Italic, Underline } from "@ckeditor/ckeditor5-basic-styles";
import type { EditorConfig } from "@ckeditor/ckeditor5-core";

export const useEditor = (_model: string = "", toggle: boolean = false) => {
  let instance: ClassicEditor | null = null;
  let editor = ClassicEditor;
  const toggleable = false;
  const on = ref(toggle);
  const isDirty = ref(false);
  const model = ref(_model);
  const config: EditorConfig = {
    highlight: {
      options: [
        {
          model: "yellowMarker",
          class: "marker-yellow",
          title: "Yellow Marker",
          color: "var(--ck-highlight-marker-yellow)",
          type: "marker",
        },
        {
          model: "greenMarker",
          class: "marker-green",
          title: "Green marker",
          color: "var(--ck-highlight-marker-green)",
          type: "marker",
        },
        {
          model: "pinkMarker",
          class: "marker-pink",
          title: "Pink marker",
          color: "var(--ck-highlight-marker-pink)",
          type: "marker",
        },
        {
          model: "blueMarker",
          class: "marker-blue",
          title: "Blue marker",
          color: "var(--ck-highlight-marker-blue)",
          type: "marker",
        },
        {
          model: "redMarker",
          class: "marker-red",
          title: "Pink marker",
          color: "var(--ck-highlight-marker-red)",
          type: "marker",
        },
      ],
    },
    alignment: {
      options: [
        {
          name: "left",
          className: "text-left",
        },
        {
          name: "center",
          className: "text-center",
        },
        {
          name: "right",
          className: "text-right",
        },
        {
          name: "justify",
          className: "text-justify",
        },
      ],
    },
    plugins: [
      Essentials,
      Bold,
      Italic,
      Link,
      Alignment,
      Paragraph,
      Underline,
      Highlight,
    ],
    toolbar: {
      items: [
        "bold",
        "italic",
        "underline",
        "link",
        "alignment",
        "highlight",
        "undo",
        "redo",
      ],
    },
    placeholder: "Enter a label",
    link: {
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
        openInNewTab: {
          mode: "manual",
          label: "Open in a new tab",
          defaultValue: true,
          attributes: {
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
      },
      defaultProtocol: "https://",
    },
  };

  const ready = (editor: ClassicEditor) => {
    instance = editor;
    instance.setData(model.value);
    instance.model.document.on("change:data", () => {
      if (!instance) return;
      model.value = instance.getData();
      isDirty.value = true;
    });
  };

  const validate = () => {
    if (model.value.length === 0) {
      isDirty.value = true;
      return false;
    }
    return true;
  };

  const reset = () => {
    model.value = _model;
    isDirty.value = false;
  };

  return {
    on,
    toggleable,
    editor,
    config,
    model,
    isDirty,
    ready,
    validate,
    reset,
  };
};
