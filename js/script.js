const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherBox=document.querySelector('.weather-box');
const weatherDetails=document.querySelector('.weather-details');
const erro=document.querySelector('.semLocalizacao');

search.addEventListener('click', ()=> {
    const APIKey='98740ebc0d63bc0f8ba70090e5a091';
    const city= document.querySelector('.search-box input').value;

    if (city=='')
        return;
    fetch(``).then(response=> response.json()).then(json=>{
        const image=document.querySelector('.weather-box img');
        const temperature=document.querySelector('weather-box .temperature');
        const description=document.querySelector('weather-box .description');
        const humidity=document.querySelector('weather-details .humidity span');
        const wind=document.querySelector('weather-details .wind span');

        switch (json.weather[0].main){
            case 'Clear':
                image.src ='images/tempo/limpo.png';
            break;
            case 'Rain':
                image.src ='images/tempo/chuva.png';
            break;
            case 'Snow':
                image.src ='images/tempo/nevasca.png';
            break;

            case 'Mist':
                image.src = 'images/tempo/neblina.png';
            break;
            default:
                image.src = 'images/tempo/nuvem';
        }

    })
})
if (!ce || cep.length < 8) {
    resultadoCep.textContent = `É obrigatório informar um CEP!`;
    return;
} else {
    resultadoCep.textContent = "";
    const dadosCep = await obtemCep(cep);
    if (dadosCep.erro) {
        resultadoCep.textContent = "Erro ao consultar o CEP informado";
        return;
    }
}