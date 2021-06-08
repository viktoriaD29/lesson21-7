export const createButton = (buttonText) => {
  const createElem = document.createElement('button')
  createElem.textContent = buttonText;
  const elem = document.querySelector('body')
  return elem.append(createElem);
}






