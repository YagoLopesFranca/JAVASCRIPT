function carregar() {
  let data = new Date();
  let horas = data.getHours();
  let msg = document.querySelector("#msg");
  let img = document.querySelector("#img");
  msg.innerHTML = `Agora as horas são ${horas} horas`;
  if (horas >= 0 && horas < 12) {
    img.src = "manha..png";
    document.body.style.background = "#f5d5a4";
  } else if (horas >= 12 && horas < 18) {
    img.src = "tarde..png";
    document.body.style.background = "#925d67";
  } else {
    img.src = "noite..png";
    document.body.style.background = "#001829";
  }
}
