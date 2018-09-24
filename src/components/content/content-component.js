import './content-component.scss';
import data from 'data/db.json';
import { makeSummary } from 'components/summary/summary-component';

export const makeContent = () => {
  const content = document.createElement('div');
  content.classList.add('content');
  data.articles.forEach((article) => {
    const summaryData = {
      title: article.title,
      author: article.author,
      brief: article.brief,
      picUrl: article.picUrl,
      commentCount: article.comments.length
    };
    content.appendChild(makeSummary(summaryData));
  });
  return content;
};

export default { makeContent };
