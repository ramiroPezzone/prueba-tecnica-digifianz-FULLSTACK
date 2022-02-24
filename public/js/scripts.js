const todoElDocumento = document.querySelector("*");
const capaOpaca = document.querySelector(".capa-opaca-oculta");

// Despliegue/ocultamiento menú oculto
if (document.querySelector(".menu-hamb")) {
  const btnMenuHamb = document.querySelector(".menu-hamb");
  const btnMenuHambClose = document.querySelector(".btn-cierre-menu");
  const navOptions = document.querySelector(".nav-options");
  const aOptions = document.querySelectorAll(".a-option");

  btnMenuHamb.addEventListener("click", () => {
    navOptions.classList.add("nav-options-revealed");
    capaOpaca.classList.add("capa-opaca-revealed");
    todoElDocumento.style.overflowY = "hidden";
  });
  btnMenuHambClose.addEventListener("click", () => {
    navOptions.classList.remove("nav-options-revealed");
    capaOpaca.classList.remove("capa-opaca-revealed");
    todoElDocumento.style.overflowY = "initial";
  });
  aOptions.forEach((opt) => {
    opt.addEventListener("click", () => {
      navOptions.classList.remove("nav-options-revealed");
      capaOpaca.classList.remove("capa-opaca-revealed");
      todoElDocumento.style.overflowY = "initial";
    });
  });
}

// Form oculto
if (document.querySelector(".contenedor-form-hidden")) {
  const btnLg = document.querySelector(".btn-lg");
  const formOculto = document.querySelector(".contenedor-form-hidden");
  const cruzCierreForm = document.querySelector(".cruz-cierre-form");

  btnLg.addEventListener("click", () => {
    formOculto.classList.add("contenedor-form-revealed");
    capaOpaca.classList.add("capa-opaca-revealed");
    todoElDocumento.style.overflowY = "hidden";
  });

  cruzCierreForm.addEventListener("click", () => {
    formOculto.classList.remove("contenedor-form-revealed");
    capaOpaca.classList.remove("capa-opaca-revealed");
    todoElDocumento.style.overflowY = "initial";
  });
}

// Confirmación envío formulario
if (document.querySelector(".btn-enviar")) {
  const btnEnviar = document.querySelectorAll(".btn-enviar");
  const formulario = document.querySelectorAll(".form-contacto");
  const ok = document.querySelector("#ok");

  btnEnviar.forEach((btn) => {
    btn.addEventListener("click", () => {
      formulario.forEach((form) => {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          capa.style.display = "block";
        });
      });
    });

    ok.addEventListener("click", (e) => {
      capa.style.display = "none";
      document.forms["form-de-contacto"].submit();
    });
  });
}
