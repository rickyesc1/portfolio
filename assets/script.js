var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 3000,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  });
// the point of this is to have the pictures , words, basically all of the content show up in a cool fading type of way.