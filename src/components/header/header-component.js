import './header-component.scss';
import { makeNav } from 'components/nav/nav-component';
import { makeAccountActions } from 'components/account-actions/account-actions-component';

export const makeHeader = ({ title }) => {
  const header = document.createElement('header');
  header.id = 'top';
  header.innerHTML = `<h1 class="title">${title}</h1>`;
  header.appendChild(makeNav());
  header.appendChild(makeAccountActions());
  return header;
};

export default { makeHeader };
