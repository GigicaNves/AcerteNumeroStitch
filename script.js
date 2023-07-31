let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const Img = document.querySelector(".estados");
const Palpites = document.querySelector(".palpites");
const UltimoResul = document.querySelector(".ultimoResul");
const BaixoAlto = document.querySelector(".baixoAlto");

const PalpiteEnviar = document.querySelector(".palpiteEnviar");
const CampoPalpite = document.querySelector(".campoPalpite");
const divreinicio = document.querySelector(".btnReinicio");

var contagemPalpites = 1;
var botaoReinicio;

function conferirPalpite() {
  var PalpiteUsuario = Number(CampoPalpite.value);
  if (contagemPalpites === 1) {
    Palpites.textContent = "Palpites anteriores: ";
  }
  Palpites.textContent += PalpiteUsuario + " ";

  if (PalpiteUsuario === numeroAleatorio) {
    Img.src = "./assets/stitch.vencedor.gif";
    UltimoResul.textContent = "Parabéns! Você acertou!";
    UltimoResul.style.color = "green";
    BaixoAlto.textContent = `O número em questão era: ${numeroAleatorio}`;
    configFimDeJogo();
  } else if (contagemPalpites === 10) {
    Img.src = "./assets/stitch.perdedor.gif";
    UltimoResul.textContent = "!!!FIM DE JOGO!!!";
    UltimoResul.style.color = "red";
    BaixoAlto.textContent = "Você perdeu! Tente novamente...";
    configFimDeJogo();
  } else {
    Img.src = "./assets/stitch.errou.gif";
    UltimoResul.textContent = "Errado!";
    UltimoResul.style.color = "red";
    if (PalpiteUsuario < numeroAleatorio) {
      BaixoAlto.textContent = "Seu palpite está muito baixo!";
    } else if (PalpiteUsuario > numeroAleatorio) {
      BaixoAlto.textContent = "Seu palpite está muito alto!";
    }
  }

  contagemPalpites++;
  CampoPalpite.value = "";
  CampoPalpite.focus();
}

function configFimDeJogo() {
  CampoPalpite.disabled = true;
  PalpiteEnviar.disabled = true;
  botaoReinicio = document.createElement("button");
  botaoReinicio.textContent = "Iniciar novo jogo";
  divreinicio.appendChild(botaoReinicio);
  botaoReinicio.addEventListener("click", reiniciarJogo);
  botaoReinicio.classList.add("reiniciar");
}

function reiniciarJogo() {
  contagemPalpites = 1;
  Img.src = "./assets/stitch.gif";
  var ReiniciarParas = document.querySelectorAll(".resultado p");
  for (var i = 0; i < ReiniciarParas.length; i++) {
    ReiniciarParas[i].textContent = "";
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  CampoPalpite.disabled = false;
  PalpiteEnviar.disabled = false;
  CampoPalpite.value = "";
  CampoPalpite.focus();

  UltimoResul.style.backgroundColor = "white";

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
