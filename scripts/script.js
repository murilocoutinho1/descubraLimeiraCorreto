function toggleCard(cartao)
{
    const extra = cartao.querySelector('.extra');
    extra.style.display = (extra.style.display === 'block') ? 'none' : 'block';
}

const curiosidades = [
    "Limeira é a capital da Laranja.",
    "Limeira enviou cerca de 300 voluntários para a Revolução Constitucionalista de 1932.",
    "Uma lenda popular conta que o nome da cidade surgiu de um 'Rancho de Limeira', onde um frei foi sepultado com limas que ninguém queria comer.",
    "Há uma lenda que diz que a coxinha foi inventada em Limeira.",
];

function gerarCuriosidade()
{
    const randomIndex = Math.floor(Math.random() * curiosidades.length);
    const curiosidade = curiosidades[randomIndex];
    document.getElementById("texto-curiosidade").textContent = curiosidade;
}
