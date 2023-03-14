
function myname(){
 return new Promise((reslove,reject)=>{
let i = 0;
if(i==0){
    reslove()
}else{
    reject()
}
 }).then(()=>{
     console.log("got it!")
 }).catch(()=>{
   console.log("error")
 })

}
myname()
