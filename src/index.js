import urlApi from './Constance.js';
import './style.css';

const URL = urlApi();
const form = document.querySelector('form');
const name = document.querySelector('input[type="text"]');
const score = document.querySelector('input[type="number"]');
const p = document.querySelector('.square');
const btn = document.querySelector('.btn');
const gameData = {
  id: '',
};

const update = async () => {
  await fetch(`${URL}games/${gameData.id}/scores/`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log('url:', `${URL}games/${gameData.id}/scores/`);
      // console.log(data);
      let content = '';
      data.result.map((el) => {
        content += `<span class="score">${el.user}: ${el.score}</span>`;
        return '';
      });
      p.innerHTML = content;
    });
};

fetch(`${URL}games/`,
  {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ name: 'start war game' }),
    // mode: 'no-cors',
  })
  .then((res) => res.json())
  .then((data) => {
    const tmp = data.result.split(' ');
    const id = tmp[tmp.length - 2];
    gameData.id = id;
  });

const create = async (nom, scoreUser) => {
  const retour = await fetch(`${URL}games/${gameData.id}/scores/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ user: nom, score: scoreUser }),
  });
  return retour.json();
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (score.value && name.value) {
    const value = parseInt(score.value, 10);
    create(name.value, value);
    score.value = '';
    name.value = '';
    await update();
  }
});

btn.addEventListener('click', async () => {
  await update();
});
