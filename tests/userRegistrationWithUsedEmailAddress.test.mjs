import UserRegistrationPostMethods from "../methods/userRegistrationPostMethods.mjs";
import CreateUserBody from "../methods/createUserBody.mjs";
import { data } from "../variables/modules.mjs";
import {usedMailResponse} from "../variables/responseData.mjs"

describe("User registration with already used email address", () => {
  it("Create user registration body with registered email", async () => {
    data.userEmail = 'mirrkaz@gmail.com';
    data.userPassword = 'J';
    data.createUserBody = CreateUserBody.userBodyReg();
  });

  it("Register new user with already existed mail address in system, get validation and error message", async () => {
    data.responseStatus = usedMailResponse.STATUS;
    data.responseCode = usedMailResponse.CODE,
    data.responseMessage = usedMailResponse.MESSAGE;
    await UserRegistrationPostMethods.createNewUserWithError(
      data.createUserBody,
      data.responseStatus,
      data.responseCode,
      data.responseMessage,
    );
  });
});
