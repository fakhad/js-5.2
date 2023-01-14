let obj = receipt()
let menu = 'вы заказали' ;

let delivery = 9000;

 console.log(obj);
for (let key in obj){
    menu = `${menu} ${key}`
    for (let newKey in obj[key]){
        menu=newKey == 'info' ? menu + obj[key][newKey] :menu ;
        delivery = newKey == 'price' ? delivery + obj[key][newKey] : delivery 
    }
}
console.log(`${menu} | стоимость заказа ${delivery}сум `);