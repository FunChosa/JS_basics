
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