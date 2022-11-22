-console.log("Задание 1");
let objects=[{subject:"T-34-85",weapon:"85-mm gun"},
{subject:"PZ.IV",weapon:"75-mm gun"},
{subject:"M4 SHERMAN",weapon:"75-mm M3"}];
let i=0;
function sercPlace(objects,key,value){
    let result = [];
    for (;i<objects.length;i++){
        let obj=objects[i];
        if (obj[key]===value)result.push(obj);
    }
    return result;
}
let filteredArray=sercPlace(objects,'subject','PZ.IV');
console.log(filteredArray);