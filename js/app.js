document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento que será executado quando o DOM estiver completamente carregado.
    const swiper = new Swiper('.swiper', {
        // Cria uma nova instância do Swiper (carrossel), associada ao contêiner com a classe 'swiper'.
        direction: 'horizontal',
        // Define a direção de transição dos slides como horizontal.
        loop: false,
        // Define que o carrossel não irá repetir os slides (não fará looping).

        pagination: {
            el: '.swiper-pagination'
            // Configura a paginação (indicadores de slide) utilizando o seletor '.swiper-pagination'.
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            // Define os botões de navegação para avançar ('.swiper-button-next') e retroceder ('.swiper-button-prev') os slides.
        }
    });

    document.addEventListener('keydown', function (event) {
        // Adiciona um listener para eventos de teclado.
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
            // Se a tecla pressionada for a seta para a esquerda, move para o slide anterior.
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext();
            // Se a tecla pressionada for a seta para a direita, move para o próximo slide.
        }
    });

    const gameInput = document.getElementById('gameInput');
    // Seleciona o elemento de entrada de texto com o ID 'gameInput'.

    gameInput.addEventListener('keypress', function (event){
        // Adiciona um evento que será disparado quando uma tecla for pressionada no campo de entrada.
        if(event.key === 'Enter'){
            // Verifica se a tecla pressionada foi 'Enter'.
            let searchGame = gameInput.value.trim().toUpperCase();
            // Obtém o valor do campo de entrada, remove espaços em branco nas extremidades e converte para maiúsculas.

            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0);
                    // Se o valor digitado for 'MARIO', move para o primeiro slide (índice 0).
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    // Se o valor digitado for 'POKEMON', move para o segundo slide (índice 1).
                    break;
                default:
                    alert('Jogo não foi encontrado');
                    // Se o valor não corresponder a nenhum dos casos, exibe um alerta informando que o jogo não foi encontrado.
                    break;
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Código Swiper existente...

    // Adiciona lógica dos modais
    const marioTitle = document.querySelector('#slide-1 .banner h1');
    const pokemonTitle = document.querySelector('#slide-2 .banner h1');
    const marioModal = document.getElementById('mario-modal');
    const pokemonModal = document.getElementById('pokemon-modal');
    
    const marioCLoseBtn = marioModal.querySelector('.close');
    const pokemonCloseBtn = pokemonModal.querySelector('.close');

    // Funções para abrir modais
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // Funções para fechar modais
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Eventos para o Mario
    marioTitle.addEventListener('click', () => openModal(marioModal));
    marioCLoseBtn.addEventListener('click', () => closeModal(marioModal));

    // Eventos para o Pokemon
    pokemonTitle.addEventListener('click', () => openModal(pokemonModal));
    pokemonCloseBtn.addEventListener('click', () => closeModal(pokemonModal));

    // Fechar modal ao clicar fora
    window.addEventListener('click', (event) => {
        if (event.target === marioModal) {
            closeModal(marioModal);
        }
        if (event.target === pokemonModal) {
            closeModal(pokemonModal);
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleTitles = document.querySelectorAll('.toggle-title');

    toggleTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
