import { createAction } from '@reduxjs/toolkit';
import { FormStep } from '../../types/enums/formStep';
import { ProgressBarPercentage } from '../../types/enums/progressBarPercentage';

export const updateFirstName = createAction<string>('form/updateFirstName');
export const updateLastName = createAction<string>('form/updateLastName');
export const updateAddress = createAction<string>('form/updateAddress');
export const updatePhoneNumber = createAction<string>('form/updatePhoneNumber');
export const updateEmail = createAction<string>('form/updateEmail');
export const updateStep = createAction<FormStep>('form/updateStep');
export const updateProgressBar = createAction<ProgressBarPercentage>('form/updateProgressBar');
export const updateStepFormAddress = createAction<boolean>('form/updateStepFormAddress')
export const updateStepFormFirstName = createAction<boolean>('form/updateStepFirstName')
export const updateStepFormLastName = createAction<boolean>('form/updateStepLastName')
export const updateStepFormMail = createAction<boolean>('form/updateStepMail')
export const updateStepFormPhoneNumber = createAction<boolean>('form/updateStepPhoneNumber')

