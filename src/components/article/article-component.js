import './article-component.scss';
import { makeTag } from 'components/tag/tag-component';


export const makeArticle = ({
  title, author, tags, brief, picUrl, content
} = {
  title: 'Title', author: 'Author', tags: ['Tag 1', 'Tag 2'], brief: 'brief', content: 'Article content'
}) => {
  const article = document.createElement('div');
  article.classList.add('article');
  article.innerHTML = `
    <img src="${picUrl}">
    <h1 class="title">${title}</h1>
    <div class="top-details">
        <div class="brief">${brief}</div>
        <div class="tags" id="article-tags"></div>
    </div>
    <div class="article-content">${content}</div>
    <div class="bottom-details">
        <div class="author">${author}</author>
    </div>`;
  const tagsDiv = document.getElementById('articleTags');
  tags.forEach((tag) => {
    tagsDiv.appendChild(makeTag(tag));
  });
  return article;
};

export default makeArticle;
