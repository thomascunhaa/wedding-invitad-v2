// Data do casamento
const weddingDate = new Date('2024-07-13T00:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const difference = weddingDate - currentDate;

    if (difference <= 0) {
        // Casamento já ocorreu
        document.getElementById('countdown').innerHTML = 'O casamento já ocorreu!';
    } else {
        // Calcular dias, horas, minutos e segundos restantes
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Exibir contagem regressiva
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }
}

// Atualizar a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Atualizar a contagem regressiva assim que a página carregar
updateCountdown();
