// Fonction pour effacer les messages d'erreur

export function clearErrorMessages(): void {
  const errorElements = document.querySelectorAll(".errorMessage")
  errorElements.forEach((element) => {
    element.textContent = ""
  })

  const inputElements = document.querySelectorAll(".error")
  inputElements.forEach((element) => {
    element.classList.remove("error")
  })

  const formContainer = document.getElementById("form-Container")
  formContainer!.classList.remove("error")
}
