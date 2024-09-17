export const dataLeakResponse = { STATUS: 403, CODE: 2050, MESSAGE: 'The given password has appeared in a data leak. Please choose a different password.' };;

export const notMeetReqResponse = { STATUS: 422, CODE: 2004, MESSAGE: 'The email must be a valid email address.' };

export const usedMailResponse = { STATUS: 403, CODE: 2017, MESSAGE: 'Email address is already registered.' };

export const emptyMailResponse = { STATUS: 422, CODE: 2004, MESSAGE: 'The email field is required.' };

export const passNotMetReqResponse = { STATUS: 403, CODE: 2050, MESSAGE: 'Password does not meet the requirements.' };
