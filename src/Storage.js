export default class Storage {
    static id ='';

    static load = (gameData = {}) => {
      if (localStorage.getItem('id')) gameData.id = localStorage.getItem('id');
      return gameData;
    }

    static save = (gameData) => {
      if (gameData.id) localStorage.setItem('id', gameData.id);
    }
}