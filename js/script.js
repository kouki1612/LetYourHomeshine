document.addEventListener('DOMContentLoaded', () => {
  console.log("JS chargé !");

  const heroTitle = document.querySelector('.animated-title h2');
  const heroText = document.querySelector('.animated-subtitle p');

  if (heroTitle && heroText) {
    setTimeout(() => {
      heroTitle.style.opacity = 1;
    }, 300);

    setTimeout(() => {
      heroText.style.opacity = 1;
    }, 800);
  } else {
    console.log("Éléments non trouvés.");
  }
});
  
  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.menu');
  
    burger.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  });
  
  //Animation des engagements au scroll
  document.addEventListener('DOMContentLoaded', () => {
    const cards= document.querySelectorAll('.engagement-card');
    function checkScroll() {
      const windowHeight= window.innerHeight;

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop< windowHeight - 100){
          card.classList.add('visible');
        }
      });
    }
    window.addEventListener('scroll',checkScroll);
    checkScroll();
  });
  
  //fake submission
  document.addEventListener('DOMContentLoaded', function ()  {

    const form=document.getElementById("newsletter-form");
    const emailInput=document.getElementById("newsletter-email");
    const message=document.getElementById("confirmation-message");

    if(form&&emailInput&&message){

   

    form.addEventListener('submit',function(e){
      e.preventDefault();//empêche l'envoi réel du formulaire
  
  
    if(emailInput.value.trim()!==""){
     message.style.display="block";
     emailInput.value="";
     message.classList.add("show");
     setTimeout(()=> {
      message.style.display="none"
    },1000000);
    }


  });
}
});
//animation timeline//

function revealOnScroll(){
  const reveals=document.querySelectorAll(".reveal");

  for(let i=0;i<reveals.length;i++){
    const windowHeight=window.innerHeight;
    const elementTop=reveals[i].getBoundingClientRect().top;
    const elementVisible=100;
    
    if(elementTop<windowHeight-elementVisible){
      reveals[i].classList.add("active");
    } else{
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);


// Mise à jour du compteur favoris depuis le localStorage
document.addEventListener('DOMContentLoaded', () => {
  const favoris = JSON.parse(localStorage.getItem('favoris')) || [];
  document.getElementById('compteur-favoris').innerText = favoris.length;
});

// Gestion recherche
document.getElementById('btn-recherche').addEventListener('click', () => {
  const zone = document.getElementById('zone-recherche');
  zone.style.display = (zone.style.display === 'none') ? 'block' : 'none';
});
