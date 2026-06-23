const promises = new Promise((res, rej) =>{
    let s = true;
    if(s){
        res("fulfillled");
    }else{
        rej("tera pass");
    }
});

console.log(promises);

promises.then(result =>{
    console.log(result);
}).catch(error =>{
    console.log(error);
})