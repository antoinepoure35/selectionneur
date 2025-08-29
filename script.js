    const classes = {'6C': ["B.Louan", "B.Alice", "B.Oscar", "D.Edwin", "DF.Maxence", "D.Gaspard", "FP.Ethan", "G.Maëlia", "H.Eloïne", "H.Agathe", "H.Jules", "L.Paco", "L.Charles", "L.Clémence", "LC.Timothée", "L.Julia", "L.Louis", "M.Léon", "M.Naoufel", "M.Léa", "M.Amandine", "M.Manon", "N.Antonin", "PS.Maéna", "P.Yanis", "SQ.Mathéo", "T.Suzie", "V.Thomas"],
	'6D': ["A.Louise", "A.Adem", "B.Lola", "B.Nael", "B.Camille", "B.Lucas", "C.Leo", "C.Jules", "D.Valentin", "F.Timothée", "F.Victoire", "G.Marie-Perrine", "G.Timéo", "HC.Mathias", "L.Augustin", "M.Antoine", "M.Faustine", "M.Baptiste", "NO.Marine-Eden", "P.Gabryel", "P.Raphaëlle", "R.Maina", "RT.Elisabeth", "S.Mathéo", "SF.Romann", "T.Enzo", "V.Paul", "V.Pauline"],
	'4B': ["B.Clément", "B.Camille", "B.Coralie", "C.Edouard", "C.Corentin", "C.Pierre", "D.Alexis", "E.Simon", "G.Malo", "GT.Thomas", "G.Antone", "J.Roxane", "J.Laura", "J.Hugo", "LL.Juliette", "LQ.Bertille", "LR.Martin", "L.Adam", "M.Lucie", "MS.Evan", "M.Samuel", "MDF.Ombeline", "O.Natasha", "P.Elouan", "PP.Driss", "RM.Clementine", "R.Ziad", "R.Clémence", "R.Jeanne", "S.Louann"],
	'3A': ["A.Antonin", "A.Héloïse", "B.Jade", "B.Adèle", "B.Yasmine", "B.Lise", "C.Maxence", "C.Robin", "C.Samuel", "C.Léandre", "DB.Diane", "D.Keziah", "D.Faustine", "D.Colin", "E.Martin", "F.Edouard", "G.Joan", "H.Antonin", "J.Maïwen", "J.Aaron", "LL.Joséphine", "L.Anton", "M.Charlie", "NG.Jocelin", "P.Adélaïde", "P.Anaïs", "Q.Nina", "R.Solenn", "T.Céleste", "T.Louis"]
    };
	
	let taillesDesClasses = {};
	for (let classe in classes) {
		taillesDesClasses[classe] = classes[classe].length;
	}

	let result = "Nombres d'élèves par classe : ";
	for (let classe in taillesDesClasses) {
		result += `${classe}(${taillesDesClasses[classe]})   `;
	}

	document.getElementById('tailleDesClasses').innerHTML = result;
	
document.getElementById('classeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const classe = document.getElementById('classe').value;
    const nombre = parseInt(document.getElementById('nombre').value, 10);
    const eleves = classes[classe];

    if (nombre > eleves.length) {
        alert('Le nombre d\'élèves demandé dépasse le nombre d\'élèves dans la classe.');
        return;
    }

    const elevesAleatoires = [];
    while (elevesAleatoires.length < nombre) {
        const index = Math.floor(Math.random() * eleves.length);
        if (!elevesAleatoires.includes(eleves[index])) {
            elevesAleatoires.push(eleves[index]);
        }
    }

	elevesAleatoires.sort((a, b) => {
	  return a[0].localeCompare(b[0]);
	});

    document.getElementById('resultat').innerHTML = `<p id="liste">Élèves sélectionnés (${elevesAleatoires.length}) : </br></br>${elevesAleatoires.join('</br>')}</p>`;
});

document.getElementById('choisirUnEleveAvecRemise').addEventListener('click', function() {

    const classe = document.getElementById('classe').value;
    const eleves = classes[classe];

    const index = Math.floor(Math.random() * eleves.length);
    const eleveAleatoire = eleves[index];

    document.getElementById('resultat').innerText = `Élève sélectionné : ${eleveAleatoire}`;
});

// document.getElementById('choisirUnEleveSansRemise').addEventListener('click', function() {

    // const classe = document.getElementById('classe').value;
    // const eleves = classes[classe];

    // const index = Math.floor(Math.random() * eleves.length);
    // const eleveAleatoire = eleves[index];

    // document.getElementById('resultat').innerText = `Élève sélectionné : ${eleveAleatoire}`;
// });
