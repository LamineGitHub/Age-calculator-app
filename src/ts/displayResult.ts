import { CountUp } from "countup.js"

/**
 * The function displays the age in years, months, and days on a web page.
 * @param {number} ageYears - The number of years in a person's age.
 * @param {number} ageMonths - The number of months in a person's age.
 * @param {number} ageDays - The number of days in a person's age.
 */
export function displayResult(
  ageYears: number,
  ageMonths: number,
  ageDays: number
) {
  countUp(document.getElementById("year")!, ageYears)
  countUp(document.getElementById("month")!, ageMonths)
  countUp(document.getElementById("day")!, ageDays)
}

function countUp(target: HTMLElement, endVal: number) {
  const countUp = new CountUp(target, endVal)
  if (!countUp.error) {
    countUp.start()
  } else {
    console.error(countUp.error)
  }
}
