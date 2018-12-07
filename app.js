"use strict";
window.onload = function() {
  let cajaComentarios = document.getElementById("comentarios");
  let cajaSidebar = document.getElementById("sidebar");
  let paginationSection = document.getElementById("paginacion");

  function traerDatosApi(url, dondeMostrar, classCaja, format) {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        impDatos(data, dondeMostrar, classCaja, format);
      });
  }

  function impDatos(datos, dondeMostrar, classCaja, format) {
      
    for (let i = 0; i < datos.length; i++) {
      let caja = document.createElement("div");
      caja.classList.add(classCaja);
      dondeMostrar.appendChild(caja);
      format(dondeMostrar, datos, i );
    }

    
    
  }

  //formatos
  function formatComent(cajaContenedora, comentario, index) {
    let titulo = document.createElement("h4");
    titulo.innerHTML = comentario[index].name;
    cajaContenedora.appendChild(titulo);
    paginacion(10, comentario)
  }

  function formatUser(cajaContenedora, usuario, index) {
    let username = document.createElement("h4");
    let mail = document.createElement("p");
    mail.innerHTML = usuario[index].email;
    username.innerHTML = usuario[index].username;
    cajaContenedora.appendChild(username);
    cajaContenedora.appendChild(mail);
  }

  //peticiones REST
  traerDatosApi(
    "https://jsonplaceholder.typicode.com/comments",
    cajaComentarios,
    "comentario",
    formatComent
  );
  traerDatosApi(
    "https://jsonplaceholder.typicode.com/users",
    cajaSidebar,
    "usuario",
    formatUser
  );
};

//paginacion
function paginacion(resultados, array){
let resultadosxPagina = resultados;
let paginas = array.length/resultadosxPagina;
console.log(paginas);
// for (let i = 0; i < resultados; i++) {
//     let caja = document.createElement("div");
//     caja.classList.add(classCaja);
//     dondeMostrar.appendChild(caja);
//     format(caja, array, i);

//   }

}


