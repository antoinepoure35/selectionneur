    const classes = {'6B': ["A Martial", "A Thibault", "B Elias", "B Rose", "B Manon", "B Soline", "C Pauline", "D Edgar", "D Charline", "G Gael", "J Jules", "J Celia", "K Iwan", "L Lucie", "L Louis", "L", "Martin", "L Chloé", "M Loévan", "M Milo", "N Loïs", "N Hugo", "N Margot", "P Louis", "R Elicia", "R Paul", "S Marius", "S Titouan", "V Aurore"],
	'6D': ["A Moulay-Imran", "B Fares", "B Alexandre", "C Kingsley", "C Arthur", "C Jade", "D Alexandre", "D Leandre", "D Léa", "F Inès", "F Edouard", "F Ethan", "J Léna", "J Méline", "L", "Eva", "L Clara", "L Robin", "M Leo", "M Elisa", "M Romain", "M Gabriele", "O Chloé", "P Félix", "P Paul", "P Alice", "T Gabriella", "T Oscar", "T Melia", "Z Alizée"],
	'4A': ["A Juliette", "A Pierre", "B Maddy", "B Matthieu", "C Stacy", "C Célestin", "C Victoire", "C Maxime", "C Gwenola", "C Oscar", "C Lorenzo", "C Axel", "G Cesar", "G Randy", "G", "Tuomas", "H Gabriel", "L Paul", "L Heidi", "L Juliette", "M Lilas", "M Raphaëlle", "M Telio", "N Malia odile", "N Elise", "O Aelig", "R Marius", "S Laurane", "S Raphaël"],
	'3C': ["A Mona", "B Jade", "B Camille", "C Edouard", "D Alexis", "D Augustin", "D Anouk", "D Mathilde", "E Erwan", "F Corentin", "G Alix", "G Thomas", "G Gabriel", "J Roxane", "J Hugo", "J Naya", "J Maxence", "K Florian", "L Tiana", "L Bertille", "M Evan", "O Natasha", "P Elouan", "P Apolline", "S Jules", "T Julie", "V Alexis"]
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
