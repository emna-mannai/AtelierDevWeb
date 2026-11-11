let nb_hab=2000;
let ans=0;
while (nb_hab<=3000){
    nb_hab=nb_hab+nb_hab * 0.05;
    //alert(`${nb_hab} nb_hab`);
    ans=ans+1;
};
alert(`${ans} ans`);