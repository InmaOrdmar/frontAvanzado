import 'styles/main.scss';
import { makeHeader } from 'components/header/header-component';
import { makeContent } from 'components/content/content-component';
import { makeFooter } from 'components/footer/footer-component';

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(makeHeader({ title: 'Large' }));
  document.body.appendChild(makeContent());
  document.body.appendChild(makeFooter({ title: 'Large' }));
});
