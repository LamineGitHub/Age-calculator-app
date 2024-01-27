import "../style/style.scss"
import { calculateAge } from "./calculateAge"

document.querySelector("form")!
  .addEventListener("submit", (e) => {
    e.preventDefault()
    calculateAge()
  })
