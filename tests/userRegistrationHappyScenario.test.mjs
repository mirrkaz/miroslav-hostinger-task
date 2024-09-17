import UserRegistrationPostMethods from "../methods/userRegistrationPostMethods.mjs";
import CreateUserBody from "../methods/createUserBody.mjs";
import { data } from "../variables/modules.mjs";
import { getRandomEmail, getRandomValidPasword } from "../faker.mjs";
import generalAsserts from "../methods/gerneralAssert.mjs";


describe("New user registration when all data meets requirements", () => {
  it("Create user registration body with valid data", async () => {
    data.userEmail = getRandomEmail();
    data.userPassword = getRandomValidPasword();
    data.createUserBody = CreateUserBody.userBodyReg();
    console.log(data.userEmail,data.userPassword)
  });

  it("Register new user, email address and password meet requirements. Get 200 response. User is created", async function () {
    this.timeout(5000);
    await UserRegistrationPostMethods.createNewUser(data.createUserBody,generalAsserts.notContainErrorRes)
  });
});
