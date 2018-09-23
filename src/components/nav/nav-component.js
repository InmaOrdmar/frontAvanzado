import './nav-component.scss';

export const makeNav = () => {
  const nav = document.createElement('nav');
  nav.innerHTML = '<div class="tags-wrapper">Tags go here</div>';
  return nav;
};

export default { makeNav };
