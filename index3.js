function estPalindrome(mot){
    var mot;
    var motInverse= mot.split('').reverse('').join('')
    if( mot==motInverse){
    alert (mot + " est  un palindrome")
    }
    else if (mot!=motInverse) {
        alert(mot + " n'est pas un palindrome")
    }
    
    
    return mot===motInverse
    }
    let mot=prompt("entrez un mot")
    estPalindrome(mot)