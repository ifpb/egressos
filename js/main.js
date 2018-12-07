fetch('data/egressos.json')
  .then(res => res.json())
  .then(json => exibeEgressos(json))

function exibeEgressos(egressos) {
  const egressosContainer = document.querySelector(".egressos")
  const view = egressos
    .filter(e => e.hasOwnProperty("linkedin") && e.hasOwnProperty("egresso"))
    .sort((a, b) => a.nomeCompactado.localeCompare(b.nomeCompactado))
    .map(e => mountCard(e))
    .join('')
    
  egressosContainer.innerHTML = view
}

function mountCard(person) {

  let github = ``
  let linkedin = ``
  let facebook = ``
  let instagram = ``
  let twitter = ``

  if (person.hasOwnProperty("linkedin")) {
    linkedin = `<a target="_blank" href="${person.linkedin}"><img src="img/icons/linkedin.png" alt="linkedin"/></a>`
  }

  if (person.hasOwnProperty("github")) {
    github = `<a target="_blank" href="${person.github}"><img src="img/icons/github.png" alt="github"/></a>`
  }

  if (person.hasOwnProperty("facebook")) {
    facebook = `<a target="_blank" href="${person.facebook}"><img src="img/icons/facebook.png" alt="facebook"/></a>`
  }

  if (person.hasOwnProperty("instagram")) {
    instagram = `<a target="_blank" href="${person.instagram}"><img src="img/icons/instagram.png" alt="instagram"/></a>`
  }

  if (person.hasOwnProperty("twitter")) {
    twitter = `<a target="_blank" href="${person.twitter}"><img src="img/icons/twitter.png" alt="twitter"/></a>`
  }

  const card = `<div class="egresso">
    <figure>
      <img src="img/egressos/${person.hasOwnProperty("avatar") ? person.avatar : 'placeholder.jpg'}" alt="${person.nomeCompactado}">
    </figure>
    <div class="icons">
        ${linkedin + github + facebook + instagram + twitter}
    </div>
    <div class="info">
    </div>
    <div class="name">
      <h2>${person.nomeCompactado}</h2>
    </div>
  </div>
  `

  return card
}