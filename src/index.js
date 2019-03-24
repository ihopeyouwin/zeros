module.exports = 
function getZerosCount(number, base) {
  let sim = base;
  let arr = base;
  let counter = 1;
  let j = 1;
  let i = 2;
  let a = [];

  do
  {
   if (arr % i == 0) 
   {
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
  a[j] = i;

  if (a[a.length - 1]== a[a.length - 2])
  {
    counter++;
    if (a[a.length - 2] == a[a.length - 3])
    {
      counter++;
    }
  }



  if (counter == 1)
  {
    let zap = knowzap(sim);
    let zc = 0;
    while ( number >= zap)
    {
      zc += Math.floor(number / zap);
      number = Math.floor(number / zap);
    }
    return zc;
  }
  else
  {
    let zap = knowzap(sim);
    let zc = 0;
    while ( number >= zap)
    {
      zc += Math.floor(number / zap);
      number = Math.floor(number / zap);
    }
    zc = zc - 1;
    zc = zc / counter;
    return zc;
    }
  function knowzap(sim)
  {
    while( sim % 2 == 0 && sim / 2 > 1)
    {
      sim = sim /2;
    }
    while (sim % 3 == 0 && sim / 3 > 1)
    {
      sim = sim /3;
    }
    while( sim % 5 == 0 && sim / 5 > 1)
    {
      sim = sim /5;
    }
    while( sim % 7 == 0 && sim / 7 > 1)
    {
      sim = sim /7;
    }
    while( sim % 11 == 0 && sim / 11 > 1)
    {
      sim = sim /11;
    }
    while( sim % 13 == 0 && sim / 13 > 1)
    {
      sim = sim /13;
    }
    simple = sim;
    return simple;
  }
}

//getZerosCount(60559525, 147);
