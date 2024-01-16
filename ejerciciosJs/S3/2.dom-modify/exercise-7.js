let eliminados$$ = document.querySelectorAll(".fn-remove-me");

eliminados$$.forEach((elimino) => {
  elimino.parentNode.removeChild(elimino);
});
