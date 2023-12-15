import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic, Underline } from "@ckeditor/ckeditor5-basic-styles";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { EditorConfig } from "@ckeditor/ckeditor5-core";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { defineAsyncComponent, ref } from "vue";
import type { Component } from "vue";

interface hasId {
  id: number;
}

function pushToArray<T>(array: T[] | null | undefined, ...items: T[]): T[] {
  const newArray = array ?? [];
  newArray.push(...items);
  return newArray;
}

function find<T extends hasId>(id: number, array: T[]): number {
  return array.findIndex((i: T) => i.id == id);
}

function remove<T extends hasId>(id: number, array: T[]): T[] {
  const index = find(id, array);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

function getAsyncIcon(icon: string): Component {
  return defineAsyncComponent(
    () => import(`@/components/survey/icons/${icon}.vue`)
  );
}

function getAsyncAnswerType(type: string): Component {
  return defineAsyncComponent(
    () => import(`@/components/question/toggles/answer_types/${type}.vue`)
  );
}

function getAsyncInputType(type: string): Component {
  return defineAsyncComponent(
    () => import(`@/components/question/preview/answer_input_types/${type}.vue`)
  );
}

function getAsyncPreview(icon: string): Component {
  return defineAsyncComponent(
    () => import(`@/components/question/preview/${icon}.vue`)
  );
}

function convertSize(
  size: number,
  from: string,
  to: string,
  precise: boolean = false
): number {
  const idk = precise ? 1024 : 1000;
  const units = ["B", "KB", "MB", "GB", "TB"];
  const fromIndex = units.indexOf(from.toUpperCase());
  const toIndex = units.indexOf(to.toUpperCase());

  if (fromIndex === -1 || toIndex === -1) {
    throw new Error("Invalid unit");
  }

  return size * Math.pow(idk, fromIndex - toIndex);
}

function initEditor() {
  let instance: ClassicEditor | null = null;
  const model = ref("");

  return {
    instance: instance,
    editor: ClassicEditor,
    model: model as unknown as string,
    config: {
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
    } as EditorConfig,
    ready: (editor: ClassicEditor) => {
      instance = editor;
      instance.model.document.on("change:data", () => {
        if (!instance) return;
        model.value = instance.getData();
      });
    },
  };
}

export {
  pushToArray,
  find,
  remove,
  convertSize,
  initEditor,
  getAsyncIcon,
  getAsyncPreview,
  getAsyncAnswerType,
  getAsyncInputType,
};
