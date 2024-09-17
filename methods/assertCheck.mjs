class AssertCheck {
  static async AssertCheck(resDataResult, assertionData) {
    assertionData.forEach((func) => {
      func(resDataResult);
    });
  }
}
export default AssertCheck;
