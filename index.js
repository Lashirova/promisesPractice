// let promiseToCleanRoom = new Promise(function(resolve,reject){
//   let isClean = false;
//   if(isClean){
//     resolve('clean');
//   }else{
//     reject('not Clean');
//   }
// });
// promiseToCleanRoom.then(function(fromResolve){
//   console.log('The room is '+ fromResolve)
// }).catch(function(fromReject){
//   console.log('The room is '+ fromReject)
// })

let cleanRoom =function(){
  return new Promise(function(resolve,reject){
resolve('Cleaned the room')
  })
};
let removeGarbage =function(p){
  return new Promise(function(resolve,reject){
resolve('remove garbage')
  })
};
let watchTv=function(p){
  return new Promise(function(resolve,reject){
resolve('watchTv')
  })
};
cleanRoom().then(function(){
  return removeGarbage();
}).then(function(){
  return watchTv();
}).then(function(){
  console.log('finished')
})