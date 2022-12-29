const footballer = {
    fullName: 'Cristiano Ronaldo',
    objAttack() {
      const attack = () => console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
        attack();
      },
    scoreGoal(sound) {
       console.log(`${this.fullName} забил гол! Вот это да!`);
       this.celebrate(sound);
    },
    celebrate(sound) {
       console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
       console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
  };
  
  const attackFunction = footballer.objAttack.bind(footballer); 
  attackFunction();
  footballer.scoreGoal.call(footballer,'Сиииии');
  footballer.goToSubstitution.apply(footballer, ['Paulo Dibala']);
  