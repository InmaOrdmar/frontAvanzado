import './content-component.scss';

export const makeContent = () => {
  const content = document.createElement('div');
  content.classList.add('content');
  content.innerHTML = '<div>Content goes here</div>';
  return content;
};

export default { makeContent };
