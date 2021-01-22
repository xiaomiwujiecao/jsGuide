const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames,name:string)=>{
    if (name in allNames) {
        allNames[name]++;
    }else{
        allNames[name] = 1;
    }
    return allNames;
},{})

console.log(countedNames)
