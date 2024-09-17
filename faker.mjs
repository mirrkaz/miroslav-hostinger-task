import { faker } from "@faker-js/faker";

class Faker {
  getRandomUUID() {
    return faker.string.uuid();
  }
  getRandomEmail() {
    return faker.internet.email();
  }
  getRandomValidPasword() {
    return faker.string.alphanumeric(8, { minAlpha: 3, minNumeric: 3 });
  }
}

const fakerInstance = new Faker();

export const getRandomUUID = () => fakerInstance.getRandomUUID();
export const getRandomEmail = () => fakerInstance.getRandomEmail();
export const getRandomValidPasword = () => fakerInstance.getRandomValidPasword();
