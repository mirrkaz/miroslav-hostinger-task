import UserRegistrationPostMethods from "../methods/userRegistrationPostMethods.mjs";
import CreateUserBody from "../methods/createUserBody.mjs";
import { data } from "../variables/modules.mjs";
import { getRandomValidPasword } from "../faker.mjs";
import { emptyMail } from "../variables/arrayData.mjs";
import{emptyMailResponse} from "../variables/responseData.mjs"

describe("User registration when maail is empty. Test 3 empty scenarios: without and with spaces", function () {
    it("Create user registration body with empty email", async function () {
      data.obj = {
        createUserBody: [],
      };
      data.userPassword = getRandomValidPasword(); 
      for (let i = 0; i < emptyMail.length; i++) {
        data.userEmail = emptyMail[i].EMPTY; 
        data.createUserBody = CreateUserBody.userBodyReg(data.userEmail, data.userPassword);
        data.obj.createUserBody.push(data.createUserBody); 
        //console.log(`Email: ${data.userEmail}, Password: ${data.userPassword}`); Helps for debug
      }
    });
  
    it("Register new user with empty mail, get validation and error message", async function () {
        this.timeout(9000);
        data.responseStatus = emptyMailResponse.STATUS;
        data.responseCode = emptyMailResponse.CODE;
        data.responseMessage = emptyMailResponse.MESSAGE;
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
