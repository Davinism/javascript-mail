const Router = require('./router.js');
const Inbox = require('./Inbox.js');

let routes = {};
routes.inbox = Inbox;

document.addEventListener("DOMContentLoaded", (e) => {
  let arr = Array.from(document.querySelectorAll('.sidebar-nav li'));
  let content = document.querySelector('.content');
  new Router(content, routes);

  arr.forEach( el => {
    el.addEventListener('click', () => {
      window.location.hash = el.innerText.toLowerCase();
    }, false);
  });


});
