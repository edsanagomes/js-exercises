/**
 * In JavaScript objects are really diffrent form Java or other object based languages.
 * The syntax to use it looks more like declaring structs, but the can also carry methods.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects
 */

/**
 * @return {Object} you should return a new object containing two properties, first_name and last_name.
 * The values of the properties should be "Toto", "Tutu"
 */
export function crateUserObject() {
  const user = {
    first_name: "Toto",
    last_name: "Tutu"
  };
  return user;
}

/**
 *
 * @param {{first_name: string, last_name:string}} object A user object
 * @return string a concatenation of the first and last name, separated with a space
 */
export function accessPropertiesInObjects(object) {
  return object.first_name + " " + object.last_name

}

/**
 *
 * @param {Object} object
 * @return {{keys: Array<string>, values: Array<string>}} A new object containing two keys (keys, values),
 * each key should contain respectively all original object keys mapped to uppercase,
 * and all original object values mapped to lower case
 */
export function iteratesThroughObjectValuesAndProperties(object) {
  const keys = Object.keys(object).map(key => key.toUpperCase());
  const values = Object.values(object).map(value => value.toLowerCase());
  return { keys, values };
}

/**
 * Return the name of the first younger and last older user in the array
 * @param {Array<{name: string, age: number}>} users
 * @return {{younger: string, older: string}}
 */
export function retrieveMaximumMinimumUserAges(users) {
  let younger = users[0]; 
  let older = users[0];
  for (const user of users) {
    if (user.age < younger.age) {
      younger = user; 
    }
    if (user.age >= older.age) {
      older = user;
    }
  }
  return { younger: younger.name, older: older.name };
}


/**
 * In javascript, objects can be represented as string, this is JSON
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
 * @param {string} string
 * @return {Object} An object retried by parsing the string (parcing = renvoyer)
 */
export function parseJavaScriptObjectNotation(string) {
 return JSON.parse(string);
}

/**
 * @param {Object} object
 * @return {string} An string representing the given object
 */
export function stringifyJavaScriptObjectNotation(object) {
  return JSON. stringify(object);
}
