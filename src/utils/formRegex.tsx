const regexFirstNameAndLastName = new RegExp(/^[a-zA-Z\- ]+$/);
const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[[comfrukg]+$/);
const regexPhoneNumber= new RegExp(/^(?:(?:\+|00)33|0)[67]\d{8}$/);

export {regexFirstNameAndLastName, emailRegex, regexPhoneNumber}
