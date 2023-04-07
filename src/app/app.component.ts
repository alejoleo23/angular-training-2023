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
  }

  //arrow functions
  // const getName = (name:string , lastName:sting) => lastName;

}
