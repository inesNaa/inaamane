import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="typing-effect"

export default class extends Controller {
  static targets = ['word', 'cursor'];
  static values = { words: Array };

  connect() {
    this.currentWordIndex = 0;
    this.words = this.wordsValue;
    this.startAnimation();
  }

  startAnimation() {
    this.wordTarget.innerText = '';
    const currentWord = this.words[this.currentWordIndex];
    const wordLength = currentWord.length;
    let currentCharacterIndex = 0;
    const typingTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        const currentWordFragment = currentWord.slice(0, currentCharacterIndex);
        this.wordTarget.innerText = currentWordFragment;
        currentCharacterIndex++;
        if (currentCharacterIndex > wordLength) {
          clearInterval(typingInterval);
          setTimeout(() => {
            this.eraseAnimation();
          }, 1000);
        }
      }, 100);
    }, 1800);
    this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
  }

  eraseAnimation() {
    let currentWord = this.wordTarget.innerText;
    const wordLength = currentWord.length;
    let currentCharacterIndex = wordLength;
    const erasingInterval = setInterval(() => {
      currentWord = currentWord.slice(0, currentCharacterIndex);
      this.wordTarget.innerText = currentWord;
      currentCharacterIndex--;
      if (currentCharacterIndex < 0) {
        clearInterval(erasingInterval);
        this.startAnimation();
      }
    }, 100);
  }
}
