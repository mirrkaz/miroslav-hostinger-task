import axios from "axios";
import { expect } from "chai";
import headers from '../constant/header.mjs';
import { values } from "../constant/common.mjs";
import { data } from "../variables/modules.mjs";
import AssertCheck from "./assertCheck.mjs";
import ErrorLog from "./error.Log.mjs";

class UserRegistrationPostMethods {

    static async createNewUser(createNewUserBody, assertionData) {
      let res;
      try {
        res = await axios.post(
          values.userRegistrationUrl,
          createNewUserBody,
          headers
        );
        console.log(createNewUserBody);
        expect(res.status).to.be.eql(201, "Status should be 200");
  
        if (assertionData !== undefined) {
          await AssertCheck.AssertCheck(res.data, assertionData); 
        }
  
        data.clientId = res.data.client_id; 
        console.log('Response Result:', res.data.result)
        console.log(`New Client Id: ${data.clientId}`);
        
      } catch (err) {
        ErrorLog.post(
          err,
          createNewUserBody,
          values.userRegistrationUrl,
          headers,
          res?.data || null 
        );
        throw err; 
      }
    }
  

static async createNewUserWithError(createNewUserBody, responseStatus, errorCode, errorMessage) {
  try {
      const res = await axios.post(values.userRegistrationUrl, createNewUserBody, headers);


  } catch (err) {
      if (err.response) {
          
          expect(err.response.status).to.be.equal(responseStatus, "Error: Status 403 or 422 expected");

          expect(err.response.data.error.code).to.be.equal(errorCode, "Error code");

          expect(err.response.data.error.message).to.equal(errorMessage, "Error message");
      } else {
        
          console.error('Non-response error:', err);
      }

     
      ErrorLog.post(
          err,
          createNewUserBody,
          values.userRegistrationUrl,
          headers,
          err.response
      );
  }
}
}

export default UserRegistrationPostMethods;
