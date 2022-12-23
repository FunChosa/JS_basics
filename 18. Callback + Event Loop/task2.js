

/*
первым делам выполняется основной блок, то есть console.log('before promise') и console.log('One').
в нашем промисе находится setTimeout, поэтому выполнения then откладывается, 
и сначала выполнится setTimeout console.log('Zero');
и затем выведется console.log('Zero Promise'); и console.log('Zero Promise Invoked'));

итого:
before promise
One
Zero
Zero Promise
Zero Promise Invoked

если бы внутри промиса не было setTimeout, то порядок выполнения был следующий:
before promise
Zero Promise
One
Zero Promise Invoked
Zero
*/ 

function runCode() {
    console.log('before promise'); // 1
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Zero Promise'); // 4
        resolve();
      }, 0);
    });
  }

  setTimeout(() => {
    console.log('Zero'); // 3
  }, 0);

  runCode().then(() => console.log('Zero Promise Invoked')); //  5
  console.log('One'); //  2