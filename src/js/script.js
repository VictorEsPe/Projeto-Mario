const video = document.getElementById("video");
const linkVideo = video.src

function abrirModal() {
  const modal = document.getElementById("modal")

  modal.classList.toggle("aberto");

  video.setAttribute("src", linkVideo)
}

function fecharModal() {
  const botaoFecharModal = document.getElementById("modal");

  botaoFecharModal.classList.toggle("aberto");

  video.setAttribute("src", "");
}