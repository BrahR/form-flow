type SurveyStore = {
  data: Survey[] | [];
  selected: Survey | null;
  creating: boolean;
  loading: boolean;
  hydrated: boolean;
};
