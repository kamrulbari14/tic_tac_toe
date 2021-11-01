import React, {useState} from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
    const [turn, setTurn] = useState('o');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState(false);
    const [disable, setDisable] = useState(true);
    const [start, setStart] = useState(false);
    const [gameData, setGameData] = useState();
    const [line1, setLine1] = useState('none');
    const [line2, setLine2] = useState('none');
    const [line3, setLine3] = useState('none');
    const [line4, setLine4] = useState('none');
    const [line5, setLine5] = useState('none');
    const [line6, setLine6] = useState('none');
    const [line7, setLine7] = useState('none');
    const [line8, setLine8] = useState('none');

    const handleClick = (num) => {
        let data = {}
        if (num === 0 & turn === 'x') {
            data = {
                gameId: gameData.content.gameId,
                player: "CROSS",
                choice: "CROSS",
                row: 0,
                column: 0,
            }
        } else if (num === 0 & turn === 'o') {
            data = {
                gameId: gameData.content.gameId,
                player: "CIRCLE",
                choice: "CIRCLE",
                row: 0,
                column: 0,
            }
        } else if (num === 1 & turn === 'x') {
            data = {
                gameId: gameData.content.gameId,
                player: "CROSS",
                choice: "CROSS",
                row: 0,
                column: 1,
            }
        } else if (num === 1 & turn === 'o') {
            data = {
                gameId: gameData.content.gameId,
                player: "CIRCLE",
                choice: "CIRCLE",
                row: 0,
                column: 1,
            }
        } else if (num === 2 & turn === 'x') {
            data = {
                gameId: gameData.content.gameId,
                player: "CROSS",
                choice: "CROSS",
                row: 0,
                column: 2,
            }
        } else if (num === 2 & turn === 'o') {
            data = {
                gameId: gameData.content.gameId,
                player: "CIRCLE",
                choice: "CIRCLE",
                row: 0,
                column: 2,
            }
        } else if (num === 3 & turn === 'x') {
            data = {
                gameId: gameData.content.gameId,
                player: "CROSS",
                choice: "CROSS",
                row: 1,
                column: 0,
            }
        } else if (num === 3 & turn === 'o') {
            data = {
                gameId: gameData.content.gameId,
                player: "CIRCLE",
                choice: "CIRCLE",
                row: 1,
                column: 0,
            }
        } else if (num === 4 & turn === 'x') {
            data = {
                gameId: gameData.content.gameId,
                player: "CROSS",
                choice: "CROSS",
                row: 1,
                column: 1,
            }
        } else if (num === 4 & turn === 'o') {
            data = {
                gameId: gameData.content.gameId,
                player: "CIRCLE",
                choice: "CIRCLE",
                row: 1,
                column: 1,
            }
        } else if (num === 5 & turn === 'x') {
            data = {
                gameId: gameData.content.gameId,
                player: "CROSS",
                choice: "CROSS",
                row: 1,
                column: 2,
            }
        } else if (num === 5 & turn === 'o') {
            data = {
                gameId: gameData.content.gameId,
                player: "CIRCLE",
                choice: "CIRCLE",
                row: 1,
                column: 2,
            }
        } else if (num === 6 & turn === 'x') {
            data = {
                gameId: gameData.content.gameId,
                player: "CROSS",
                choice: "CROSS",
                row: 2,
                column: 0,
            }
        } else if (num === 6 & turn === 'o') {
            data = {
                gameId: gameData.content.gameId,
                player: "CIRCLE",
                choice: "CIRCLE",
                row: 2,
                column: 0,
            }
        } else if (num === 7 & turn === 'x') {
            data = {
                gameId: gameData.content.gameId,
                player: "CROSS",
                choice: "CROSS",
                row: 2,
                column: 1,
            }
        } else if (num === 7 & turn === 'o') {
            data = {
                gameId: gameData.content.gameId,
                player: "CIRCLE",
                choice: "CIRCLE",
                row: 2,
                column: 1,
            }
        } else if (num === 8 & turn === 'x') {
            data = {
                gameId: gameData.content.gameId,
                player: "CROSS",
                choice: "CROSS",
                row: 2,
                column: 2,
            }
        } else if (num === 8 & turn === 'o') {
            data = {
                gameId: gameData.content.gameId,
                player: "CIRCLE",
                choice: "CIRCLE",
                row: 2,
                column: 2,
            }
        }

        fetch('/v1/api/playGame', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                setGameData(data)
                if (data.content.winner !== null) {
                    setDisable(true)
                    setWinner(true)
                }
                if (data.content.winningCell === "[0, 1, 2]") {
                    setLine1('block')
                } else if (data.content.winningCell === "[3, 4, 5]") {
                    setLine2('block')
                } else if (data.content.winningCell === "[6, 7, 8]") {
                    setLine3('block')
                } else if (data.content.winningCell === "[0, 3, 6]") {
                    setLine4('block')
                } else if (data.content.winningCell === "[1, 4, 7]") {
                    setLine5('block')
                } else if (data.content.winningCell === "[2, 5, 8]") {
                    setLine6('block')
                } else if (data.content.winningCell === "[0, 4, 8]") {
                    setLine7('block')
                } else if (data.content.winningCell === "[2, 4, 6]") {
                    setLine8('block')
                }
            })

            .catch(error => {
                console.error(error)
            })

        if (cells[num] !== '') {
            alert("Already inserted!!");
            return;
        }

        let squares = [...cells];

        if (turn === 'x') {
            squares[num] = 'x';
            setTurn('o');
        } else {
            squares[num] = 'o';
            setTurn('x');
        }
        setCells(squares);
    };

    const handleRestart = () => {
        window.location.reload()
    };

    const Cell = ({num}) => {
        return <td>
            <button disabled={disable} style={{
                marginLeft: '-10px',
                fontSize: '100px',
                height: '120px',
                width: '120px',
                backgroundColor: 'white',
                border: '1px solid none',
                color: 'red'
            }} onClick={() => handleClick(num)}>
                {
                    cells[num] === 'x' ?
                        <span style={{position: 'relative', bottom: '10px', color: 'saddlebrown'}}>{cells[num]}</span> :
                        <span style={{position: 'relative', bottom: '10px', color: 'orange'}}>{cells[num]}</span>
                }

            </button>
        </td>;
    };
    const playerSelect = (option) => {
        setTurn(option)
        let data = {}
        if (option === 'x') {
            data = {
                player: 'CROSS'
            }
        } else if (option === 'o') {
            data = {
                player: 'CIRCLE'
            }
        }
        fetch('/v1/api/playGame', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setStart(true)
                }
                setGameData(data)
                setDisable(false)
            })

            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='container'>
            <div className='text-center' style={{marginBottom: '3px', color: 'midnightblue'}}><h1>Tic Tac Toe Game</h1>
            </div>
            {!start && <div style={{display: 'flex'}}>
                <font size={'4'} style={{marginRight: '10px'}}><b>Select First Player</b></font>
                <div style={{marginBottom: '10px'}}>
                    <button onClick={() => playerSelect('x')} style={{marginRight: '7px'}}><b>Cross(x)</b></button>
                    <button onClick={() => playerSelect('o')} style={{marginRight: '18px'}}><b>Circle(o)</b></button>
                </div>
                <br/>
            </div>}
            {start ?
                <div className='text-center'><font size={'4'}><b>Status: </b>{gameData?.content.status}</font></div> :
                <div></div>}


            <table style={{display: 'flex'}}>
				<div style={{ display: 'flex' }}>
					<div style={{ display: 'flex', zIndex: 1 }}>

						<div style={{
							width: '4px', height: '320px', backgroundColor: 'black', marginRight: '10px', position: 'relative', left: '65px', top: '15px',
							display: `${line4}`
						}}></div>
						<div style={{
							width: '4px', height: '320px', backgroundColor: 'black', marginRight: '10px', position: 'relative', left: '179px', top: '15px',
							display: `${line5}`
						}}></div>
						<div style={{
							width: '4px', height: '320px', backgroundColor: 'black', marginRight: '10px', position: 'relative', left: '293px', top: '15px',
							display: `${line6}`
						}}></div>
					</div>
					<div style={{ display: 'flex', zIndex: 1 }}>
						<div style={{
							width: '4px', height: '380px', backgroundColor: 'black', transform: 'rotate(44deg)', position: 'relative', left: '158px',
							display: `${line8}`
						}}></div>
						<div style={{
							width: '4px', height: '380px', backgroundColor: 'black', transform: 'rotate(136deg)', position: 'relative', left: '176px',
							display: `${line7}`
						}}></div>
					</div>
				</div>
                <div>
                    <tbody>

                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr style={{position: 'relative', top: '-7px'}}>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr style={{position: 'relative', top: '-14px'}}>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                    </tbody>
                </div>

            </table>
			<div >

				<div style={{ width: '300px', height: '4px', backgroundColor: 'black', position: 'relative', bottom: '315px', right: '8px', display: `${line1}` }}></div>

				<div style={{ width: '300px', height: '4px', backgroundColor: 'black', position: 'relative', bottom: '198px', right: '8px', display: `${line2}` }}></div>

				<div style={{ width: '300px', height: '4px', backgroundColor: 'black', position: 'relative', bottom: '82px', right: '8px', display: `${line3}` }}></div>
			</div>

            {start && <div className='text-center' style={{marginTop: '-10px'}}><font
                size={'3'}>{gameData?.content.message}</font></div>}


            {winner && (
                <div style={{marginTop: '3px'}}>
                    <div className='text-center '><font size={'3'}><b>Result: </b><b
                        style={{color: 'green'}}>{gameData?.content.winner}</b></font></div>

                    <div style={{marginTop: '6px'}}>
                        <button onClick={() => handleRestart()}>Play Again</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default TicTacToe;
