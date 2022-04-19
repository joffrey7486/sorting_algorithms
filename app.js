const fs = require('fs');

// Méthode asynchrone
fs.readFile('list.txt', 'utf8', function(err, data) {
    const content = data;
    console.log(content);
});

// créer une variable contenant un tableau contenant les nombres du fichier  list.txt
const content = fs.readFileSync('list.txt', 'utf8');

// creer une variable égal à un tableau contenant les nombres de content
const arr_num = content.split(' ').map(num => parseInt(num, 10));


// TRI BULLE
// Fait un tri à bulle et retourne le tableau trié avec le nombre de comparaison 
const bubbleSort = (arr_num) => {
    let nb_comp = 0;
    for (let i = 0; i < arr_num.length; i++) {
        for (let j = 1; j < arr_num.length - i; j++) {
            if (arr_num[j - 1] > arr_num[j]) {
                let tmp = arr_num[j - 1];
                arr_num[j - 1] = arr_num[j];
                arr_num[j] = tmp;
                nb_comp++;  
            }
        }
    }
    console.log(`Tri à bulle: ${nb_comp} comparaisons - ${arr_num.join(' ')}`);
}
bubbleSort(arr_num);


// TRI INSERTION
// Fait un tri à insertion et retourne le tableau trié avec le nombre de comparaison
const insertionSort = (arr_num) => {
    let nb_comp = 0;
    for (let i = 1; i < arr_num.length; i++) {
        let tmp = arr_num[i];
        let j = i - 1;
        nb_comp++;
        while (j >= 0 && arr_num[j] > tmp) {
            arr_num[j + 1] = arr_num[j];
            j--;
            nb_comp++;
        }
    }
    console.log(`Tri à insertion: ${nb_comp} comparaisons - ${arr_num.join(' ')}`);
}
insertionSort(arr_num);




// TRI SELECTION
// Fait un tri à sélection et retourne le tableau trié avec le nombre de comparaison
const selectionSort = (arr_num) => {
    let nb_comp = 0;
    for (let i = 0; i < arr_num.length; i++) {
        // stocker l'index dans l'élément minimum
        let min = i;
        for (let j = i + 1; j < arr_num.length; j++) {
            if (arr_num[j] < arr_num[min]) {
                min = j;
            }
        }
        let tmp = arr_num[i];
        arr_num[i] = arr_num[min];
        arr_num[min] = tmp;
        nb_comp++;
    }
    console.log(`Tri à sélection: ${nb_comp} comparaisons - ${arr_num.join(' ')}`);
}
selectionSort(arr_num);





// TRI QUICKSORT
// Fait un tri rapide et retourne le tableau trié avec le nombre de comparaison
const quickSort = (arr_num) => {
    let nb_comp = 0;
    const quickSortRec = (arr_num) => {
        if (arr_num.length <= 1) { return arr_num; }
        const pivot = arr_num[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr_num.length; i++) {
            if (arr_num[i] < pivot) {
                left.push(arr_num[i]);
            } else {
                right.push(arr_num[i]);
            }
            nb_comp++;
        }
        return [...quickSortRec(left), pivot, ...quickSortRec(right)];
    }
    console.log(`Tri rapide: ${nb_comp} comparaisons - ${quickSortRec(arr_num).join(' ')}`);
}
quickSort(arr_num);


// Créer une variable qui un tableau contenant 250 nombres aléatoires
const arr_num_alea = [];
for (let i = 0; i < 100; i++) {
    arr_num_alea.push(Math.floor(Math.random() * 1000));
}
bubbleSort(arr_num_alea);
insertionSort(arr_num_alea);
selectionSort(arr_num_alea);
quickSort(arr_num_alea);


