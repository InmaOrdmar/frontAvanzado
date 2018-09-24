import './summary-component.scss';

export const makeSummary = ({ title, author, brief, picUrl, commentCount }) => { // eslint-disable-line
  const summary = document.createElement('div');
  summary.classList.add('summary');
  summary.innerHTML = `<h2>${title}</h2>
  <div class="details">
    <img src="${picUrl}">
    <div class="brief">${brief}</div>
    <div class="author">By: ${author}</div>
    <div class="comment-count">
      <i class="far fa-comments"></i>
      ${commentCount}  
    </div>
  </div>`;
  return summary;
};

export default { makeSummary };
