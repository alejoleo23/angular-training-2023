import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testproy';

  constructor(){
    console.log("hi");
    //arrow functions
    // const getName = (name:string , lastName:sting) => lastName;
    
    //operador map :genera un nuevo array
    const auxMap = [1,2,3,4,5].map(num => num*2);
    console.log("auxMap: ", auxMap);
    
    //operador foreach :solo recorre y lee datos
    //- no array, hacer push de alguna lista
    const auxForeach = [6,7,8,9,10].forEach(num => num*3);
    console.log("auxForeach: ",auxForeach);
    
    //operador find: encuentra valor de la lista, busca un objeto
    //- el valor a evaluar puede ser json(obj.id === 3)
    //- si no encuentra lo q busca devuelve undefined
    const auxFind = [1,2,3,4,5].find(num => num===3);
    console.log("auxFind: ", auxFind);

    //operador FindIndex: 
    //- busca el indice del array, posicion del objeto
    //- cuando no encuentra la posicion da un -1
    const auxFindIndex = [1,2,3,4,5].findIndex(num => num === 5);
    console.log("auxFindIndex: ", auxFindIndex);

    //operador IndexOf: 
    //- busca el indice del array o cadena
    //- cuando no encuentra la posicion da un -1
    //- se puede buscar caracter y cadena
    const auxIndexOf = [1,2,3,4,5].indexOf(1);
    console.log("auxIndexOf: ", auxIndexOf);
    const auxIndexOfString = "Hola Mundo Test".indexOf("Test");
    console.log("auxIndexOfString: ",auxIndexOfString);

    //operador filter
    //- devuelve array filtrando
    //- si no encuentra nada devuelve array vacio
    const auxFilter = [1,2,3,4,5].filter(num => num%2 === 0);
    console.log("auxFilter: ",auxFilter);

    //operador join
    const auxJoin = [1,2,3,4,5].join('--');
    console.log("auxJoin: ",auxJoin);

    //operador split
    //- recibe cadena y separa en array
    const auxSplit = "hola,mundo,test".split(",");
    console.log("auxSplit: ",auxSplit);

    //operador splice
    //- edita el array quitando un elemento de una posicion indicada
    const A = ['a','b','c','d','e'];
    const auxSplice = A.splice(1,1);
    console.log("splice: ",A,auxSplice);

    //operador reduce
    const auxReduce = [1,2,3,4,5].reduce((prev,value,index)=>prev + value,0);
    console.log("auxReduce: ",auxReduce);

    //JSON operator
    const auxJSON = {
      id: 1,
      name: "Axl",
      lastName: "Santos"
    };

    //ENTRIES, KEYS, VALUES
    const auxEntries = Object.entries(auxJSON);
    console.log("auxEntries: ",auxEntries);

    const auxKeys = Object.keys(auxJSON);
    console.log("auxKeys: ",auxKeys);

    const auxValues = Object.values(auxJSON);
    console.log("auxValues: ",auxValues);

    //****TYPESCRIPT
    //CONST Y LET
    //const se da valor y ya no cambia al asignar de nuevo
    //let puede usarse el mismo nombre de variable en diferente entorno
    for(let i=1;i<=3;i++){
      //console.log("index: ",i);
    }
    for(let i=1;i<=3;i++){
      //console.log("index: ",i);
    }
    for(let i=1;i<=3;i++){
      //console.log("index: ",i);
    }

    //SPREAD OPERATOR, REST OPERATOR
    const b =[1,2,3,4,5];
    const c =[...b,6,7,8,9,10];
    console.log("c: ",c);

    this.getREST(1,2,3,"hola");

    //DESESTRUCUTURAR UN JSON
    //- funciona tanto con json y con arrays
    const person = {
      id: 1,
      name: "Pablo",
      country: {
        idCountry: 1,
        cod: "CLP"
      }
    };
    const {country} = person;
    console.log("country: ",country);

    //PRACTICANDO CON LOS OPERADORES VISTOS
    const data = {
      0: {
        id: 1,
        name: "juan",
        age: 24
      },
      1: {
          id: 2,
          name: "maria",
          age: 10
      }
    };
    //convertir a array y sumar las edades
    const resp = Object.values(data).reduce((prev,value)=> prev + value.age,0);
    console.log("resp: ",resp);
    //convertir a un array filtrar las personas mayores a 10m,mostrar solo ids
    const resp1 = Object.values(data).filter(p => p.age>10).map(p => p.id);
    console.log("resp1: ",resp1);

    


  }

  //REST OPERATOR
  getREST(...params:any[]){
    console.log("REST: ",params);
  }

}
