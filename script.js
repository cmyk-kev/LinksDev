function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/icons/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/icons/avatar.png")
  }

  const alt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    alt.setAttribute(
      "alt",
      "Foto de um personagem ruivo com cicatriz vertical entre os olhos e nariz "
    )
  } else {
    alt.setAttribute("alt", "Foto de um personagem moreno")
  }
}
