import { FormStep } from "../enums/formStep";

export interface IStepMapping {
  [key: string]: { stepPrevious: FormStep; percentage: number };
}