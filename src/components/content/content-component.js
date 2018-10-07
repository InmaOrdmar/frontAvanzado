import './content-component.scss';
import { makeSummary } from 'components/summary/summary-component';

export const makeContent = () => {
  const content = document.createElement('div');
  content.classList.add('content');
  fetch('http://localhost:8000/articles').then(response => response.json()).then((json) => {
    json.forEach((article) => {
      const summaryData = {
        title: article.title,
        author: article.author,
        brief: article.brief,
        picUrl: article.picUrl,
        commentCount: article.comments.length
      };
      content.appendChild(makeSummary(summaryData));
    });
  }).catch(error => console.log('Error: ', error)); // eslint-disable-line
  return content;
};

export default { makeContent };
