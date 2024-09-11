import { Tooltip } from './tooltip';

const widget = document.querySelector('.widget');
const btn = document.querySelector('.btn');
const too = new Tooltip();

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!too.popover) {
    too.showTooltip(e.target.getAttribute('title'), e.target.getAttribute('data-content'), btn);
  } else {
    too.removeTooltip();
  }
});
