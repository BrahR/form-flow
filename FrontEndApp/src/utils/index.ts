import {ClassicEditor} from "@ckeditor/ckeditor5-editor-classic";
import {Essentials} from "@ckeditor/ckeditor5-essentials";
import {Bold, Italic, Underline} from "@ckeditor/ckeditor5-basic-styles";
import {Link} from "@ckeditor/ckeditor5-link";
import {Paragraph} from "@ckeditor/ckeditor5-paragraph";
import {EditorConfig} from "@ckeditor/ckeditor5-core";
import {Alignment} from "@ckeditor/ckeditor5-alignment";
import {Ref, ref} from "vue";

interface hasId {
  id: number
}

function pushToArray<T>(array: T[] | null | undefined, ...items: T[]): T[] {
  const newArray = array ?? []
  newArray.push(...items)
  return newArray
}

function find<T extends hasId>(id: number, array: T[]): number {
  return array.findIndex((i: T) => i.id == id)
}

function remove<T extends hasId>(id: number, array: T[]): T[] {
  const index = find(id, array)
  if (index > -1) {
    array.splice(index, 1)
  }
  return array
}

function initEditor(e) {
  let instance: ClassicEditor | null = null;
  const model = ref("")

  return {
    instance: instance,
    editor: ClassicEditor,
    model: model,
    config: {
      alignment: {
        options: [
          {
            name: 'left',
            className: 'text-left'
          },
          {
            name: 'center',
            className: 'text-center'
          },
          {
            name: 'right',
            className: 'text-right'
          }
        ]
      },
      plugins: [
        Essentials,
        Bold,
        Italic,
        Link,
        Alignment,
        Paragraph,
        Underline
      ],
      toolbar: {
        items: [
          'bold',
          'italic',
          'underline',
          'link',
          'alignment',
          'undo',
          'redo',
        ]
      },
      placeholder: "Enter a label",
      link: {
        decorators: {
          toggleDownloadable: {
            mode: 'manual',
            label: 'Downloadable',
            attributes: {
              download: 'file'
            }
          },
          openInNewTab: {
            mode: 'manual',
            label: 'Open in a new tab',
            defaultValue: true,
            attributes: {
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          },
        },
        defaultProtocol: 'https://',

      },
    } as EditorConfig,
    ready: (editor: ClassicEditor) => {
      instance = editor
      instance.model.document.on('change:data', () => {
        if (!instance) return;
        model.value = instance.getData();
      });
    }
  }
}

export {pushToArray, find, remove, initEditor}
