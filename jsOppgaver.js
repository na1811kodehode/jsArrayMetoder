/*
 ***************************************************************
                    Javascript Array Methods
                    
 *************************************************************** 
*/

const minArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. push() legger til et element eller flere på slutten av arrayet.
// Legger til elementene '6' og '9' på slutten av arrayet
minArray.push(6, 9);

console.log("push(): " + minArray);  //Forventet output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 9]



// 2. pop() fjerner siste elementet i en array og returnerer elementet
console.log(minArray.pop());    //Forventet output: 9

minArray.pop(); //Fjerner siste element i arrayet => 6

console.log("pop(): " + minArray);  //Forventet output: [1, 2, 3, 4, 5, 6, 7, 8, 9]



// 3. shift() fjerner første elementet i en array of returnerer det
console.log(minArray.shift());  //Forventet output: 1

console.log("shift(): " + minArray);  //Forventet output: [2, 3, 4, 5, 6, 7, 8, 9]



//4. unshift() legger til et element i starten/begynnelsen av en array og returnerer den nye lengden
console.log(minArray.unshift(99,66));   //Forventet output: 10 (ny lengde av array)

console.log("unshift(): " + minArray);  //Forventet output: [99, 66, 2, 3, 4, 5, 6, 7, 8, 9]



//5. find() returnerer verdien av det første elementet som tilfredsstiller testfunksjonen,
// returnerer 'undefined' hvis det ikke finnes et element innenfor søkekriteriene
function erPartall (element) {  //Funksjon som sjekker for partall
    return element % 2 == 0;
}

console.log("find() 1: " + minArray.find(erPartall));  //Forventet output: 66

// Eksempel 2: prøver å finne første element i arrayet som er > 100.
const sokeTall = minArray.find((num) => num > 100);

console.log("find() 2: " + sokeTall);   //Forventet output: undefined



//6. some() sjekker om 'minst' ett element i en array oppfyller en bestemt betingelse, returnerer true hvis ja, ellers false
function erOddetall (element) { //Funksjon som sjekker for oddetall
    return element % 2 != 0;
}

console.log(minArray.some(erOddetall));     //Forventet output: true



//7. every() sjekker om alle elementene i arrayet oppfyller betingelsene, returnerer true hvis ja, ellers nei.
//Bruker tidligere definert funksjon for å sjekke om alle elementene i arrayet er partall
console.log(minArray.every(erPartall));     //Forventet output: false



//8. sort() sorterer elementene i et array og returnerer det. NB: konverterer elementene til strings og sorterer i ascending order
console.log("sort() default: " + minArray.sort());   //Forventet output: [2, 3, 4, 5, 6, 66, 7, 8, 9, 99]

//Kan også sortere 'riktig' ved å definere en funksjon...
console.log("sort() 'riktig': " + minArray.sort((a, b) => a - b));    //Forventet output: [2, 3, 4, 5, 6, 7, 8, 9, 66, 99]



//9. includes() sjekker om det finnes et element som oppfyller betingelsene, returnerer true/false
console.log("includes(66): " + minArray.includes(66));     //Forventet output: true
console.log("includes(11): " + minArray.includes(11));     //Forventet output: false



//10. slice() returnerer en ny array basert på start og sluttverdi (index), originale arrayet vil forbli umodifisert

//Lager en ny array fra index[0] og opptil index[4]
const nyArray = minArray.slice(0, 5);
console.log("Slice opp til index[4]: " + nyArray);       //Forventet output: [2, 3, 4, 5, 6]

//Lager enda en array og gir bare startverdi...
const endaEnArray = minArray.slice(5);
console.log("Slice f.o.m index[5]: " + endaEnArray);       //Forventet output: [7, 8, 9, 66, 99]

console.log("Original array forblir den samme: " + minArray);      //Forventet output: [2, 3, 4, 5, 6, 7, 8, 9, 66, 99] (originale arrayet forblir den samme)



//11. map() returnerer en ny array basert på en gitt funksjon
//Ganger hvert element i arrayet med 2
const gangeMedTo = minArray.map((num) => num * 2);
console.log(gangeMedTo);    //Forventet output: [4, 6, 8, 10, 12, 14, 16, 18, 132, 198]



//12. filter() lager en ny array med alle elementer som oppfyller betingelsene av en funksjon
//Lager en ny tabell som bare inneholder partall
const partallTabell = minArray.filter(erPartall);
console.log(partallTabell);     //Forventet output: 2, 4, 6, 8, 66



//13. reduce() itererer over hvert element i et array og akkumulerer en enkel verdi basert på en spesifikk funksjon
//Summerer alle elementene i arrayet og returnerer summen
/*
Forklaring:
- acc starter fra 0 (startverdi), hvis ikke oppgitt ==> starter fra første elementet i arrayet
- num er første elementet i arrayet, hvis acc ikke har startverdi ==> starter fra andre element
- Første iterasjon: 0(acc) + 2(num) = 2(acc)
- Andre iterasjon: 2(acc) + 3(num) = 5(acc)
- Tredje iterasjon: 5(acc) + 4(num) = 9(acc)
.......osv osv......
*/
const sum = minArray.reduce((acc, num) => acc + num, 0);
console.log("Sum av array via reduce() metode): " + sum);       //Forventet output: 209



//14. forEach() utfører en gitt funksjon på hvert element i en array
minArray.forEach((num) => console.log(num * 2));



//15. indexOf() returnerer første index av en gitt element i en array (eller -1 hvis det ikke finnes)
console.log(minArray);
console.log(minArray.indexOf(6));       //Forventet output: 4 (elementet '6' er i 4. index)
console.log(minArray.indexOf(153));     //Forventet output: -1



//16. lastIndexOf() returnerer siste index av en gitt element i en array (eller -1 hvis det ikke finnes)
//Legger til 2 på slutten av arrayet
minArray.push(2);
console.log(minArray);

console.log(minArray.lastIndexOf(2));       //Forventet output: 10
console.log(minArray.indexOf(2));       //Forventet output: 0



//17. reverse() reverserer alle elementene i en array
console.log("Reversert array: " + minArray.reverse());        //Forventet output: [2, 99, 66, 9, 8, 7, 6, 5, 4, 3, 2]


//18. concat() Metode for å 'merge' to eller flere arrays
//Oppretter ny array
const minStringArray = ["banan", "flue", "eple", "mos", "appelsin", "paprika"];

//Konkatiserer 'minArray' med 'minStringArray'
const mixArray = minArray.concat(minStringArray);
console.log(mixArray);      //Forventet output: 
                            // [2, 99, 66, 9, 8, 7, 6, 5, 4, 3, 2, 'banan', 'flue', 'eple', 'mos', 'appelsin', 'paprika']



