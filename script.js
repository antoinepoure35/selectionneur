    const classes = {
        '6A': ["B.Kayla","B.Maddy","B.Nathan","B.Simon","B.Nicolas","C.Augustin","D.Noah","D.Constance","D.Rose","F.Baptiste","G.Maho","L.Sacha","L.Paul","L.Heidi","L.Antoine","L.Timothé","L.Juliette","M.Lilas","M.Raphaëlle","M.Telio","P.Nathanaël","R.Lina","R.Élise","R.Camille","S.Louna","S.Raphaël","T.Paul-seydou","T.Chloé"],
        '6B': ["A.Juliette","A.Pierre","B.Matthieu","B.Maxime","B.Raphaël","B.Yilan","B.Thomas","C.Stacy","C.Victoire","C.Maxime","C.Oscar","C.Faustine","C.Lorenzo","D.Maël","E.Clémence","G.Cesar","G.Randy","G.Gabrielle","G.Nathan","G.Iwen","K.Amaury","N.Malia odile","N.Elise","P.Cassandre","R.Marius","S.Laurane","T.Emma","T.Arthur"],
        '6C': ["B.Louan", "B.Alice", "B.Oscar", "D.Edwin", "DF.Maxence", "D.Gaspard", "FP.Ethan", "G.Maëlia", "H.Eloïne", "H.Agathe", "H.Jules", "L.Paco", "L.Charles", "L.Clémence", "LC.Timothée", "L.Julia", "L.Louis", "M.Léon", "M.Naoufel", "M.Léa", "M.Amandine", "M.Manon", "N.Antonin", "PS.Maéna", "P.Yanis", "SQ.Mathéo", "T.Suzie", "V.Thomas"],
	'6D': ["A.Louise", "A.Adem", "B.Lola", "B.Nael", "B.Camille", "B.Lucas", "C.Leo", "C.Jules", "D.Valentin", "F.Timothée", "F.Victoire", "G.Marie-Perrine", "G.Timéo", "HC.Mathias", "L.Augustin", "M.Antoine", "M.Faustine", "M.Baptiste", "NO.Marine-Eden", "P.Gabryel", "P.Raphaëlle", "R.Maina", "RT.Elisabeth", "S.Mathéo", "SF.Romann", "T.Enzo", "V.Paul", "V.Pauline"],
	'5A': ["A.Mona","B.Clément","B.Clémence","C.Edouard","C.Corentin","C.Pierre","C.Nolan","D.Augustin","D.Anouk","E.Adrien","F.Corentin","G.Alix","G.Malo","G.Thomas","G.Cassie","D.Alexis","J.Roxane","J.Hugo","J.Maxence","L.Ayden","M.Lucie","M.Raphaël","O.Natasha","P.Elouan","P.Mathéo","R.Kimi","S.Jules","S.Louann","S.Tylio","V.Alexis"],
	'5B': ["B.Chloé", "B.Oscar", "B.Coralie", "C.Marianne", "C.Paola", "C.Thibaud", "H.Julie", "F.Lya", "G.Klervie", "G.Antone", "G.Alexandre", "H.Cassandre", "J.Laura", "J.Naya", "K.Florian", "L.Juliette", "L.Léo", "L.Mathéo", "M.Lorraine", "M.Jules", "M.Clément", "N.Malo", "P.Apolline", "R.Clementine", "R.Ziad", "R.Angèle", "R.Jeanne", "T.Julie", "V.Charline"],
	'5C': ["B.Jade", "B.Manon", "B.Camille", "B.Kenza", "D.Inès", "D.Lisa", "D.Mila", "E.Erwan", "E.Simon", "G.Raphaëlle", "G.Arthur", "G.Gabriel", "L.Tiana", "La.Baptiste", "L.Nolwenn", "L.Bertille", "L.Martin", "L.Maxence", "Le.Baptiste", "L.Adam", "L.Thomas", "L.Tom", "M.Julian", "M.Evan", "M.Samuel", "M.Elouen", "M.Ombeline", "P.Maxence", "R.Clémence"],
	'4A': ["A.Antonin", "A.Louise", "A.Alan", "B.Alexandre", "B.Jade", "B.Adèle", "B.Yasmine", "C.Maxence", "C.Robin", "C.Samuel", "C.Léonie", "C.Léandre", "D.Diane", "D.Keziah", "E.Martin", "E.Edouard", "G.Aboubacar", "H.Antonin", "L.Quentin", "L.Joséphine", "L.Anton", "L.Salomé", "P.Jules", "P.Adélaïde", "P.Anaïs", "R.Solenn", "R.Adèle", "R.Rhys", "S.Jeanne", "T.Céleste"],
	'4B': ["B.Clément", "B.Camille", "B.Coralie", "C.Edouard", "C.Corentin", "C.Pierre", "D.Alexis", "E.Simon", "G.Malo", "GT.Thomas", "G.Antone", "J.Roxane", "J.Laura", "J.Hugo", "LL.Juliette", "LQ.Bertille", "LR.Martin", "L.Adam", "M.Lucie", "MS.Evan", "M.Samuel", "MDF.Ombeline", "O.Natasha", "P.Elouan", "PP.Driss", "RM.Clementine", "R.Ziad", "R.Clémence", "R.Jeanne", "S.Louann"],
	'4C': ["A.Héloïse", "B.Youenn", "B.Malou", "B.Lise", "B.Sami", "B.Anaé", "B.Noa", "C.Jeanne", "CM.Lyna", "C.Alice", "C.Glenn", "D.Colin", "E.Dorian", "E.Clément", "G.Joan", "H.Kenji", "J.Maïwen", "J.Aaron", "L.Louis", "LV.Simon", "M.Charlie", "N.Jocelin", "O.Hugo", "P.Alexis", "Q.Nina", "R.Maël", "R.Thomas", "S.Chloé", "V.Anna"],
	'3A': ["A.Antonin", "A.Héloïse", "B.Jade", "B.Adèle", "B.Yasmine", "B.Lise", "C.Maxence", "C.Robin", "C.Samuel", "C.Léandre", "DB.Diane", "D.Keziah", "D.Faustine", "D.Colin", "E.Martin", "F.Edouard", "G.Joan", "H.Antonin", "J.Maïwen", "J.Aaron", "LL.Joséphine", "L.Anton", "M.Charlie", "NG.Jocelin", "P.Adélaïde", "P.Anaïs", "Q.Nina", "R.Solenn", "T.Céleste", "T.Louis"],
	'3B': ["B.Mathis", "C.Louis", "C.Maxence", "D.Maxime", "E.Salomé", "F.Laureline", "F.Eden", "F.Sacha", "F.Pol", "G.Esteban", "G.Victor", "J.Elouan", "J.Candice", "J.Emma", "K.Benjamin", "K.Daniel", "L.Jawad", "M.Timothé", "M.Baptiste", "P.Louis-Marin", "M.Léandro", "M.Athénaïs", "M.Anaïs", "O.Nadiia", "P.Eline", "S.Maëllys", "S.Maëlan", "T.Louis"]
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
