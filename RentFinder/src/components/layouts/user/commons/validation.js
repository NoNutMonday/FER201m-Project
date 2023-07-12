import md5 from "md5";

export const check = (value) => value === '' || value === null || value === undefined;

export const checkUserName = (username, message) => {
    if (check(username.value)) {
        username.style.borderColor = 'red';
        message.innerHTML = 'Username is required';
        message.classList.remove('d-none');
        return false;
    } else {
        if (username.value.length < 6) {
            username.style.borderColor = 'red';
            message.innerHTML = 'Username must be at least 6 characters';
            message.classList.remove('d-none');
            return false;
        } else {
            username.style.borderColor = 'green';
            message.innerHTML = '';
            message.classList.add('d-none');
            return true;
        }
    }
}

export const checkPasswordEmpty = (password, message) => {
    if (check(password?.value)) {
        password.style.borderColor = 'red';
        message.innerHTML = 'Password is required';
        message.classList.remove('d-none');
        return false;
    } else {
        password.style.borderColor = 'green';
        return true;
    }
}

export const checkPassword = (password, message) => {
    if (check(password?.value)) {
        password.style.borderColor = 'red';
        message.innerHTML = 'Password is required';
        message.classList.remove('d-none');
        return false;
    } else {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/
        if (password.value.match(regex)) {
            password.style.borderColor = 'green';
            message.innerHTML = '';
            message.classList.add('d-none');
            return true;
        } else {
            password.style.borderColor = 'red';
            message.innerHTML = 'Password must be at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character';
            message.classList.remove('d-none');
            return false;
        }
    }
}

export const checkConfirmPassword = (password, confirm, message) => {
    if (check(confirm?.value) || check(password?.value)) {
        confirm.style.borderColor = 'red';
        password.style.borderColor = 'red';
        message.innerHTML = 'Confirm Must Be The Same Password';
        message.classList.remove('d-none');
        return false;
    } else {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/
        if (confirm.value.match(regex) && confirm.value === password.value) {
            confirm.style.borderColor = 'green';
            message.innerHTML = '';
            message.classList.add('d-none');
            return true;
        } else {
            confirm.style.borderColor = 'red';
            message.innerHTML = 'Password must be at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character';
            message.classList.remove('d-none');
            return false;
        }
    }
}

export const checkEmail = (email, message) => {
    if (check(email?.value)) {
        email.style.borderColor = 'red';
        message.innerHTML = 'Email is required';
        message.classList.remove('d-none');
        return false;
    } else {
        const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
        if (email.value.match(regex)) {
            email.style.borderColor = 'green';
            message.innerHTML = '';
            message.classList.add('d-none');
            return true;
        } else {
            email.style.borderColor = 'red';
            message.innerHTML = 'Email is invalid';
            message.classList.remove('d-none');
            return false;
        }
    }
}

export const checkFullName = (fullName, message) => {
    if (check(fullName?.value)) {
        fullName.style.borderColor = 'red';
        message.innerHTML = 'Full Name is required';
        message.classList.remove('d-none');
        return false;
    } else {
        if (fullName.value.length < 6) {
            fullName.style.borderColor = 'red';
            message.innerHTML = 'Full Name must be at least 6 characters';
            message.classList.remove('d-none');
            return false;
        } else {
            fullName.style.borderColor = 'green';
            message.innerHTML = '';
            message.classList.add('d-none');
            return true;
        }
    }
}

export const checkPhone = (phone, message) => {
    if (check(phone?.value)) {
        phone.style.borderColor = 'red';
        message.innerHTML = 'Phone is required';
        message.classList.remove('d-none');
        return false;
    } else {
        phone.style.borderColor = 'green';
        message.innerHTML = '';
        message.classList.add('d-none');
        return true;
    }
}

export const checkAddress = (address, message) => {
    if (check(address?.value)) {
        address.style.borderColor = 'red';
        message.innerHTML = 'Address is required';
        message.classList.remove('d-none');
        return false;
    } else {
        if (address.value.length < 6) {
            address.style.borderColor = 'red';
            message.innerHTML = 'Address must be at least 6 characters';
            message.classList.remove('d-none');
            return false;
        } else {
            address.style.borderColor = 'green';
            message.innerHTML = '';
            message.classList.add('d-none');
            return true;
        }
    }
}

export const checkEmailExist = (database = [], email, message) => {
    const accountExist = database?.find(account => account.email.toLowerCase().includes(email.value.toLowerCase()))
    if (accountExist) {
        email.style.borderColor = 'red';
        message.innerHTML = 'Email Is Exist !';
        message.classList.remove('d-none');
        return false;
    }
    return true;
}

export const checkEmailExistForUpdate = (database = [], email, oldEmail, message) => {
    if (email.value === oldEmail) {
        return true;
    } else {
        const accountExist = database?.find(account => account.email.toLowerCase().includes(email.value.toLowerCase()))
        if (accountExist) {
            email.style.borderColor = 'red';
            message.innerHTML = 'Email Is Exist !';
            message.classList.remove('d-none');
            return false;
        }
    }
}

export const checkUserNameExist = (database = [], username, message) => {
    const accountExist = database.find(account => account.userName.toLowerCase().includes(username.value.toLowerCase()))
    if (accountExist) {
        username.style.borderColor = 'red';
        message.innerHTML = 'UserName Is Exist !';
        message.classList.remove('d-none');
        return false;
    }
    return true;
}

export const checkOldPassword = (oldPassword, enterPassword, message) => {
    if (check(enterPassword?.value)) {
        enterPassword.style.borderColor = 'red';
        message.innerHTML = 'Old Password is required';
        message.classList.remove('d-none');
        return false;
    } else {
        if (enterPassword.value.length < 6) {
            enterPassword.style.borderColor = 'red';
            message.innerHTML = 'Old Password must be at least 6 characters';
            message.classList.remove('d-none');
            return false;
        } else {
            if (oldPassword === md5(enterPassword.value)) {
                enterPassword.style.borderColor = 'green';
                message.innerHTML = '';
                message.classList.add('d-none');
                return true;
            } else {
                enterPassword.style.borderColor = 'red';
                message.innerHTML = 'Old Password is wrong';
                message.classList.remove('d-none');
                return false;
            }
        }
    }
}

export const checkNewPassword = (oldPassword, newPassword, message) => {
    if (checkPassword(newPassword, message)) {
        if (oldPassword === md5(newPassword.value)) {
            newPassword.style.borderColor = 'red';
            message.innerHTML = 'New Password Must Be Different Old Password';
            message.classList.remove('d-none');
            return false;
        } else {
            newPassword.style.borderColor = 'green';
            message.innerHTML = '';
            message.classList.add('d-none');
            return true;
        }
    } else {
        return false;
    }
}

export const checkConfirmNewPassword = (newPassword, confirmNewPassword, message) => {
    if (checkConfirmPassword(newPassword, confirmNewPassword, message)) {
        return true;
    } else {
        return false;
    }
}

