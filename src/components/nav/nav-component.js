import './nav-component.scss';
import { makeTag } from 'components/tag/tag-component';

export const makeNav = () => {
  const nav = document.createElement('nav');
  fetch('http://localhost:8000/tags').then(response => response.json()).then((tagsJSON) => {
    tagsJSON.forEach(tag => nav.appendChild(makeTag(tag)));
  }).catch(error => console.log('Error: ', error)); // eslint-disable-line
  return nav;
};

export default { makeNav };
