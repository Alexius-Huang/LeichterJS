export function appendNode(element, params) {
  /* Create child element */
  const child = document.createElement(params.name)
  child.className = params.classList.join(' ')
  child.id = params.id

  if (params.attributes) {
    for (let key in params.attributes) {
      child.setAttribute(key, params.attributes[key])
    }  
  }
  
  element.appendChild(child)

  /* Append to grand child element */
  if (params.children) {
    for (let grandChildInfo of params.children) {
      appendNode(child, grandChildInfo)
    }
  }
}