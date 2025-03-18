function reproducirCancion(audioSrc, letra) {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    audioSource.src = audioSrc;
    audioPlayer.load();
    audioPlayer.play();

    alert(`Reproduciendo: ${audioSrc}\n\nLetra:\n${letra}`);
}

function mostrarImagen(src, captionText) {
    const modal = document.getElementById('modal');
    const imgModal = document.getElementById('imgModal');
    const caption = document.getElementById('caption');

    imgModal.src = src;
    caption.textContent = captionText;
    modal.style.display = 'block';

    const closeModal = document.getElementsByClassName('close')[0];
    closeModal.onclick = function() {
        modal.style.display = 'none';
    }
}
