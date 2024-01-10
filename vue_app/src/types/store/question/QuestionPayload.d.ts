type QuestionPayload = {
  type: string;
  question: {
    html_label: string;
    html_description: string;
    attachment: string; // this.imageOrVideo,
  };
  questionable: object;
};
