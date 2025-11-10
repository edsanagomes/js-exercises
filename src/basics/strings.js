/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (typeof needle !== 'string' || typeof haystack !== 'string' || typeof newWord !== 'string') {
    throw new Error('Unsupported type');
  }

  return haystack.replace(new RegExp(needle, 'gi'), (match) => {
    if (match[0] === match[0].toUpperCase()) {
      return newWord[0].toUpperCase() + newWord.slice(1);
    } else {
      return newWord[0].toLowerCase() + newWord.slice(1);
    }
  });
}


