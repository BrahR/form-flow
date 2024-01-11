import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic, Underline } from "@ckeditor/ckeditor5-basic-styles";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { EditorConfig } from "@ckeditor/ckeditor5-core";
import { Alignment } from "@ckeditor/ckeditor5-alignment";

export default class Editor {
  public instance: ClassicEditor;
  public editor: typeof ClassicEditor;
  public isDirty: boolean;
  public model: string;
  public config: EditorConfig;

  constructor(model = "") {
    this.instance = null as unknown as ClassicEditor;
    this.editor = ClassicEditor;
    this.isDirty = false;
    this.model = model;
    this.config = {
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
  }

  public ready(editor: ClassicEditor) {
    this.instance = editor;
    this.instance.model.document.on("change:data", () => {
      if (!this.instance) return;
      this.isDirty = true;
      this.model = this.instance.getData();
    });
  }

  public validate(): boolean {
    if (this.model.length > 0) return true;
    this.isDirty = true;
    return false;
  }
}
