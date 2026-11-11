function compterAdmis(notes){
    let nb=0;
    for (const note of notes){
        if  (note>=10){
            nb=nb+1;
        };
    } ;
    return nb;
};
function maximum(notes){
    let maxi=0;
    for (const note of notes){
        if  (note>maxi){
            maxi=note;
        };
    } ;
    return maxi;
};
console.log(compterAdmis([9, 14, 7, 11, 10, 16, 5]));
console.log(maximum([9, 14, 7, 11, 10, 16, 5]));