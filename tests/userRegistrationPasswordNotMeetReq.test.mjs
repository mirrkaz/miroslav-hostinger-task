import UserRegistrationPostMethods from "../methods/userRegistrationPostMethods.mjs";
import CreateUserBody from "../methods/createUserBody.mjs";
import { data } from "../variables/modules.mjs";
import { getRandomEmail } from "../faker.mjs";
import { notMeetReq } from "../variables/arrayData.mjs";
import {passNotMetReqResponse} from "../variables/responseData.mjs"

describe("User registration And password doesn't meet requirements - min 8 characters", function () {
    it("Create user registration with invalid password", async function () {
      data.obj = {
        createUserBody: [],
      };
      data.userEmail = getRandomEmail();
      for (let i = 0; i < notMeetReq.length; i++) {
        data.userPassword = notMeetReq[i].PASS; 
        data.createUserBody = CreateUserBody.userBodyReg(data.userEmail, data.userPassword);
        data.obj.createUserBody.push(data.createUserBody); 
  
        console.log(`Email: ${data.userEmail}, Password: ${data.userPassword}`);
      }
    });
  
    it("Register new user with not valid password and get validation and error message", async function () {
        this.timeout(12000);
        data.responseStatus = passNotMetReqResponse.STATUS;
        data.responseCode = passNotMetReqResponse.CODE;
        data.responseMessage = passNotMetReqResponse.MESSAGE;
        for (let i = 0; i < data.obj.createUserBody.length; i++) {
          await UserRegistrationPostMethods.createNewUserWithError(
            data.obj.createUserBody[i], 
            data.responseStatus,
            data.responseCode,
            data.responseMessage,
          );
        }
    });
    
});
