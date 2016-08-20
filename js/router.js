function Router(node, routes) {
  this.node = node;
  this.routes = routes;

  this.start();
}

Router.prototype.start = function () {
  const thisRouter = this;
  window.addEventListener("hashchange", (e) => {
    thisRouter.render();
  });
};

Router.prototype.render = function () {
  this.node.innerHTML = "";
  let p = document.createElement("p");
  p.innerHTML = this.activeRoute();
  this.node.appendChild(p);

  let comp = this.activeRoute();

  if (!comp) {
    this.node.innerHTML = "";
  } else {
    this.node.innerHTML = "";
    this.node.appendChild(comp.render());
  }
};

Router.prototype.activeRoute = function () {
  let hash = window.location.hash;
  return this.routes[hash.slice(1)];
};

module.exports = Router;
