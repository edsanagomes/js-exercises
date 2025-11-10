/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  if (typeof diameter !== 'number' || Number.isNaN(diameter)) {
    throw new Error('Unsupported type');
  }
  const radius = diameter / 2;
  return (4 / 3) * Math.PI * radius ** 3;
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  return Math.round(n * 10) / 10
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  // Write your code here
}
