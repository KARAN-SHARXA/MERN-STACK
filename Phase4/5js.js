//API


fetch('https://randomuser.me/api/')
.then(function(data){
  return data.json();
  
})
.then(function(result){
  console.log(result.results[0].name.first);
})
.catch(function(err){
  console.log(err);
});