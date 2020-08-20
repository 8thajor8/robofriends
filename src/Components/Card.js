import React from 'react';

const Card = ({name, username, id, email}) =>{
	return (
		<div className= 'tc bg-light-green dib br4 pa2 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?size=200x200`} alt='robots' />
			<div >
				<h2 className= 'ma2'>{name}</h2>
				<h3 className= 'ma1'>{username}</h3>
				<p className= 'ma1'>{email}</p>
			</div>
		</div>
	);
}

export default Card;