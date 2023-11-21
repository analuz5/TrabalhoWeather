// Selecionando elementos HTML usando classes para interação
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const erro = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

// Adicionando um ouvinte de evento para o botão de pesquisa
search.addEventListener('click', () => {
    // Definindo uma chave de API vazia 
    const APIKey = '1d3b144a86fbb1a932dd52baa5059d9b';
    // Obtendo o valor inserido pelo usuário na caixa de pesquisa
    const city = document.querySelector('.search-box input').value;

    // Verificando se o campo da cidade está vazio
    if (city == '')
        return;

    // Fazendo uma solicitação fetch para a API do tempo com base na cidade fornecida
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`).then(response => response.json()).then(json => {

        // Verificando se a cidade não foi encontrada
        if (json.cod == "404") {
            // Configurando a exibição para informar que a cidade não foi encontrada
            cityHide.textContent = city;
            container.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            erro.classList.add('active');
            return;
        }

        // Configurando a exibição para mostrar a previsão do tempo
        container.style.height = '555px';
        weatherBox.classList.add('active');
        weatherDetails.classList.add('active');
        erro.classList.remove('active');

        // Selecionando elementos HTML para exibir informações específicas do clima
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        // Verificando o tipo de clima e atribuindo a imagem correspondente
        switch (json.weather[0].main) {
            case 'Limpo':
                image.src = "images/tempo/limpo.png";
                break;
            case 'Chuva':
                image.src = 'images/tempo/chuva.png';
                break;
            case 'Nevasca':
                image.src = 'images/tempo/nevasca.png';
                break;
            case 'Neblina':
                image.src = 'images/tempo/neblina.png';
                break;
            default:
                image.src = 'images/tempo/limpo.png';
        }

        // Atualizando as informações de temperatura, descrição, umidade e velocidade do vento
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        // Clonando elementos de informações meteorológicas e adicionando classes e IDs
        const infoWeather = document.querySelector('info-weather');
        const infoHumidity = document.querySelector('info-humidity');
        const infoWind = document.querySelector('info-wind');

        const elCloneInfoWeather = infoWeather.cloneNode(true);
        const elCloneInfoHumidity = infoHumidity.cloneNode(true);
        const elCloneInfoWind = infoWind.cloneNode(true);

        elCloneInfoWeather.id = 'clone-info-weather';
        elCloneInfoWeather.classList.add('active-clone');

        elCloneInfoHumidity.id = 'clone-info-humidity';
        elCloneInfoHumidity.classList.add('active-clone');

        elCloneInfoWind.id = 'clone-info-wind';
        elCloneInfoWind.classList.add('active-clone');

        // Adicionando clones após um atraso para criar um efeito visual
        setTimeout(() => {
            infoWeather.insertAdjacentElement('afterend', elCloneInfoWeather);
            infoHumidity.insertAdjacentElement('afterend', elCloneInfoHumidity);
            infoWind.insertAdjacentElement('afterend', elCloneInfoWind);
        }, 2200);

        // Selecionando clones e removendo classes e elementos após outro atraso
        const cloneInfoWeather = document.querySelectorAll('info-weather.active-clone');
        const totalCloneInfoWeather = cloneInfoWeather.length;
        const cloneInfoWeatherFirst = cloneInfoWeather[0];

        const cloneInfoHumidity = document.querySelectorAll('info-humidity.active-clone');
        const cloneInfoHumidityFirst = cloneInfoHumidity[0];

        const cloneInfoWind = document.querySelectorAll('info-wind.active-clone');
        const cloneInfoWindFirst = cloneInfoWind[0];

        if (totalCloneInfoWeather > 0) {
            cloneInfoWeatherFirst.classList.remove('active-clone');
            cloneInfoHumidityFirst.classList.remove('active-clone');
            cloneInfoWindFirst.classList.remove('active-clone');
        }

        // Removendo clones após um atraso
        setTimeout(() => {
            cloneInfoWeatherFirst.remove();
            cloneInfoHumidityFirst.remove();
            cloneInfoWindFirst.remove();
        }, 2200);
    })
})
