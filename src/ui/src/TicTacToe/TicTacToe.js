import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
	const [turn, setTurn] = useState('o');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState(false);
	const [disable, setDisable] = useState(true);
	const [start, setStart] = useState(false);
	const [gameData, setGameData] = useState();

	const handleClick = (num) => {
		let data = {}
		if (num === 0 & turn === 'x') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CROSS",
				choice: "CROSS",
				row: 0,
				column: 0,
			}
		}
		else if (num === 0 & turn === 'o') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CIRCLE",
				choice: "CIRCLE",
				row: 0,
				column: 0,
			}
		}
		else if (num === 1 & turn === 'x') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CROSS",
				choice: "CROSS",
				row: 0,
				column: 1,
			}
		}
		else if (num === 1 & turn === 'o') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CIRCLE",
				choice: "CIRCLE",
				row: 0,
				column: 1,
			}
		}
		else if (num === 2 & turn === 'x') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CROSS",
				choice: "CROSS",
				row: 0,
				column: 2,
			}
		}
		else if (num === 2 & turn === 'o') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CIRCLE",
				choice: "CIRCLE",
				row: 0,
				column: 2,
			}
		}
		else if (num === 3 & turn === 'x') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CROSS",
				choice: "CROSS",
				row: 1,
				column: 0,
			}
		}
		else if (num === 3 & turn === 'o') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CIRCLE",
				choice: "CIRCLE",
				row: 1,
				column: 0,
			}
		}
		else if (num === 4 & turn === 'x') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CROSS",
				choice: "CROSS",
				row: 1,
				column: 1,
			}
		}
		else if (num === 4 & turn === 'o') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CIRCLE",
				choice: "CIRCLE",
				row: 1,
				column: 1,
			}
		}
		else if (num === 5 & turn === 'x') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CROSS",
				choice: "CROSS",
				row: 1,
				column: 2,
			}
		}
		else if (num === 5 & turn === 'o') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CIRCLE",
				choice: "CIRCLE",
				row: 1,
				column: 2,
			}
		}
		else if (num === 6 & turn === 'x') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CROSS",
				choice: "CROSS",
				row: 2,
				column: 0,
			}
		}
		else if (num === 6 & turn === 'o') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CIRCLE",
				choice: "CIRCLE",
				row: 2,
				column: 0,
			}
		}
		else if (num === 7 & turn === 'x') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CROSS",
				choice: "CROSS",
				row: 2,
				column: 1,
			}
		}
		else if (num === 7 & turn === 'o') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CIRCLE",
				choice: "CIRCLE",
				row: 2,
				column: 1,
			}
		}
		else if (num === 8 & turn === 'x') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CROSS",
				choice: "CROSS",
				row: 2,
				column: 2,
			}
		}
		else if (num === 8 & turn === 'o') {
			data = {
				gameId: gameData.content.gameId,
				player1: "CIRCLE",
				choice: "CIRCLE",
				row: 2,
				column: 2,
			}
		}

		fetch('http://localhost:5639/v1/api/playGame', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				setGameData(data)
				if (data.content.winner !== null) {
					setDisable(true)
					setWinner(true)
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

	const Cell = ({ num }) => {
		return <td > <button disabled={disable} style={{ marginLeft: '-10px', fontSize: '100px', height: '120px', width: '120px', backgroundColor: 'white', border: '1px solid none', color: 'red' }} onClick={() => handleClick(num)}>
			{
				cells[num]==='x'?<span style={{ position: 'relative', bottom: '10px',color: 'saddlebrown' }}>{cells[num]}</span>:<span style={{ position: 'relative', bottom: '10px',color: 'orange'}}>{cells[num]}</span>
			}

		</button> </td >;
	};
	const playerSelect = (option) => {
		setTurn(option)
		let data = {}
		if (option === 'x') {
			data = {
				player1: 'CROSS'
			}
		}
		else if (option === 'o') {
			data = {
				player1: 'CIRCLE'
			}
		}
		fetch('http://localhost:5639/v1/api/playGame', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
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
			<div className='text-center' style={{ marginBottom: '-20px',color:'midnightblue' }}><h1>Tic Tac Toe Game</h1></div>
			{!start && <div style={{ display: 'flex' }}>
				<p style={{ marginRight: '10px' }}>Select First Player</p>
				<div style={{ marginTop: '16px' }}><button onClick={() => playerSelect('x')} style={{ marginRight: '10px' }}>Cross(x)</button>
					<button onClick={() => playerSelect('o')} style={{ marginRight: '10px'}}>Circle(o)</button></div>
				<br />
			</div>}
			{start ? <div className='text-center'><h3>Status: {gameData?.content.status}</h3></div> : <div></div>}


			<table style={{ display: 'flex' }}>
				<div>
					<tbody >

					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr style={{ position: 'relative', top: '-7px' }}>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr style={{ position: 'relative', top: '-14px' }}>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
					</tbody>
				</div>

			</table>

			{start && <div className='text-center' style={{ marginTop: '-30px' }} ><h4>{gameData?.content.message}</h4></div>}


			{winner && (
				<div style={{ marginTop: '-30px' }}>
					<div className='text-center '><p ><b>Result: </b><b style={{color: 'green'}}>{gameData?.content.winner}</b></p></div>

					<div style={{ marginTop: '-12px' }}>
						<button onClick={() => handleRestart()}>Play Again</button>
					</div>
				</div>
			)}

		</div>
	);
};

export default TicTacToe;
