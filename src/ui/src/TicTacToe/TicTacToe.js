import React,{useState} from 'react';

export const TicTacToe = () => {
	const [cells, setCells] = useState(Array(9));

	const Cell = ({ num }) => {
		return <td > <button style={{ marginLeft: '-10px', fontSize: '100px', height: '120px', width: '120px', backgroundColor: 'white', border: '1px solid none', color: 'red' }} /*onClick={() => handleClick(num)}*/>
			{
				cells[num]==='x'?<span style={{ position: 'relative', bottom: '10px',color: 'red' }}>{cells[num]}</span>:<span style={{ position: 'relative', bottom: '10px',color: 'orange'}}>{cells[num]}</span>
			}

		</button> </td >;
	};
	return (
		<div className='container'>
			<div className='text-center' style={{ marginBottom: '-20px' }}><h1>Tic Tac Toe Game</h1></div>
			<table className="center" style={{ marginLeft: '590px',color:'red' }}>
				<div style={{position: 'center'}}>
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
		</div>
	);
}

