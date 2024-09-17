import UserRegistrationPostMethods from "../methods/userRegistrationPostMethods.mjs";
import CreateUserBody from "../methods/createUserBody.mjs";
import { data } from "../variables/modules.mjs";
import { getRandomValidPasword } from "../faker.mjs";
import { notValidMail } from "../variables/arrayData.mjs";
import {notMeetReqResponse} from "../variables/responseData.mjs"

describe("User registration And Mail doesn't meet requirements - @ .com ", function () {
    it("Create user registration invalid mail", async function () {
      data.obj = {
        createUserBody: [],
      };
      data.userPassword = getRandomValidPasword(); // Generate random email
      for (let i = 0; i < notValidMail.length; i++) {
        data.userEmail = notValidMail[i].MAIL; 
  
        // Create user body with the leak password
        data.createUserBody = CreateUserBody.userBodyReg(data.userEmail, data.userPassword);
        data.obj.createUserBody.push(data.createUserBody); 
  
        //console.log(`Email: ${data.userEmail}, Password: ${data.userPassword}`); 
      }
    });
  
    it("Register new user with not valid mail data and get validation and error message", async function () {
        this.timeout(9000);
        data.responseStatus = notMeetReqResponse.STATUS;
        data.responseCode = notMeetReqResponse.CODE
        data.responseMessage = notMeetReqResponse.MESSAGE;
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
