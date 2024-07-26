const decodeTheRing = function (s, p) {
  function matches(i,j){
    if(i===s.length && j===p.length){
      return true;
    }
    if(i>s.length || j>p.length){
      return false;
    }
    if(p[j] === '*'){
      return matches(i,j+1) || (i<s.length && matches(i+1,j));
    }
    else if (p[j] ==='?' || s[i] === p[j]){
      return matches(i+1,j+1);
    }
    return false;
  }
  return matches(0,0);
  };
  
  module.exports = decodeTheRing;