import 'styles/main.scss';
import { makeHeader } from 'components/header/header-component';
import { makeArticle } from 'components/article/article-component';
import { makeFooter } from 'components/footer/footer-component';

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(makeHeader({ title: 'Large' }));
  document.body.appendChild(makeArticle({}));
  document.body.appendChild(makeFooter({ title: 'Large' }));
});
