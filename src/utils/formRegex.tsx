const regexFirstNameAndLastName = new RegExp(/^[a-zA-Z\- ]+$/);
const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regexPhoneNumber= new RegExp(/^(?:(?:\+|00)33|0)[67]\d{7}$/);

export {regexFirstNameAndLastName, emailRegex, regexPhoneNumber}