const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nomeConvidado = event.target.nome.value;
  const novoConvidado = document.createElement('li');
  novoConvidado.setAttribute('class', 'guest');
  novoConvidado.textContent = nomeConvidado;
  ul.appendChild(novoConvidado);
});
