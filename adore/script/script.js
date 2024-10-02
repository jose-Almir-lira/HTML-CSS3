const thumbnailsContainer = document.getElementById('thumbnails');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const close = document.getElementById('close');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const imageNames = ['Ronaldo-teclado.JPG','Diego.JPG','Davi.JPG','Kaka.JPG']; // Adicione mais imagens aqui
let currentIndex = 0;

// Cria miniaturas
imageNames.forEach((name, index) => {
    const img = document.createElement('img');
    img.src = `imagens/${name}`;
    img.onclick = () => openModal(index);
    thumbnailsContainer.appendChild(img);
});

// Abre o modal
function openModal(index) {
    currentIndex = index;
    modalImage.src = `imagens/${imageNames[currentIndex]}`;
    modal.style.display = 'flex';
}

// Fecha o modal
close.onclick = () => {
    modal.style.display = 'none';
};

// Navega para a imagem anterior
prev.onclick = () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageNames.length - 1;
    modalImage.src = `imagens/${imageNames[currentIndex]}`;
};

// Navega para a próxima imagem
next.onclick = () => {
    currentIndex = (currentIndex < imageNames.length - 1) ? currentIndex + 1 : 0;
    modalImage.src = `imagens/${imageNames[currentIndex]}`;
};

// Fecha o modal ao clicar fora da imagem
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
