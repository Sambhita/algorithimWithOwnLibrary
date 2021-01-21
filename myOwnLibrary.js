function isTouching(f1,m2){
    if (m2.x - f1.x <= f1.width/2 + m2.width/2
      && f1.x - m2.x <= f1.width/2 + m2.width/2
      && m2.y - f1.y <= f1.height/2 + m2.height/2
      && f1.y - m2.y <= f1.height/2 + m2.height/2) {
       //true
       return true;
      }
      else {
        //false
        return false;
      }
  
  }