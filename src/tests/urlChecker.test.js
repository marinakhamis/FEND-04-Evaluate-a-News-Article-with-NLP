import { checkForName } from "../client/js/nameChecker";

describe(checkForName, () => {

    test("It should return true if the url starts with https://", () => {
        expect(checkForName('https://www.google.com')).toBe(true);
    });
   
});