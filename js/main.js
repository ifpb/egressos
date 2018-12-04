fetch('data/egressos.json')
  .then(res => res.json())
  .then(json => exibeEgressos(json))

function exibeEgressos(egressos) {
  const egressosContainer = document.querySelector(".egressos")
  const view = egressos
    .filter(e => e.hasOwnProperty("linkedin"))
    .sort((a, b) => a.nome.localeCompare(b.nome))
    .map(e => `<div class="egresso"">
      <figure>
        <img src="img/egressos/${e.hasOwnProperty("avatar") ? e.avatar : 'placeholder.jpg'}" alt="${e.nomeSimples}">
      </figure>
      <a href="${e.linkedin}" target="_blank" class="info">
        <h2>${e.nomeSimples}</h2>
      </a>
    </div>`)
    .join('')
    
  egressosContainer.innerHTML = view
}