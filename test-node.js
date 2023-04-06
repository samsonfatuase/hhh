function addS(...name) {
    let names =[];
    for (let i = 0; i < name.length; i++) {
        names.push(name[i] + 's');
        
    }

    console.log(names);
}

console.log(addS('Samson', 'Betty', 'Mary'));
