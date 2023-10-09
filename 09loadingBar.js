function loadingBar(percentage) {
   let  percent = percentage + '%';
    let count = percentage / 10;
    let emptyCount = 10 - count;
  
   let loading = '[' + '%'.repeat(count) + '.'.repeat(emptyCount) + ']';
  
    if (percentage < 100) {
      console.log(`${percent} ${loading}`);
      console.log("Still loading...")
    } else {
      console.log(`${percent} Complete!`);
    }
  }loadingBar(100)