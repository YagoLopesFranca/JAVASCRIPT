function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //BOA DIA!
    img.src = "manha.png";
    document.body.style.background = "#f5d5a4";
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDe!
    img.src = "tarde.png";
    document.body.style.background = "#925d67";
  } else {
    //BOA NOITE!
    img.src = "noite.png";
    document.body.style.background = "#001829";
  }
}
