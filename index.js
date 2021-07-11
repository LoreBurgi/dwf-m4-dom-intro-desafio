const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const queryUl = document.querySelectorAll(".lista li");
  const listaEl = document.querySelector(".lista");
  queryUl.forEach((element) => {
    element.remove();
  });

  cosasQueAprendimos.forEach((element) => {
    const newList = document.createElement("li");
    newList.textContent = element.tema;
    newList.classList.add(element.class || "item");
    console.log(newList);
    listaEl.appendChild(newList);
  });
}

main();
