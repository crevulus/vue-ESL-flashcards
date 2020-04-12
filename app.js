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
      event.preventDefault();
      this.flashcards.push({
        phrase: this.inputPhrase,
        definition: this.inputDef,
        isFlipped: false,
      });
    },
    learnedCard: function(flashcard, index) {
      flashcards.forEach((card) => {
        if (card[index] === flashcard[index]) {
          console.log('in here');
          card.isLearned = !card.isLearned;
        }
      });
    },
  },
});