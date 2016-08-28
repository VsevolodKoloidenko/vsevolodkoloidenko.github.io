function matchName(){
  var names = [];
  var name;
  names[4] = '';
  var matcher = false;

  for (var i = 0; i < names.length; i++) {
    names[i] = prompt('Enter ' + (i+1) + ' Name', i+1);
  }

  name = prompt('Enter your Name', 0);

  for (var i = 0; i < names.length; i++) {
    if(names[i] === name){
      matcher = true;
      alert(names[i] + ', вы успешно вошли.');
      break;
    }
  }

  if(!matcher) {
        alert('Name "' + name + '"' + ' was not found :(');
    }
  }


matchName();
