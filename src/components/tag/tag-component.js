import './tag-component.scss';

export const makeTag = (tagName) => {
  const tag = document.createElement('span');
  tag.classList.add('tag');
  tag.innerHTML = `<a href="">${tagName}</a>`;
  return tag;
};

export default { makeTag };
