function safInputFocus() {
  document.documentElement.classList.add('saf-searching');
  var inp = document.querySelector('header input[type="search"]');
  inp.select();
  var main = document.querySelector('main');
  main._onClickHandler = main.addEventListener('click', safInputDismiss);
}


function safInputBlur() {
  document.documentElement.classList.remove('saf-searching');
  var main = document.querySelector('main');
  main.removeEventListener('click', main._onClickHandler);
}


function safInputDismiss() {
  document.querySelector('header input[type="search"]').blur();
}
