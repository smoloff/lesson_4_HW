const func = (age, name) => {
      if (name == undefined || age < 6) {
        return false; 
    } else {
        return true;
    }    
}
console.log(func(6, 'ivan'));

