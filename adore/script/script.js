const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

let elemento = document.getElementById('gallery');
let totalImagens = 54; // Ajuste conforme necessário

for (let i = 1; i <= totalImagens; i++) {
    let novoElemento = document.createElement('img');
    
    // Definindo os atributos das imagens
    novoElemento.src = `imagens/imagensP/img (${i}).jpg`;
    novoElemento.setAttribute("data-full", `imagens/imagensG/img (${i}).JPG`); // Ajuste se as imagens forem diferentes
    novoElemento.alt = `Imagem ${i}`;
    
    // Adicionando o evento de clique para abrir o modal
    novoElemento.addEventListener('click', () => {
        openModal(novoElemento.getAttribute("data-full"));
        currentIndex = i - 1; // Atualiza o índice atual
    });
    
    elemento.appendChild(novoElemento);
}

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

function openModal(src) {
    modal.style.display = 'flex';
    modalImg.src = src;
}

function closeModal() {
    modal.style.display = 'none';
}

function showPrev() {
    currentIndex = (currentIndex - 1 + totalImagens) % totalImagens;
    modalImg.src = `imagens/imagensG/img (${currentIndex + 1}).JPG`; // Atualiza a imagem
}

function showNext() {
    currentIndex = (currentIndex + 1) % totalImagens;
    modalImg.src = `imagens/imagensG/img (${currentIndex + 1}).JPG`; // Atualiza a imagem
}
