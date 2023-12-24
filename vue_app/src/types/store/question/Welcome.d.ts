import type { GenericQuestion } from "./GenericQuestion";

type Welcome = GenericQuestion & {
  button: {
    value: string;
    error: string;
  };
};

export default Welcome;
