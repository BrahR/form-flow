import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic, Underline } from "@ckeditor/ckeditor5-basic-styles";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { EditorConfig } from "@ckeditor/ckeditor5-core";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { defineAsyncComponent, ref } from "vue";
import defaultQuestionTypes from "@/utils/defaultQuestions";
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

function getAsyncIcon(icon: string) {
  return defineAsyncComponent(
    () => import(`@/components/survey/icons/${icon}.vue`)
  );
}

function getAsyncAnswerType(type: string) {
  return defineAsyncComponent(
    () => import(`@/components/question/toggles/answer_types/${type}.vue`)
  );
}

function getAsyncInputType(type: string) {
  return defineAsyncComponent(
    () => import(`@/components/question/preview/answer_input_types/${type}.vue`)
  );
}

function getAsyncPreview(icon: string) {
  return defineAsyncComponent(
    () => import(`@/components/question/preview/${icon}.vue`)
  );
}

function initEditor() {
  let instance: ClassicEditor | null = null;
  const model = ref("");

  return {
    instance: instance,
    editor: ClassicEditor,
    model: model,
    config: {
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
      ],
      toolbar: {
        items: [
          "bold",
          "italic",
          "underline",
          "link",
          "alignment",
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
  initEditor,
  getAsyncIcon,
  getAsyncPreview,
  getAsyncAnswerType,
  getAsyncInputType,
  defaultQuestionTypes,
};
