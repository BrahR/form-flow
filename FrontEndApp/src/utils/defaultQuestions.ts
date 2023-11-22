import { defineAsyncComponent } from "vue";
import { initEditor } from "@/utils";

const defaultQuestionTypes = {
  welcome: {
    name: "Welcome Page",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/WelcomePreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/WelcomeIcon.vue")
    ),
    action: true,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    imageOrVideo: {
      shown: true,
      on: false,
    },
    startButton: {
      shown: true,
      value: "Start",
    },
  },
  shortText: {
    name: "Short Text",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/WelcomePreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/WelcomeIcon.vue")
    ),
    action: true,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    answerFormat: {
      shown: true,
      on: false,
      format: "text",
    },
    imageOrVideo: {
      shown: true,
      on: false,
    },
    required: {
      shown: true,
      on: false,
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
  },
  multipleChoice: {
    name: "Multiple Choice",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/MultipleChoicePreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/MultipleChoiceIcon.vue")
    ),
    action: true,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    choices: [
      {
        hidden: false,
        value: "",
        checked: false,
      },
      {
        hidden: false,
        value: "",
        checked: false,
      },
    ],
    required: {
      shown: true,
      on: false,
    },
    imageOrVideo: {
      shown: true,
      on: false,
    },
    verticalDisplay: {
      shown: true,
      on: false,
    },
    multipleAnswers: {
      shown: true,
      on: false,
      min: 1,
      max: 2,
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
  },
  longText: {
    name: "Long Text",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/WelcomePreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/WelcomeIcon.vue")
    ),
    action: true,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    answerFormat: {
      shown: true,
      on: false,
      format: "textarea",
    },
    minMaxChar: {
      shown: true,
      min: 0,
      max: 100,
    },
    required: {
      shown: true,
      on: false,
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
  },
  pictureChoice: {
    name: "Picture Choice",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/PictureChoicePreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/PictureChoiceIcon.vue")
    ),
    action: true,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    choices: [
      {
        hidden: false,
        label: "",
        image: "",
        checked: false,
      },
      {
        hidden: false,
        label: "",
        image: "",
        checked: false,
      },
    ],
    required: {
      shown: true,
      on: false,
    },
    imageOrVideo: {
      shown: true,
      on: false,
    },
    hiddenLabel: {
      shown: true,
      on: false,
    },
    doubleDisplaySize: {
      shown: true,
      on: false,
    },
    multipleAnswers: {
      shown: true,
      on: false,
      min: 1,
      max: 2,
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
  },
  questionGroup: {
    name: "Question Group",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/QuestionGroupPreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/QuestionGroupIcon.vue")
    ),
    action: true,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    required: {
      shown: true,
      on: false,
    },
    button: {
      shown: true,
      value: "Next",
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
  },
  dropdown: {
    name: "Dropdown",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/DropdownPreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/DropdownIcon.vue")
    ),
    action: true,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    answerOptions: [],
    imageOrVideo: {
      shown: true,
      on: false,
    },
    required: {
      shown: true,
      on: false,
    },
    randomize: {
      shown: true,
      on: false,
    },
    sort: {
      shown: true,
      on: false,
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
  },
  numerical: {
    name: "Numerical Answer",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/NumericalPreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/NumericalAnswerIcon.vue")
    ),
    action: true,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    minMax: {
      shown: true,
      min: 0,
      max: 100,
    },
    imageOrVideo: {
      shown: true,
      on: false,
    },
    required: {
      shown: true,
      on: false,
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
    allowDecimal: {
      shown: true,
      on: false,
    },
  },
  opinionScale: {
    name: "Opinion Scale",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/OpinionScalePreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/OpinionScaleIcon.vue")
    ),
    action: true,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    scaleType: {
      number: {
        shown: true,
        on: false,
      },
      stars: {
        shown: true,
        on: false,
      },
      slider: {
        shown: true,
        on: false,
      },
    },
    minMax: {
      shown: true,
      min: 0,
      max: 100,
    },
    labels: {
      shown: true,
      on: false,
      left: "",
      right: "",
      center: "",
    },
    imageOrVideo: {
      shown: true,
      on: false,
    },
    required: {
      shown: true,
      on: false,
    },
    startAtZero: {
      shown: true,
      on: false,
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
  },
  email: {
    name: "Email",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/OpinionScalePreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/OpinionScaleIcon.vue")
    ),
    action: true,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    imageOrVideo: {
      shown: true,
      on: false,
    },
    required: {
      shown: true,
      on: false,
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
  },
  rating: {
    rating: "Rating",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/RatingPreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/RatingIcon.vue")
    ),
    action: true,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    scaleType: {
      number: {
        shown: true,
        on: false,
      },
      stars: {
        shown: true,
        on: false,
      },
      slider: {
        shown: true,
        on: false,
      },
    },
    minMax: {
      shown: true,
      min: 0,
      max: 100,
    },
    imageOrVideo: {
      shown: true,
      on: false,
    },
    required: {
      shown: true,
      on: false,
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
  },
  linkWeb: {
    name: "Link/Website",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/LinkWebPreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/LinkWebsiteIcon.vue")
    ),
    action: false,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: false,
      on: false,
      editor: initEditor(),
    },
    link: {
      shown: true,
      on: false,
      value: "",
    },
    imageOrVideo: {
      shown: false,
      on: false,
    },
    required: {
      shown: false,
      on: false,
    },
    hideQuestionNumber: {
      shown: false,
      on: false,
    },
  },
  ranking: {
    name: "Ranking",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/RankingPreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/RankingIcon.vue")
    ),
    action: false,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: false,
      on: false,
      editor: initEditor(),
    },
    choices: [
      {
        hidden: false,
        value: "",
        checked: false,
      },
      {
        hidden: false,
        value: "",
        checked: false,
      },
    ],
    imageOrVideo: {
      shown: true,
      on: false,
    },
    required: {
      shown: true,
      on: false,
    },
    randomize: {
      shown: true,
      on: false,
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
  },
  statement: {
    name: "Statement",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/StatementPreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/StatementIcon.vue")
    ),
    action: false,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: false,
      on: false,
      editor: initEditor(),
    },
    imageOrVideo: {
      shown: true,
      on: false,
    },
    label: {
      shown: true,
      on: false,
      value: "",
    },
  },
  fileUpload: {
    name: "File Upload",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/FileUploadPreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/FileUploadIcon.vue")
    ),
    action: false,
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: false,
      on: false,
      editor: initEditor(),
    },
    imageOrVideo: {
      shown: true,
      on: false,
    },
    required: {
      shown: true,
      on: false,
    },
    customExtension: {
      shown: true,
      on: false,
      value: [],
      error: "",
    },
    maxFileSize: {
      shown: true,
      on: false,
      type: "MB",
      value: 0,
    },
    hideQuestionNumber: {
      shown: true,
      on: false,
    },
  },
  endings: {
    name: "Ending Page",
    preview: defineAsyncComponent(
      () => import("@/components/question/preview/EndingsPreview.vue")
    ),
    icon: defineAsyncComponent(
      () => import("@/components/survey/icons/EndingsIcon.vue")
    ),
    action: false,
    afterSubmit: {
      shown: true,
      type: "custom", // custom, redirect
    },
    labeled: {
      shown: true,
      on: false,
      editor: initEditor(),
    },
    described: {
      shown: false,
      on: false,
      editor: initEditor(),
    },
    imageOrVideo: {
      shown: true,
      on: false,
    },
    shareButtons: {
      shown: true,
      on: false,
    },
    defaultEndings: {
      shown: true,
      on: false,
    },
    reloadRedirectButton: {
      shown: true,
      on: false,
      label: "",
      type: 0, // button, link
    },
    label: {
      shown: true,
      on: false,
      value: "",
    },
    autoReload: {
      shown: true,
      on: false,
      timer: 10,
    },
  },
};

export default defaultQuestionTypes;
