import type { GenericQuestion } from "./GenericQuestion";

type Welcome = GenericQuestion & {
  button: {
    value: string;
    error: boolean;
  };
};

export default Welcome;
