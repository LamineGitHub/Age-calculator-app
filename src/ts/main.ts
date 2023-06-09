import "../style/style.scss"
import {calculateAge} from "./calculateAge"

const formElement = document.querySelector("form")!

// Ajout d'un écouteur d'événement pour restreindre l'entrée aux valeurs numériques
formElement.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement

  if (target.type === "text") {
    const inputValue = target.value
    target.value = inputValue.replace(/\D/g, "")
  }
})

const formElement = document.querySelector("form")!

// Ajout d'un écouteur d'événement pour restreindre l'entrée aux valeurs numériques
formElement.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement

  if (target.type === "text") {
    const inputValue = target.value
    const numericValue = inputValue.replace(/\D/g, "")
    target.value = numericValue
  }
})

// Ajouter l'événement de soumission du formulaire
formElement.addEventListener("submit", (event) => {
  event.preventDefault()
  calculateAge()
})
