import './nav-component.scss';
import data from 'data/db.json';
import { makeTag } from 'components/tag/tag-component';

export const makeNav = () => {
  const nav = document.createElement('nav');
  data.tags.forEach((tag) => {
    nav.appendChild(makeTag(tag));
    console.log(tag); // eslint-disable-line
  });
  return nav;
};

export default { makeNav };
