// Promise
// End
// Promise resolve
// setTimeout

setTimeout(() => {
    console.log('setTimeout'); // 4. Callback queue -> Call Stack 
  }, 0);
  const promise = new Promise((resolve) => { 
    console.log('Promise');// 1. Call Stack 
    resolve();
  });
  promise.then(() => {
    console.log('Promise resolve'); //3. Microtask queue -> Call Stack 
  });
  console.log('End'); // 2. Call Stack 