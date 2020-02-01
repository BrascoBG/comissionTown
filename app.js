function comission([arg1,arg2]){
  let town = arg1.toLowerCase();
  let sales = Number(arg2);

  if(sales >= 0 && sales <= 500){
    if(town === 'sofia'){
      console.log((sales * 0.05).toFixed(2));
    }
    else if(town === 'plovdiv'){
      console.log((sales * 0.055).toFixed(2));
    }
    else if(town === 'varna'){
      console.log((sales * 0.045).toFixed(2));
    }
    else{
      console.log('Error');
    }
  }
  else if(sales > 500 && sales <= 1000){
    if(town === 'sofia'){
      console.log((sales * 0.07).toFixed(2));
    }
    else if(town === 'plovdiv'){
      console.log((sales * 0.08).toFixed(2));
    }
    else if(town === 'varna'){
      console.log((sales * 0.075).toFixed(2));
    }
    else{
      console.log('Error');
    }
  }
  else if(sales > 1000 && sales <= 10000){
    if(town === 'sofia'){
      console.log((sales * 0.08).toFixed(2));
    }
    else if(town === 'plovdiv'){
      console.log((sales * 0.12).toFixed(2));
    }
    else if(town === 'varna'){
      console.log((sales * 0.10).toFixed(2));
    }
    else{
      console.log('Error');
    }
  }
  else if(sales > 10000){
    if(town === 'sofia'){
      console.log((sales * 0.12).toFixed(2));
    }
    else if(town === 'plovdiv'){
      console.log((sales * 0.145).toFixed(2));
    }
    else if(town === 'varna'){
      console.log((sales * 0.13).toFixed(2));
    }
    else{
      console.log('Error');
    }
  }
  else{
    console.log('Error');
  }
}

comission(['plovdiv', 50]);
