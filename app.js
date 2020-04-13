const flashcards = [
  {
    phrase: '(to) Be tied up with',
    definition: '(to) Be very busy working on [something].',
    isFlipped: false,
    isLearned: false,
  },
  {
    phrase: 'Turn-out',
    definition: 'The number of people at an event.',
    isFlipped: false,
    isLearned: false,
  },
  {
    phrase: '(to) Get back on top of',
    definition: '(to) Regain control of [something].',
    isFlipped: false,
    isLearned: false,
  },
];

new Vue({
  el: "#esl-flashcards",
  data: {
    flashcards: flashcards,
    inputPhrase: '',
    inputDef: '',
    isLearned: false,
  },
  methods: {
    toggleSide: function(flashcard) {
      flashcard.isFlipped = !flashcard.isFlipped;
    },
    addNewFC: function(event) {
      if (!this.inputFront || !this.inputBack) {
        alert('Please input a valid phrase/description');
        return;
      }
      event.preventDefault();
      this.flashcards.push({
        phrase: this.inputPhrase,
        definition: this.inputDef,
        isFlipped: false,
        isLearned: false,
      });
    },
    learnedCard: function(flashcard, index) {
      var card = this.flashcards.find((f,i) => i===index)
      card.isLearned = !card.isLearned;
    },
  },
});