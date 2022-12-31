class CarService {

    static DefaultWorkingHours = {
        from: '9:00', 	
        till: '20:00',
      }

    constructor(name, workingHours = this.DefaultWorkingHours) {
    this.name = name;
    this.workingHours = {
        from: workingHours.from, //h:mm
        till: workingHours.till,
    };
    }

    repairCar(carName) {
        if(!carName){
            console.error('Вам необходимо указать название машины, чтобы ее отремонтировать') 
        }else{
            const from = this.workingHours.from.split(':');
            const till = this.workingHours.till.split(':');
            const now = new Date().getHours();
            if (from[0] < now  < till[0]) {
                console.log(`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`);
            } else {
                console.log('К сожалению, мы сейчас закрыты. Приходите завтра');
            }
        }
    }


}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');
