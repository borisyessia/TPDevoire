function renverserTableau(tab) {
    let reversedArray = [];
    for (let i = tab.length - 1; i >= 0; i--) {
      reversedArray.push(tab[i]);
    }
    return reversedArray;
  }
  let monTableau = [1, 2, 3, 4, 5];
  let tableauRenverse = renverserTableau(monTableau);
  console.log(tableauRenverse);