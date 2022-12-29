function startGame(heroPlayer, enemyPlayer){

    let winner = {} //создаем пустой объект победителя
     while(enemyPlayer["health"] > 0 && heroPlayer["health"] > 0){ //пока у обоих игроков хп больше 0, продолжаем атаковать
         (getRandomNumberInRange(0,1) === 1)
             ? heat(heroPlayer)
             : heat(enemyPlayer)
     }
 //проверяем у кого осталось хп больше 0 и присваиваем все значения в объект победителя
    (enemyPlayer["health"] > 0)
       ? winner = enemyPlayer
       : winner = heroPlayer
     
    return alert(`${winner.name} победил! У него осталось ${winner.health} здоровья`)
}
 
 function getRandomNumberInRange(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 
 const heat = (player) => player.health -= 10 //вспомогательная функция для атаки персонажа
 
 const hero = {
     name: 'Batman',
     health: 100,
  };
  const enemy = {
     name: 'Joker',
     health: 100,
  };
  
  startGame(hero, enemy);

  /*
  const hero = {
  name: "Batman",
  health: 100,
  heatEnemy: (enemy) => (enemy.health -= 10)
};

const enemy = {
  name: "Joker",
  health: 100,
  heatHero: (hero) => (hero.health -= 10)
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(heroPlayer, enemyPlayer) {
  while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
    const randomHeatIndex = getRandomNumberInRange(0, 1);
    if (randomHeatIndex === 0) {
      heroPlayer.heatEnemy(enemyPlayer);
      if (enemyPlayer.health <= 0) {
        break;
      }
    } else {
      enemyPlayer.heatHero(heroPlayer);
      if (heroPlayer.health <= 0) {
        break;
      }
    }
  }

  if (heroPlayer.health <= 0) {
    alert(
      `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`
    );
  } else {
    alert(
      `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`
    );
  }
}

startGame(hero, enemy);

  */