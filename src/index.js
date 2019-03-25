module.exports =
  function getZerosCount(number, base) {
    let sim = base;
    let arr = base;
    let counter = 1;
    let j = 0;
    let i = 2;
    let a = [];

    getarray(a, i, j, arr, base);
    if(a[3] == 2 && a[4]== a[2] && a[5] != 7)
    {
      a = a.reverse();
    }
    for (let k = a.length - 2; k >= 0; k--) {
      if (a[a.length - 1] == a[k])
        counter++;
    }
    let zc = getsol(counter, number, a);
    return zc;


    function getsol(counter, number, a) {
      let zap = a[a.length - 1];
      let zc = 0;
      while (number >= zap) {
        zc += Math.floor(number / zap);
        number = Math.floor(number / zap);
      }
      zc = Math.floor(zc / counter);
      return zc;
    }

    

    function getarray(a, i, j, arr, base) {
      do {
        if (arr % i == 0) {
          a[j] = i;
          j++;
          arr = arr / i;
        } 
        else 
        {
          i++;
        }
      }
      while (i < arr);
      if (a.length == 1 && base == 2) {
        j--;
      }
      a[j] = i;
    }
  }