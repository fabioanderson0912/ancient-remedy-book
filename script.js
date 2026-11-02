document.addEventListener("DOMContentLoaded", () => {
            
    // 1. ANIMAÇÕES DE SCROLL (Fade In & Slide Up)
    // Configura o IntersectionObserver para observar os elementos
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Ativa quando 15% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que faz o elemento aparecer
                entry.target.classList.add('is-visible');
                // Para de observar depois que já apareceu (anima apenas uma vez)
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos com a classe 'animate-on-scroll' e os observa
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));


    // 2. CRONÔMETRO REGRESSIVO (Countdown Timer)
    // Define o tempo inicial: 14 minutos e 59 segundos
    let timeInSeconds = (14 * 60) + 59;
    
    const minElement = document.getElementById('timer-minutes');
    const secElement = document.getElementById('timer-seconds');
    
    if (minElement && secElement) {
        const timerInterval = setInterval(() => {
            // Diminui 1 segundo
            timeInSeconds--;
            
            // Se chegar a zero, para o cronômetro
            if (timeInSeconds <= 0) {
                clearInterval(timerInterval);
                timeInSeconds = 0;
            }
            
            // Calcula minutos e segundos restantes
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;
            
            // Atualiza o HTML (adicionando o zero na frente se for menor que 10)
            minElement.textContent = minutes < 10 ? '0' + minutes : minutes;
            secElement.textContent = seconds < 10 ? '0' + seconds : seconds;
            
        }, 1000); // Executa a cada 1000 milissegundos (1 segundo)
    }
});