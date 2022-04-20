const fs = require('fs');

// Méthode asynchrone
fs.readFile('list.txt', 'utf8', function(err, data) {
    const content = data;
});

// créer une variable contenant un tableau contenant les nombres du fichier  list.txt
const content = fs.readFileSync('list.txt', 'utf8');

// creer une variable égal à un tableau contenant les nombres de content
const arr_num = content.split(' ').map(num => parseInt(num, 10));


// Créer une variable qui un tableau contenant 250 nombres aléatoires
const arr_num_alea = [];
for (let i = 0; i < 50; i++) { arr_num_alea.push(Math.floor(Math.random() * 1000));}

// créer un fichier txt contenant les nombres du tableau arr_num_alea
// fs.writeFileSync('list_alea.txt', arr_num_alea.join(' '));
const arr_num_alea_content = fs.readFileSync('list_alea.txt', 'utf8').split(' ').map(num => parseInt(num, 10));


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
    // parcourir le tableau
    for (let i = 1; i < arr_num.length; i++) {
        let tmp = arr_num[i];
        let j = i - 1;
        nb_comp++;
        // déplacer les nombres inférieurs du tableau vers la droite
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
    // parcourir le tableau
    for (let i = 0; i < arr_num.length; i++) {
        // stocker l'index dans l'élément minimum
        let min = i;
        // parcourir le tableau à partir de l'index i
        for (let j = i + 1; j < arr_num.length; j++) {
            // si l'élément courant est plus petit que l'élément minimum, stocker son index
            if (arr_num[j] < arr_num[min]) {
                min = j;
            }
        }
        // échanger les éléments minimum et l'élément courant
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
        // si le tableau contient moins de 2 éléments, il n'est pas nécessaire de le trier
        if (arr_num.length <= 1) { return arr_num; }
        // découper le tableau en deux
        const pivot = arr_num[0];
        const left = [];
        const right = [];
        // parcourir le tableau à partir de l'index 1
        for (let i = 1; i < arr_num.length; i++) {
            // si l'élément courant est plus petit que le pivot, stocker dans le tableau gauche
            if (arr_num[i] < pivot) {
                left.push(arr_num[i]);
            // sinon stocker dans le tableau droit
            } else {
                right.push(arr_num[i]);
            }
            nb_comp++;
        }
        // retourner le tableau trié à partir de la fusion des deux tableaux gauche et droit
        return [...quickSortRec(left), pivot, ...quickSortRec(right)];
    }
    console.log(`Tri rapide: ${nb_comp} comparaisons - ${quickSortRec(arr_num).join(' ')}`);
}
quickSort(arr_num);


// TRI MERGESORT
// Fait un tri fusion et retourne le tableau trié avec le nombre de comparaison
const mergeSort = (arr_num) => {
    let nb_comp = 0;
    const mergeSortRec = (arr_num) => {
        // si le tableau contient moins de 2 éléments, il n'est pas nécessaire de le trier
        if (arr_num.length <= 1) { return arr_num; }
        // découper le tableau en deux
        const middle = Math.floor(arr_num.length / 2);
        const left = arr_num.slice(0, middle);
        const right = arr_num.slice(middle);
        // trier les deux sous-tableaux
        return merge(mergeSortRec(left), mergeSortRec(right));
    }
    // fusionner les deux sous-tableaux
    const merge = (left, right) => {
        let result = [];
        let nb_comp = 0;
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
            nb_comp++;
        }
        return [...result, ...left, ...right];
    }
    console.log(`Tri fusion: ${nb_comp} comparaisons - ${mergeSortRec(arr_num).join(' ')}`);
}
mergeSort(arr_num);

bubbleSort(arr_num_alea_content);
insertionSort(arr_num_alea_content);
selectionSort(arr_num_alea_content);
quickSort(arr_num_alea_content);
mergeSort(arr_num_alea_content);


