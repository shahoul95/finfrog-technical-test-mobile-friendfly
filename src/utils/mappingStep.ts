import { FormStep } from "../types/enums/formStep";
import {ProgressBarPercentage} from "../types/enums/progressBarPercentage";
import { IStepMapping } from "../types/interfaces/IStepMapping";

export const stepMapping: IStepMapping = {
    [FormStep.LastName]: { stepPrevious: FormStep.FirstName, percentage: ProgressBarPercentage.Twenty },
    [FormStep.AddressMail]: { stepPrevious: FormStep.LastName, percentage: ProgressBarPercentage.Forty },
    [FormStep.PhoneNumber]: { stepPrevious: FormStep.AddressMail, percentage: ProgressBarPercentage.Sixty },
    [FormStep.Address]: { stepPrevious: FormStep.PhoneNumber, percentage: ProgressBarPercentage.Eighty },
    [FormStep.Confirmation]: { stepPrevious: FormStep.Address, percentage: ProgressBarPercentage.Ninety },
};