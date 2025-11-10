/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (
    typeof needle !== 'string' ||
    typeof haystack !== 'string' ||
    typeof newWord !== 'string'
  ) {
    throw new Error('Unsupported type')
  }
  const applyCase = (originalChar, newChar) => {
    return originalChar === originalChar.toUpperCase()
      ? newChar.toUpperCase()
      : newChar.toLowerCase()
  }
  return haystack.replace(new RegExp(needle, 'gi'), (match) => {
    let result = ''
    for (let i = 0; i < Math.min(match.length, newWord.length); i++) {
      result += applyCase(match[i], newWord[i])
    }
    return result
  })
}
