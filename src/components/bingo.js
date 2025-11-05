import React from 'react';
import './Bingo.css';

class Bingo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.populateData(),
            card: this.populateCard()
        };
    }

    populateData() {
        let data = [];
        for (let i = 1; i <= 75; i++) {
            data.push(i);
        }
        return data;
    }

    populateCard() {
        const numbers = this.state ? this.state.data : this.populateData();
        let card = [];
        for (let col = 0; col < 5; col++) {
            let offset = col * 15;
            let colNumbers = [];
            while (colNumbers.length < 5) {
                let idx = offset + Math.floor(Math.random() * 15);
                let num = numbers[idx];
                if (!colNumbers.includes(num)) {
                    colNumbers.push(num);
                }
            }
            card = card.concat(colNumbers);
        }
        return card;
    }

    getNumber(idx) {
        const bingoCard = this.state.card;
        let number = bingoCard[idx];
        return number;
    }

    render() {
        return (
            <div id="bingo-container">
                <div id="board">
                    {[0,1,2,3,4].map(row => (
                        <div className="row" key={row}>
                            {[0,1,2,3,4].map(col => {
                                let idx = col * 5 + row;
                                let value = (row === 2 && col === 2) ? "FREE" : this.getNumber(idx);
                                return (
                                    <div className="bingo" key={col}>
                                        <span>{value}</span>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Bingo;
