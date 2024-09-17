import UserRegistrationPostMethods from "../methods/userRegistrationPostMethods.mjs";
import CreateUserBody from "../methods/createUserBody.mjs";
import { data } from "../variables/modules.mjs";
import { getRandomEmail } from "../faker.mjs";
import { dataLeak } from "../variables/arrayData.mjs";
import {dataLeakResponse} from "../variables/responseData.mjs"

describe("User registration with DataLeak password, Labas+123, password1 and etc", function () {
    it("Create user registration body with leak password", async function () {
      data.obj = {
        createUserBody: [],
      };
      data.userEmail = getRandomEmail(); 
      for (let i = 0; i < dataLeak.length; i++) {
        data.userPassword = dataLeak[i].PASS; 
        data.createUserBody = CreateUserBody.userBodyReg(data.userEmail, data.userPassword);
        data.obj.createUserBody.push(data.createUserBody); 
        //console.log(`Email: ${data.userEmail}, Password: ${data.userPassword}`);
      }
    });
  
  

    it("Register new user with data leak password and get validation and error message", async function () {
        this.timeout(9000);
        data.responseStatus = dataLeakResponse.STATUS;
        data.responseCode = dataLeakResponse.CODE;
        data.responseMessage = dataLeakResponse.MESSAGE;
        
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
