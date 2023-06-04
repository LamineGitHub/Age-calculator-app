import { getInputValue } from "./getInputValue"
import { clearErrorMessages } from "./clearErrorMessages"
import { displayErrorMessage } from "./displayErrorMessage"

// Fonction de validation du formulaire
/**
 * This function validates a form by checking if the inputted date is valid and displays error messages
 * if necessary.
 * @returns a boolean value, which indicates whether the form input values are valid or not.
 */
export function validateForm(): boolean {
  clearErrorMessages()

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1
  const currentDay = currentDate.getDate()

  let isValid = true

  const days = getInputValue("days")
  const months = getInputValue("months")
  const years = getInputValue("years")

  const numericDay = days
  const numericMonth = months
  const numericYear = years
  // Vérifier si les champs sont vides
  /* Validates fields, displays errors, checks future dates, returns validity status.*/
  if (!days || !months || !years) {
    if (!days) {
      displayErrorMessage("days", "This field is required")
    }
    if (!months) {
      displayErrorMessage("months", "This field is required")
    }
    if (!years) {
      displayErrorMessage("years", "This field is required")
    }
    isValid = false
  } else {
    if (!isDateValid(numericYear, numericMonth, numericDay, currentYear)) {
      displayErrorMessage("days", "Must be a valid day")
      displayErrorMessage("months", "Must be a valid month")
      displayErrorMessage("years", "Must be a valid year")
      isValid = false
    }

    if (numericYear > currentYear) {
      displayErrorMessage("years", "Must be in the past")
      isValid = false
    }

    switch (numericMonth) {
      case 2: // Février
        const isLeapYear =
          (numericYear % 4 === 0 && numericYear % 100 !== 0) ||
          numericYear % 400 === 0

        const maxDays = isLeapYear ? 29 : 28

        if (numericDay > maxDays) {
          displayErrorMessage("days", "Must be a valid day")
          isValid = false
        }
        break
      case 4: // Avril
      case 6: // Juin
      case 9: // Septembre
      case 11: // Novembre
        if (numericDay > 30) {
          displayErrorMessage("days", "Must be a valid day")
          isValid = false
        }
        break
      default: // Autres mois
        if (numericDay > 31) {
          displayErrorMessage("days", "Must be a valid day")
          isValid = false
        }
        break
    }
  }

  /* Code checks if input date is in the future, comparing year, month, and day. Displays error message if invalid, sets isValid to false */
  if (
    isDateInFuture(
      numericYear,
      numericMonth,
      numericDay,
      currentYear,
      currentMonth,
      currentDay
    )
  ) {
    displayErrorMessage("months", "This date is invalid")
    displayErrorMessage("days", "This date is invalid")
    isValid = false
  }

  if (!isValid) {
    const formContainer = document.getElementById("form-Container")
    formContainer!.classList.add("error")
  }

  return isValid
}

function isDateInFuture(
  year: number,
  month: number,
  day: number,
  currentYear: number,
  currentMonth: number,
  currentDay: number
): boolean {
  const isFutureYear = year >= currentYear
  const isFutureMonth = month > currentMonth
  const isCurrentMonth = month === currentMonth
  const isFutureDay = day > currentDay

  return isFutureYear && (isFutureMonth || (isCurrentMonth && isFutureDay))
}

function isDateValid(
  year: number,
  month: number,
  day: number,
  currentYear: number
): boolean {
  if (day < 1 || day > 31) {
    return false
  }

  if (month < 1 || month > 12) {
    return false
  }

  if (year < 0 || year > currentYear) {
    return false
  }

  return true
}
