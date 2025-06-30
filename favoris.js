document.addEventListener('DOMContentLoaded', () => {
    afficherFavoris();
  
    document.getElementById('btn-recherche').addEventListener('click', () => {
      const zone = document.getElementById('zone-recherche');
      zone.style.display = (zone.style.display === 'none') ? 'block' : 'none';
    });
  
    document.getElementById('input-recherche').addEventListener('input', (e) => {
      afficherFavoris(e.target.value.toLowerCase());
    });
  });
  
  function afficherFavoris(recherche = "") {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = "";
  
    const favoris = JSON.parse(localStorage.getItem('favoris')) || [];
  
    if (favoris.length === 0) {
      galleryContainer.innerHTML = "<p>Votre liste de favoris est vide.</p>";
      return;
    }
  
    favoris.forEach(item => {
      if (item.texte.toLowerCase().includes(recherche)) {
        const bloc = document.createElement("div");
        bloc.className = "gallery-item";
        bloc.innerHTML = `
          <img src="${item.image}" alt="${item.texte}">
          <p>${item.texte}</p>
          <button class="btn-retirer-favori">Retirer des favoris ❌</button>
        `;
  
        bloc.querySelector('.btn-retirer-favori').addEventListener('click', () => {
          const nouveauxFavoris = favoris.filter(fav => fav.image !== item.image || fav.texte !== item.texte);
          localStorage.setItem('favoris', JSON.stringify(nouveauxFavoris));
          alert("Retiré des favoris !");
          afficherFavoris(recherche);
        });
  
        galleryContainer.appendChild(bloc);
      }
    });
  
    activerLightbox();
  }
  