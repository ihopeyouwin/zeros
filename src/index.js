module.exports = 
function getZerosCount(number, base) {
  let sim = base;
  function knowzap(sim){
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
    while( sim % 17 == 0 && sim / 17 > 1)
    {
      sim = sim /17;
    }
    while( sim % 19 == 0 && sim / 19 > 1)
    {
      sim = sim /19;
    }
    while( sim % 23 == 0 && sim / 23 > 1)
    {
      sim = sim /23;
    }
    while( sim % 29 == 0 && sim / 29 > 1)
    {
      sim = sim /29;
    }
    simple = sim;
    
    return simple;
  }

  let zap = knowzap(sim);
  let zc = 0;
  while ( number >= zap)
  {
    zc += Math.floor(number / zap);
    number = Math.floor(number / zap);
  }
  return zc;




}

//getZerosCount(60559525, 147);