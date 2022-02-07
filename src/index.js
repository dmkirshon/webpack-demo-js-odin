import myName from './myName';
import printMe from './print.js';


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.textContent = myName('Cody');

  btn.textContent = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  
  return element;
}

document.body.appendChild(component());
