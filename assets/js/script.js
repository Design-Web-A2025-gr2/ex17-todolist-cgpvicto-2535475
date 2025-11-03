const saisie = document.getElementById('saisie-tache');
const liste = document.querySelector('.liste-afaire');
const bouton = document.getElementById('plus'); 
const listeFait = document.querySelector('.liste-fait');
const poubelleFait = document.querySelector('.conteneur-tache .icone-trash');


function ajouterTache() {
  const texte = saisie.value.trim();
  if (texte !== '') {
    const nouvelleTache = document.createElement('li');
    nouvelleTache.textContent = texte;
    nouvelleTache.classList.add('tache');
    liste.append(nouvelleTache);
    saisie.value = '';
  }
}


saisie.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' || e.key === '+') {
    ajouterTache();
  }
});

bouton.addEventListener('click', ajouterTache);

liste.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const tache = e.target;
    listeFait.append(tache); 
  }
});
poubelleFait.addEventListener('click', () => {
  listeFait.innerHTML = '';


});