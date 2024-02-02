import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/formAction';
import { FormStep } from '../../types/enums/formStep';
import { ProgressBarPercentage } from '../../types/enums/progressBarPercentage';

interface FormState {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  step: FormStep;
  progressBarPercent: number;
  isStepFormFirstName: boolean;
  isStepFormLastName: boolean;
  isStepFormMail: boolean;
  isStepFormPhoneNumber: boolean;
  isStepFormAddress: boolean
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  step: FormStep.FirstName,
  progressBarPercent: ProgressBarPercentage.Twenty,
  isStepFormFirstName: false,
  isStepFormLastName: false,
  isStepFormMail: false,
  isStepFormPhoneNumber: false,
  isStepFormAddress: false
};

const formReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.updateFirstName, (state, action) => {
      state.firstName = action.payload;
    })
    .addCase(actions.updateLastName, (state, action) => {
      state.lastName = action.payload;
    })
    .addCase(actions.updateAddress, (state, action) => {
      state.address = action.payload;
    })
    .addCase(actions.updateEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(actions.updatePhoneNumber, (state, action) => {
      state.phoneNumber = action.payload;
    })
    .addCase(actions.updateStep, (state, action) => {
      state.step = action.payload;
    })
    .addCase(actions.updateProgressBar, (state, action) => {
      state.progressBarPercent = action.payload;
    })
    .addCase(actions.updateStepFormFirstName, (state, action) => {
      state.isStepFormFirstName = action.payload;
    })
    .addCase(actions.updateStepFormLastName, (state, action) => {
      state.isStepFormLastName = action.payload;
    })
    .addCase(actions.updateStepFormMail, (state, action) => {
      state.isStepFormMail = action.payload;
    })
    .addCase(actions.updateStepFormAddress, (state, action) => {
      state.isStepFormAddress = action.payload;
    })
    .addCase(actions.updateStepFormPhoneNumber, (state, action) => {
      state.isStepFormPhoneNumber = action.payload;
    })
});

export default formReducer;
