import { clearErrorMessages } from "./clearErrorMessages"
import { displayErrorMessage } from "./displayErrorMessage"

interface DateFormData {
  days: number
  months: number
  years: number
  currentYear: number
  currentMonth: number
  currentDay: number
}

// Fonction de validation du formulaire
/**
 * This function validates a form by checking if the inputted date is valid and displays error messages
 * if necessary.
 * @returns a boolean value, which indicates whether the form input values are valid or not.
 */
export function validateForm({
                               days,
                               months,
                               years,
                               currentYear,
                               currentMonth,
                               currentDay,
                             }: DateFormData): boolean {

  clearErrorMessages()

  let isValid = true

  // Vérifier si les champs sont vides
  /* Validates fields, displays errors, checks future dates, returns validity status.*/
  isValid = validateEmptyFields(days, months, years, isValid, currentYear)

  /* Code checks if input date is in the future, comparing year, month, and day. Displays error message if invalid, sets isValid to false */
  if (
    isDateInFuture(years, months, days, currentYear, currentMonth, currentDay)
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

function validateDayInMonth(
  months: number,
  years: number,
  days: number,
  isValid: boolean
): boolean {
  switch (months) {
    case 2: // Février
      const isLeapYear = (years % 4 === 0 && years % 100 !== 0) || years % 400 === 0

      const maxDays = isLeapYear ? 29 : 28

      if (days > maxDays) {
        displayErrorMessage("days", "Must be a valid day")
        isValid = false
      }
      break
    case 4: // Avril
    case 6: // Juin
    case 9: // Septembre
    case 11: // Novembre
      if (days > 30) {
        displayErrorMessage("days", "Must be a valid day")
        isValid = false
      }
      break
    default: // Autres mois
      if (days > 31) {
        displayErrorMessage("days", "Must be a valid day")
        isValid = false
      }
      break
  }
  return isValid
}

function validateEmptyFields(
  days: number,
  months: number,
  years: number,
  isValid: boolean,
  currentYear: number
): boolean {
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
    if (!isDateValid(years, months, days, currentYear)) {
      displayErrorMessage("days", "Must be a valid day")
      displayErrorMessage("months", "Must be a valid month")
      displayErrorMessage("years", "Must be a valid year")
      isValid = false
    }

    if (years > currentYear) {
      displayErrorMessage("years", "Must be in the past")
      isValid = false
    }

    isValid = validateDayInMonth(months, years, days, isValid)
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

  return !(year < 0 || year > currentYear)
}
