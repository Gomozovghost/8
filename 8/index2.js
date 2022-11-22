console.log("Задание 2");
let Anker =[{value:"M4 SHERMAN",label:"M4 SHERMAN"},
  {value:"Т-34-85",label:"Т-34-85"},
  {value:"PZ.IV",label:"PZ.IV"}];
function CountryList(Anker, str){
    let body=document.body;
    let select=body.appendChild(document.createElement("select"));
    Anker.forEach(function(Element){
    let option = document.createElement("option");
    option.value = Element.value;
    option.innerHTML = Element.label;
    select.appendChild(option);
    if (option.value===str) {
      option.setAttribute("selected",true);
    }
    });
  return select;
}
CountryList(Anker,"Т-34-85");