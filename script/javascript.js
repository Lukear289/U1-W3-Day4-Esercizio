console.log('HELLO');

const tabellone = function (num) {
  const numcelle = 90;
};
const tabellone = document.createElement('table');

let numero = 1;

for (let i = 0; i < numCelle / 10; i++) {
  const riga = document.createElement('tr');

  for (let j = 0; j < 10; j++) {
    const cella = document.createElement('td');
    cella.textContent = numero;
    riga.appendChild(cella);
    numero++;
  }

  tabellone.appendChild(riga);

  document.body.appendChild(tabellone);
}

creaTabellone();
