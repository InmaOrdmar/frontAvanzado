import './account-actions-component.scss';

export const makeAccountActions = () => {
  const accountActions = document.createElement('div');
  accountActions.classList.add('account-actions');
  accountActions.innerHTML = '<a class="login-button" href="">Login</a> <a class="register-button" href="">Register</a>';
  return accountActions;
};

export default { makeAccountActions };
