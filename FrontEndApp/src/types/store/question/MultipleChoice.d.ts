import {initEditor} from "@/utils";

export type MultipleChoice = {
  action: boolean,
  labeled: Toggleable & {
    editor: typeof initEditor
  },
  described: Toggleable & {
      editor: typeof initEditor
  },
  type: string,
  preview: string,
  icon: string,
  choices: {
    hidden: boolean,
    value: string,
    checked: boolean,
  }[],
  required: Toggleable,
  imageOrVideo: Toggleable,
  verticalDisplay: Toggleable,
  multipleAnswers: Toggleable & {
    min: number,
    max: number,
  },
  hideQuestionNumber: Toggleable,
}
