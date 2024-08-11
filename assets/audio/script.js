function playTone() {
    const audio = new Audio('/assets/audio/tone1.mp3');
    audio.play();
  }
  
  function playQuestionVoiceNote() {
    const audio = new Audio('/assets/audio/What is my name .mp3');
    audio.play();
  }
  
  function playWrongAnswer() {
    alert('Are you sure?');
    const audio = new Audio('path-to-your-wrong-answer.mp3');
    audio.play();
  }
  
  function playRightAnswer() {
    alert('Yay! - Correct - I am a lion!');
    const audio = new Audio('path-to-your-right-answer.mp3');
    audio.play();
    playConfetti();
    playCrowdCheer();
    showNextSceneButton();
  }
  
  function playConfetti() {
    console.log('Confetti animation');
  }
  
  function playCrowdCheer() {
    const audio = new Audio('path-to-your-crowd-cheer.mp3');
    audio.play();
  }
  
  function showNextSceneButton() {
    const nextButton = document.createElement('button');
    nextButton.className = 'mdc-button mdc-button--raised next-button';
    nextButton.innerHTML = '<span class="mdc-button__label">Next View</span>';
    nextButton.onclick = function () {
      alert('Loading the next scene...');
    };
    document.body.appendChild(nextButton);
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    playTone();
    setTimeout(() => {
      document.getElementById('question-button').style.opacity = 1;
      playQuestionVoiceNote();
    }, 1000);
  
    setTimeout(() => {
      document.getElementById('wrong-answer').style.opacity = 1;
      document.getElementById('right-answer').style.opacity = 1;
    }, 2000);
  });
  