import { validateForm } from "./validateForm"
import { getInputValue } from "./getInputValue"
import { displayResult } from "./displayResult"

/**
 * This function calculates a person's age based on their inputted birthdate and displays the result.
 * @returns The function does not return anything, it has a return type of `void`.
 */
export function calculateAge(): void {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1
  const currentDay = currentDate.getDate()

  const days = getInputValue("days")
  const months = getInputValue("months")
  const years = getInputValue("years")

  // Vérifier si le formulaire est valide
  if (!validateForm()) {
    return
  }

  // Calculer l'âge
  let ageYears = currentYear - years
  let ageMonths = currentMonth - months
  let ageDays = currentDay - days

  if (ageDays < 0) {
    ageMonths--
    ageDays += new Date(currentYear, currentMonth - 1, 0).getDate()
  }

  if (ageMonths < 0) {
    ageYears--
    ageMonths += 12
  }

  // Afficher les résultats
  displayResult(ageYears, ageMonths, ageDays)
}
