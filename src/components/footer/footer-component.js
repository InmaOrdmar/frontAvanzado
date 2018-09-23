import './footer-component.scss';

export const makeFooter = ({ title }) => {
  const footer = document.createElement('footer');
  footer.innerHTML = `<h1 class="title">${title}</h1> 
  <a class="link-to-top" href="#top"><i class="far fa-arrow-alt-circle-up"></i></a>`;
  return footer;
};

export default { makeFooter };
