import './App.css';
import Button from "react-bootstrap/Button";
import './styles/calculator/_calculator.scss';
import React from 'react';

function App() {
    return (
        <Calculator/>
    );
}

export default App;


class TopRowDisplay extends React.Component {
    render() {
        return (
            <div className="prev-entry-row">
                <div className="d-flex
                  previous-entry
                  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12
                  justify-content-end
                  p-3
                  "
                >
                    50000
                </div>
            </div>
        );
    }
}

function BottomRowDisplay() {
    return (
        <div className="current-entry-row">
            <div className="d-flex
                  current-entry-detail
                  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12
                  justify-content-end"
            >
                2000
            </div>
        </div>
    );
}

class CalcDisplay extends React.Component {
    render() {
        return (
            <div className="row display-calculations">
                <TopRowDisplay/>
                <BottomRowDisplay/>
            </div>
        );
    }
}

export function CalcButton(props) {
    const colSize = 3 * props.size;

    return (
        <div className={`col-${colSize} col-sm-${colSize} col-md-${colSize} col-lg-${colSize} col-xl-${colSize} calc-button`}>
            <Button variant="primary" className={"w-100 mb-1"}>
                { props.text }
            </Button>
        </div>
    );
}

class CalcButtons extends React.Component {
    render() {
        const buttonsArray = {
            'row_1' : {
                'AC': 2,
                'C': 1,
                '+': 1
            },
            'row_2': {
                '1': 1,
                '2': 1,
                '3': 1,
                '-': 1,
            },
            'row_3': {
                '4': 1,
                '5': 1,
                '6': 1,
                'x': 1,
            },
            'row_4': {
                '7': 1,
                '8': 1,
                '9': 1,
                '/': 1,
            },
            'row_5': {
                '0': 3,
                '=': 1,
            },
        };

        let calculatorButtons = [];

        Object.keys(buttonsArray).forEach(rowKey => {
            Object.keys(buttonsArray[rowKey]).forEach(buttonKey => {
                calculatorButtons.push(<CalcButton
                    key={buttonKey}
                    text={buttonKey}
                    size={buttonsArray[rowKey][buttonKey]}
                />);
            });
        });

        return (
            <div className="row calc-buttons-row">
                {calculatorButtons}
            </div>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="calculator-container mt-4 mx-auto">
                        <CalcDisplay/>
                        <CalcButtons/>
                    </div>
                </div>
            </div>);
    }
}