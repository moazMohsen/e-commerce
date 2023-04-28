const validateUser = (user) => {
    return user ? '' : 'name is required';
};
const validateEmail = (email) => {
    const emailRegex =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    // email === "" ? '' : 'email is required';

    return !email ? "email is required" : emailRegex.test(email) ? '' : 'Invalid email';

    // return emailRegex.test(email) ? '' : 'Invalid email';
};
const validatePassword = (password, confirmPassword) => {
    if (password === '') {
        return "enter a password";
    }
    if (confirmPassword) {
        if (confirmPassword === '') {
            return "enter a confirmPassword";
        }
        if (password !== confirmPassword) {
            return "Passwords do not match";
        }
    }
    return "";
};

export const validationForm = (formData) => {
    const errorMessage = {
        userErrMsg: '',
        emailErrMsg: '',
        passwordErrMsg: '',
        confirmPassword: ''
    };

    let formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    if (formDataObj.hasOwnProperty("name")) {
        errorMessage.userErrMsg = validateUser(formDataObj.name);
    }
    // 
    errorMessage.emailErrMsg = validateEmail(formDataObj.email);
    // 
    errorMessage.passwordErrMsg = validatePassword(formDataObj.password);
    if (formDataObj.hasOwnProperty("confirmPassword")) {
        errorMessage.confirmPassword = validatePassword(formDataObj.password, formDataObj.confirmPassword);
    }
    return errorMessage;
};