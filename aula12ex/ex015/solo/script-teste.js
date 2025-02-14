function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.querySelector("#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique se os dados esta corretos");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let gênero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "criança-menino.png");
      } else if (idade < 21) {
        img.setAttribute("src", "jovem-homem.png");
      } else if (idade < 50) {
        img.setAttribute("src", "adulto-homem.png");
      } else {
        img.setAttribute("src", "idoso-homem.png");
      }
    }
    if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "criança-menina.png");
      } else if (idade < 21) {
        img.setAttribute("src", "jovem-mulher.png");
      } else if (idade < 50) {
        img.setAttribute("src", "adulto-mulher.png");
      } else {
        img.setAttribute("src", "idoso-mulher.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos. <br>`;
    img.style.width = "200px";
    img.style.paddingTop = "10px";
    res.appendChild(img);
  }
}
