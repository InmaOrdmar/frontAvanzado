import './summary-component.scss';

export const makeSummary = ({ title, author, brief, picUrl, commentCount }) => { // eslint-disable-line
  const summary = document.createElement('div');
  summary.classList.add('summary');
  summary.innerHTML = `<img src="${picUrl}">
  <div class="details">
    <h2 class="summary-title">${title}</h2>
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
