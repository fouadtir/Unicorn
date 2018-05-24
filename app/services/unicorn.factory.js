app.factory('UnicornFactory', function(){
  var factory = {
    unicorns : [],

  addUnicorn: function(unicorn){
        this.unicorns.push(unicorn);


    },

  mateUnicorn: function(unicornDad,unicornMom){
    if(unicornDad && unicornMom){
      if(unicornDad.gender == "male" && unicornMom.gender =="female"){
        unicornChild.name = unicornDad.name+unicornMom.name;
      }
    }else{
     alert("Pas de parents");
     }
    return unicornChild;
  }

  }
  return factory;
});
