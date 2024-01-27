export const stepMapping: IStepMapping = {
    "formLastNameStep": { step: "formFirstNameStep", percentage: 20 },
    "addressMailStep": { step: "formLastNameStep", percentage: 40 },
    "phoneNumberStep": { step: "addressMailStep", percentage: 60 },
    "addressStep": { step: "phoneNumberStep", percentage: 80 },
    "confirmationStep": { step: "addressStep", percentage: 90 },
};