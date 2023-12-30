let nom= prompt("Entrez votre nom")
let prenom= prompt("Entrez votre prenom")
let anneedenaissance= prompt("entrez votre année de naissance")

let dateactuelle=new Date()
let anneeActuelle= dateactuelle.getFullYear()
let age= anneeActuelle- parseInt(anneedenaissance)

alert ("Hello " + nom +" " + prenom + ", vous avez" +" " + age + "ans")