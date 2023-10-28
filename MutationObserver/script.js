const mutationObserver = new MutationObserver((entries) => {
  console.log(entries);
});

const parent = document.querySelector(".parent");

mutationObserver.observe(parent, { childList: true });

///7
mutationObserver.observe(parent.children[0].childNodes[0], {
  characterData: true,
  characterDataOldValue: true,
});

mutationObserver.observe(parent, {
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
});
/////
mutationObserver.disconnect();

parent.children[0].remove();
setTimeout(() => {
  parent.appendChild(document.createElement("div"));
}, 100);

mutationObserver.observe(parent, {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ["id"],
  characterData: true,
});
parent.id = "new id";
