import "../style/style.scss"
import { calculateAge } from "./calculateAge"

// Ajouter l'événement de soumission du formulaire
document.querySelector("form")!.addEventListener("submit", (event) => {
  event.preventDefault()
  calculateAge()
})
