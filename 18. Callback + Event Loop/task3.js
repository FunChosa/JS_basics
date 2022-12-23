// End
// Success
// user received
// in promise
// last set timeout
// promise resolved

const getData = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((user) => {
        console.log('Success'); // 2 Microtask queue
        callback(user);
      })
      .catch((error) => {
        console.log(error); //не вызывается
      });
  }

  getData(() => {
    console.log('user received'); // 3 Call Stack

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise resolved'); // 6 Callback queue 500
      }, 500);

      console.log('in promise'); // 4 Call Stack

      setTimeout(() => {
        console.log('last set timeout'); // 5 Callback queue 400
      }, 400);

   });
   promise.then((result) => {
     console.log(result);
    });
  });

  console.log('End') // 1 Call Stack