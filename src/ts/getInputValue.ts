// Fonction pour récupérer la valeur d'un champ de saisie

/**
 * The function retrieves the numerical value of an input element on a webpage.
 * @param {string} inputId - The inputId parameter is a string that represents the ID of an HTML input
 * element.
 * @returns {number} a number value that is parsed from the value of an HTML input element with the specified
 * inputId.
 */
export function getInputValue(inputId: string): number {
  const inputElement = document.getElementById(inputId) as HTMLInputElement
  return parseInt(inputElement.value)
}
