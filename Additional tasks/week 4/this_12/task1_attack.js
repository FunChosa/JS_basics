const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3, 

    improveArmy(){ //прибавляет к каждому числовому значению объекта attacker по 5 единиц
        for (let key in this){
            if(!isNaN(this[key])){
                this[key] += 5;
            }
        }
     },
    
    checkChancesToWin(defenderObject){ // defenderObject - это защищающийся замок
        let chance = 0;
        for (let key in this){
            if(!isNaN(this[key]) && this[key] > defenderObject[key])
                chance++;
            }
        return [chance,Object.keys(defender).length];
     },
     
    attack(defenderObject){
        const ourArmyChances = this.checkChancesToWin(defenderObject);
        
        if (ourArmyChances[0]/ourArmyChances[1] < ourArmyChances[1]/ourArmyChances[1]*0.7){
            this.improveArmy();
            alert(`
            Наши шансы равны ${ourArmyChances[0]}/${ourArmyChances[1]}. Необходимо укрепление!`)
        }else{
            alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
        }
     }
 }
 
 const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
 }


 attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
 attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
 attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!