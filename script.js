window.addEventListener('keydown', playSound);

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add('playing');
};

function removeTransition(e){
  if (e.propertyName !== 'transform') return; //skip if it's not a trasform
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


