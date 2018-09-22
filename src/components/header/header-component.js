import './header-component.scss';
import { makeNav } from 'components/nav/nav-component';

export const makeHeader = ({ title }) => {
    const header = document.createElement('header');
    header.id = 'top';
    header.innerHTML = `<h1 class="title">${title}</h1>`;
    header.appendChild(makeNav());
    return header;
}

export default { makeHeader };