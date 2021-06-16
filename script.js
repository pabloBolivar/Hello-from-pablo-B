let j = 0;
let se5AObjSel = { divTp: "" };
let se5Array = [
  (langObj1 = {
    divTp: "button-text1 lang-pse2",
    i: 0,
    tpClas: document.getElementsByClassName("button-text1"),
    contClas: document.getElementsByClassName("select-lang")[0],
  }),
  (langObj2 = {
    divTp: "button-text2 lang-pse2",
    i: 0,
    tpClas: document.getElementsByClassName("button-text2"),
    contClas: document.getElementsByClassName("select-lang")[1],
  }),
  (se5obj1 = {
    divTp: "se5-q1 margin-block-despl",
    i: 0,
    tpClas: document.getElementsByClassName("se5-q1"),
    contClas: document.getElementsByClassName("que-es-content")[0],
  }),
  (se5obj2 = {
    divTp: "se5-q2 margin-block-despl",
    i: 0,
    tpClas: document.getElementsByClassName("se5-q2"),
    contClas: document.getElementsByClassName("cuanto-cuesta-content")[0],
  }),
  (se5obj3 = {
    divTp: "se5-q3 margin-block-despl",
    i: 0,
    tpClas: document.getElementsByClassName("se5-q3"),
    contClas: document.getElementsByClassName("donde-ver-content")[0],
  }),
  (se5obj4 = {
    divTp: "se5-q4 margin-block-despl",
    i: 0,
    tpClas: document.getElementsByClassName("se5-q4"),
    contClas: document.getElementsByClassName("como-cancelo-content")[0],
  }),
  (se5obj5 = {
    divTp: "se5-q5 margin-block-despl",
    i: 0,
    tpClas: document.getElementsByClassName("se5-q5"),
    contClas: document.getElementsByClassName("que-ofrece-content")[0],
  }),
];

function mostrarMenu(obj) {
  /* Llevaría obj en el argumento aquí y this en el argumento del html.
  ele5[0].setAttribute("men-despl-icon", 45);
  pse5 = window.getComputedStyle(ele5[0], ":after")("se5-q1::after"); */
  let casoClase = obj.getAttribute("class");
  if (casoClase === se5AObjSel.divTp) {
    for (j = 0; j < se5Array.length; j++) {
      ocultarMenu(se5Array[j]);
    }
  } else {
    se5Array.forEach(ocultarMenu);
    casoClase;
    switch (casoClase) {
      case "button-text1 lang-pse1":
        se5AObjSel = se5Array[0];
        se5AObjSel.i += 1;
        break;
      case "button-text2 lang-pse1":
        se5AObjSel = se5Array[1];
        se5AObjSel.i += 1;
        break;
      case "se5-q1 sect-5-tp":
        se5AObjSel = se5Array[2];
        se5AObjSel.i += 1;
        break;
      case "se5-q2 sect-5-tp":
        se5AObjSel = se5Array[3];
        se5AObjSel.i += 1;
        break;
      case "se5-q3 sect-5-tp":
        se5AObjSel = se5Array[4];
        se5AObjSel.i += 1;
        break;
      case "se5-q4 sect-5-tp":
        se5AObjSel = se5Array[5];
        se5AObjSel.i += 1;
        break;
      case "se5-q5 sect-5-tp":
        se5AObjSel = se5Array[6];
        se5AObjSel.i += 1;
        break;
      default:
        se5AObjSel = {};
        break;
    }
    if (se5AObjSel == se5Array[0] || se5AObjSel == se5Array[1]) {
      se5AObjSel.tpClas[0].classList.replace("lang-pse1", "lang-pse2");
    } else {
      // men5[0].style.display = 'block' (agrega un style en el html, no en el css)
      se5AObjSel.tpClas[0].classList.replace("sect-5-tp", "margin-block-despl");
    }
    se5AObjSel.contClas.classList.replace(
      "menu-ocult-content",
      "menu-despl-content"
    );
  }
}

function ocultarMenu(se5obj) {
  if (se5obj.i === 1) {
    if (se5AObjSel == se5Array[0] || se5AObjSel == se5Array[1]) {
      se5AObjSel.tpClas[0].classList.replace("lang-pse2", "lang-pse1");
    } else {
      se5AObjSel.tpClas[0].classList.replace("margin-block-despl", "sect-5-tp");
    }
    se5obj.contClas.classList.replace(
      "menu-despl-content",
      "menu-ocult-content"
    );
    se5obj.i -= 1;
  }
}

function idiomaEscogido(iObj) {
  let casoIdioma = iObj.getAttribute("class");
  switch (casoIdioma) {
    case "idio-es":
      document.getElementsByClassName("lang-pse1")[0].innerHTML = "Español";
      document.getElementsByClassName("lang-pse2")[0].innerHTML = "Español";
      break;
    case "en-lang":
      document.getElementsByClassName("lang-pse1")[0].innerHTML = "English";
      document.getElementsByClassName("lang-pse2")[0].innerHTML = "English";
      break;
    default:
      document.getElementsByClassName("lang-pse1")[0].innerHTML = "Español";
      document.getElementsByClassName("lang-pse2")[0].innerHTML = "Español";
      break;
  }
  for (j = 0; j < se5Array.length; j++) {
    ocultarMenu(se5Array[j]);
  }
}
