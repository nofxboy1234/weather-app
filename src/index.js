import myName from './myName';
import { functionOne, functionTwo } from './myModule';
import './style.css';
import Icon from './icon.png';

import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = 'Hello webpack';
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  element.appendChild(btn);

  console.log(myName('Dylan'));
  console.log(functionOne());
  console.log(functionTwo());

  return element;
}

document.body.appendChild(component());
