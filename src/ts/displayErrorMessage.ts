// Fonction pour afficher un message d'erreur

/**
 * The function displays an error message and adds an error class to an input element.
 * @param {string} inputId - A string representing the ID of the input element that the error message
 * is associated with.
 * @param {string} message - The error message that will be displayed to the user.
 */
export function displayErrorMessage(inputId: string, message: string): void {
  const errorElement = document.querySelector(
    `#${inputId} + .errorMessage`
  ) as HTMLElement
  errorElement.textContent = message

  const inputElement = document.getElementById(inputId) as HTMLInputElement
  inputElement.classList.add("error")
}
