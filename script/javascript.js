console.log('HELLO');

const tabellone = function (num) {
  const tombola = document.getElementById('tabellone');
  for (let i = 1; i <= 90; i++) {
    const casellanumeri = document.createElement('div');
    casellanumeri.classList.add('number');
    const valoreCasella = document.createElement('h3');

    valoreCasella.innerText = i + 1;
    const today = now.getdate();
    casellanumeri.appendChild(valoreCasella);
    tombola.appendChild(casellanumeri);
  }
};
