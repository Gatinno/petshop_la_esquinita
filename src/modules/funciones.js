export function filterBySearch(array, valueSearch){
    return array.filter(card => card.producto.toLowerCase().includes(valueSearch.toLowerCase()))
  }

export  function renderCards(conteiner, array, value){
    let fragment = document.createDocumentFragment()
    conteiner.innerHTML = ""
    array.length
    ? array.forEach(card => {
      let divCard = document.createElement("div")
        divCard.classList.add("card", "marginCard")
        divCard.innerHTML +=
        `<div style="width: 18rem;">
            <a class="a-card" href="./details.html?id=${card._id} "> 
                <img class="card-img-top" src="${card.imagen}" alt="...">
            </a>
            <div class="card-body">
                <h5 class="card-title">${card.producto}</h5>
                <div class="text-button">
                    <p class="text-button">Price: ${card.precio}</p>
                    <a href="#"  class="btn btn-primary">Agregar</a>
                </div>
            </div>
        </div>`
      fragment.appendChild(divCard)
    })
    : (conteiner.innerHTML = `<p class="notFoud">No se encontró... "${value}" </p>`)
    conteiner.appendChild(fragment)
  }