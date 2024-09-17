import { expect } from 'chai';

class GeneralAsserts {
    notContainErrorRes = [
        function (res) {
            expect(JSON.stringify(res.data)).to.not.contain('error');
        },
    ];
}
//Assert for 200 response
export default new GeneralAsserts();
