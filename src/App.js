import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button";
import './styles/calculator/_calculator.scss';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="calculator-container mt-4">
          <div className="display-calculations">
              <div className="row">
                  <div className="d-flex
                  previous-entry
                  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12
                  justify-content-end"
                  >
                      50000
                  </div>
              </div>
              <div className="row current-entry-row">
                  <div className="d-flex
                  current-entry-detail
                  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12
                  justify-content-end"
                  >
                      2000
                  </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
