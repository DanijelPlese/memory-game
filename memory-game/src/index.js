import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const cards = [
  {
    id: 1,
    name: "Brainstorm",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Brainstorm.jpeg?raw=true",
  },
  {
    id: 2,
    name: "Command",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Command.jpeg?raw=true",
  },
  {
    id: 3,
    name: "Counterspell",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Counterspell.jpeg?raw=true",
  },
  {
    id: 4,
    name: "Daze",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Daze.jpeg?raw=true",
  },
  {
    id: 5,
    name: "Force",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Force.jpeg?raw=true",
  },
  {
    id: 6,
    name: "Gush",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Gush.jpeg?raw=true",
  },
  {
    id: 7,
    name: "Jace",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Jace.jpeg?raw=true",
  },
  {
    id: 8,
    name: "Narset",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Narset.jpeg?raw=true",
  },
  {
    id: 9,
    name: "Pact",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Pact.jpeg?raw=true",
  },
  {
    id: 10,
    name: "Ponder",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Ponder.jpeg?raw=true",
  },
  {
    id: 11,
    name: "Urza",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Urza.jpeg?raw=true",
  },
  {
    id: 12,
    name: "Visions",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Visions.jpeg?raw=true",
  },
  {
    id: 13,
    name: "Brainstorm",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Brainstorm.jpeg?raw=true",
  },
  {
    id: 14,
    name: "Command",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Command.jpeg?raw=true",
  },
  {
    id: 15,
    name: "Counterspell",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Counterspell.jpeg?raw=true",
  },
  {
    id: 16,
    name: "Daze",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Daze.jpeg?raw=true",
  },
  {
    id: 17,
    name: "Force",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Force.jpeg?raw=true",
  },
  {
    id: 18,
    name: "Gush",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Gush.jpeg?raw=true",
  },
  {
    id: 19,
    name: "Jace",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Jace.jpeg?raw=true",
  },
  {
    id: 20,
    name: "Narset",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Narset.jpeg?raw=true",
  },
  {
    id: 21,
    name: "Pact",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Pact.jpeg?raw=true",
  },
  {
    id: 22,
    name: "Ponder",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Ponder.jpeg?raw=true",
  },
  {
    id: 23,
    name: "Urza",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Urza.jpeg?raw=true",
  },
  {
    id: 24,
    name: "Visions",
    img:
      "https://github.com/DanijelPlese/12monkeys/blob/development/hello-react/js-card-game/images/Visions.jpeg?raw=true",
  },
];
const gridStyle = {
  maxWidth: 1100,
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};
const cardStyle = {
  margin: 5,
  backgroundColor: "rgb(77, 114, 155)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  height: 150,
  width: 150,
};
const imageStyle = {
  margin: 5,
  backgroundColor: "rgb(77, 114, 155)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  height: 120,
  width: 120,
};
const text = {
  justifyContent: "space-around",
  display: "flex",
  flexWrap: "nowrap",
  marginLeft: "20%",
  marginRight: "20%",
  marginTop: 50,
  marginBottom: 50,
  flexDirection: "row",
  fontSize: 30,
};
const resetBtn = {
  fontSize: 26,
  backgroundColor: "rgb(144, 185, 230)",
};

// Shuffles copy of our array of cards
const shuffle = (cardsArray) => {
  const cardsCopy = cardsArray.slice(0);
  return cardsCopy.sort(() => {
    return Math.random() - 0.5;
  });
};
class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: shuffle(props.cards),
      visibleCards: Array(props.cards.length).fill(false),
      selectedCards: [],
      pairsRemoved: Array(props.cards.length).fill(false),
      turnNumber: 0,
    };
    this.initialState = this.state;
    this.setCardsVisible = this.setCardsVisible.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  // Handles information about clicked cards for further purposes.
  // Is the card visible? What is cards id and name?
  setCardsVisible(card, id) {
    if (this.state.selectedCards.length < 2) {
      const newVisibleCards = [...this.state.visibleCards];
      const selectedCards = [...this.state.selectedCards, card.name];
      newVisibleCards[id] = true;
      this.cardsStateUpdate(selectedCards, newVisibleCards);
    }
  }

  // Function checks if two cards are matched
  checkPairs(firstCard, secondCard) {
    return firstCard === secondCard;
  }

  // Makes all cards in array hidden
  invisibleCards() {
    return Array(this.props.cards.length).fill(false);
  }

  // Updates state with information regarding selected cards and
  // determines what happens with two selected cards if matched or not
  cardsStateUpdate(selectedCards, newVisibleCards) {
    this.setState({
      ...this.state,
      visibleCards: newVisibleCards,
      selectedCards: selectedCards,
    });
    if (selectedCards.length === 2) {
      setTimeout(() => {
        // If two cards matches, remove them from the game
        if (this.checkPairs(selectedCards[0], selectedCards[1])) {
          const [firstIndex, secondIndex] = newVisibleCards
            .map((t, i) => {
              return {
                value: t,
                index: i,
              };
            })
            .filter((x) => {
              return x.value;
            })
            .map((t) => {
              return t.index;
            });
          const newPairsRemoved = [...this.state.pairsRemoved];
          newPairsRemoved[firstIndex] = true;
          newPairsRemoved[secondIndex] = true;
          this.setState({
            ...this.state,
            selectedCards: [],
            visibleCards: this.invisibleCards(),
            pairsRemoved: newPairsRemoved,
            turnNumber: this.state.turnNumber + 1,
          });

          // If two cards don't match, put them back in game
        } else {
          this.setState({
            ...this.state,
            selectedCards: [],
            visibleCards: this.invisibleCards(),
            turnNumber: this.state.turnNumber + 1,
          });
        }
      }, 500);
    }
  }

  // Reset takes all cards and shuffle them into a new game
  resetGame() {
    this.setState({
      ...this.initialState,
      deck: shuffle(this.props.cards),
    });
  }

  render() {
    return (
      <div>
        <div style={text}>{this.props.name}</div>
        <div style={gridStyle}>
          {this.state.deck.map((card, id) => {
            return (
              <div
                key={id}
                style={
                  this.state.pairsRemoved[id]
                    ? { visibility: "hidden" }
                    : { visibility: "visible" }
                }
              >
                <button
                  disabled={this.state.visibleCards[id] ? true : false}
                  style={cardStyle}
                  onClick={() => {
                    this.setCardsVisible(card, id);
                  }}
                >
                  <img
                    style={
                      this.state.visibleCards[id]
                        ? imageStyle
                        : { display: "none" }
                    }
                    src={card.img}
                    alt=""
                  />
                </button>
              </div>
            );
          })}
        </div>
        <div style={text}>
          <div>Turn {this.state.turnNumber}</div>
          <button style={resetBtn} onClick={this.resetGame}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <Game name={"Memory Game"} cards={cards} />,
  document.getElementById("root")
);