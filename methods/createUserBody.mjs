import { data } from "../variables/modules.mjs";
import { jsons } from "../constant/modules.mjs";

class CreateUserBody {
  static userBodyReg() {
    data.createUserBody = jsons.createNewAccount(
      data.userEmail,
      data.userPassword,
    );
    return data.createUserBody;
  }
}
export default CreateUserBody;
