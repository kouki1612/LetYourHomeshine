const inspirations =[
    {
        image:"images/salon scandinave 1.jpg",
        pièce:"salon",
        style:"scandinave",
        titre: "Creez une ambiance scandinave cocooning pour l'hiver",
        texte:"De nuit comme de jour vous aimerez y passer l'hiver. Le jeu de couleurs entre les teintes foncées et beiges ,et le bois clair des murs, contrastent en douceurs.Pour votre cocooning opte pour des plaids.Quelques chandelles allumées sur la table basse et votre salon est prêt!",
        


    },
    {
        image:"images/chambrescandinave.jpg",
        pièce:"chambre",
        style:"scandinave",
        titre: "Une chambre d’inspiration scandinave, cosy et lumineuse",
        texte:"Dans votre quête d’inspiration pour une chambre apaisante, optez pour le style scandinave qui incarne la simplicité, la chaleur et la luminosité. Pour les couleurs, optez pour une dominante de blanc, du beige et des nuances de marron moyen avec quelques détails noirs.Quant aux matières, le bois moyennement foncé doit ressortir. Ensuite, quelques objets en tissu bouclette, comme ce fauteuil à oreilles, posent une ambiance accueillante et élégante. Enfin, n’oubliez pas le petit détail déco qui fait toute la différence : des coussins en coton tufté qui viennent parfaire ce look.",

    },
    {
        image:"images/moderne gris.jpg",
        pièce:"salon",
        style:"moderne",
        titre: "Adopter un camaieu de gris moderne",
        texte:"Dans votre salon, les nuances de gris sont sobres et élégantes. Jouez sur les contrastes, par exemple avec un canapé gris perle et un tapis gris anthracite."  
    }
];

let filtrePiece = "all";
let filtreStyle = "all";

document.addEventListener('DOMContentLoaded', () => {
  afficherGalerie();

  // Gestion filtres pièce
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filtrePiece = btn.getAttribute('data-room');
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      afficherGalerie();
    });
  });

  // Gestion filtres style
  document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filtreStyle = btn.getAttribute('data-style');
      document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      afficherGalerie();
    });
  });
});

function afficherGalerie() {
  const galleryContainer = document.getElementById('gallery');
  galleryContainer.innerHTML = "";
  const favoris = JSON.parse(localStorage.getItem('favoris')) || [];

  inspirations.forEach(item => {
    const matchPiece = (filtrePiece === "all" || item.piece === filtrePiece);
    const matchStyle = (filtreStyle === "all" || item.style === filtreStyle);

    if (matchPiece && matchStyle) {
      const bloc = document.createElement("div");
      bloc.className = "gallery-item";
      const dejaFavori = favoris.some(fav => fav.image === item.image && fav.texte === item.texte);

      bloc.innerHTML = `
        <img src="${item.image}" alt="${item.texte}">
        <p>${item.texte}</p>
        <button class="btn-ajout-favori">${dejaFavori ? "❤️ Favori" :  "Ajouter aux favoris ❤️" }</button>
      `;

      bloc.querySelector('.btn-ajout-favori').addEventListener('click', () => {
        if (!dejaFavori) {
          favoris.push(item);
          localStorage.setItem('favoris', JSON.stringify(favoris));
          document.getElementById('compteur-favoris').innerText = favoris.length;
          afficherGalerie();
          alert("Ajouté aux favoris !");
        } else {
          alert("Déjà dans vos favoris !");
        }
      });

      galleryContainer.appendChild(bloc);
    }
  });

  activerLightbox();
}

 

// Fonction pour activer la lightbox sur chaque image
function activerLightbox() {
    const images = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.lightbox .close');
  
    images.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      });
    });
  
    close.onclick = () => {
      lightbox.style.display = 'none';
    };
  
    // Fermer si on clique en dehors de l’image
    lightbox.onclick = (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    };
  }
  
  // Appelle cette fonction après afficherGalerie()
  activerLightbox();
  afficherGalerie(); // ou afficherGalerie("all");
  

 