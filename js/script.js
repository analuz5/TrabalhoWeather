const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const pesquisar=document.querySelector('.pesquisar');
const detalhes=document.querySelector('.detalhes');

search.addEventListener('click', ()=> {
    const APIKey='98740ebc0d63bc0f8ba70090e5a091';
    const cidade= document.querySelector('.pesquisar input').value;

    if (cidade=='')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${APIKey}`).then(response=> response.json()).then(json=>{
        const image=document.querySelector('.pesquisar img');
        const temperatura=document.querySelector('pesquisar .temperatura .temperatura');
        const descricao=document.querySelector('pesquisar .descricao');
        const humidade=document.querySelector('detalhes .humidade span');
        const vento=document.querySelector('.detalhes .vento span');

        switch (json.weather[0].main){
            case 'chuva':
                image.src='';
            break;
            case 'diaLimpo':
                image.src= 'imagens/vetores/chuva.svg';
            break;

            default:
                break;
        }

    })
})