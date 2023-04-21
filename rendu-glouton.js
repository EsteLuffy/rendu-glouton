function rendu_glouton(somme, rendu, index) {
    const pieces = [100, 50, 20, 10, 5, 2, 1];

    if (somme == 0) {
      return rendu;
    } else {
      while (somme < pieces[index]) {
        index++;
      }
      
      rendu.push(pieces[index]);

      return rendu_glouton(somme - pieces[index], rendu, index);
    }
  }
  
  const pieces = [100, 50, 20, 10, 5, 2, 1];
  const somme = 120;
  const rendu = [];
  let index = 0;
  
  const resultat = rendu_glouton(somme, rendu, index);
  console.log(resultat);