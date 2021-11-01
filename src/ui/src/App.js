import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import TicTacToe from './TicTacToe/TicTacToe';

function App() {
    return (
        <div style={{minHeight: '1025px'}} className='App'>
            <Router>
                <Route>
                    <TicTacToe/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
