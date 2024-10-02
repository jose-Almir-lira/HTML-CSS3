const slide = document.getElementById('slide');
const thumbnailsContainer = document.getElementById('thumbnails');
const images = ['Davi.jpg','Diego.jpg','Kaka.jpg','Ronaldo-teclado.jpg']; // Adicione os nomes das imagens aqui

// Lista de imagens (adapte conforme suas imagens)
const imageNames = ['Davi.jpg','Diego.jpg','Kaka.jpg','Ronaldo-teclado.jpg']; // Adicione mais imagens aqui

imageNames.forEach(name => {
    const img = document.createElement('img');
    img.src = `${name}`;
    img.onclick = () => {
        slide.src = img.src;
    };
    thumbnailsContainer.appendChild(img);
});

// Exibe a primeira imagem no slideshow
if (imageNames.length > 0) {
    slide.src = `${imageNames[0]}`;
}