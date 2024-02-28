function countdown(num, callback) {
    if (num > 0) {
      setTimeout(() => {
        document.getElementById('countdown').innerText = num;
        countdown(num - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  countdown(10, function() {
    document.getElementById('countdown').innerText = 'Happy Independence Day';
  });
  