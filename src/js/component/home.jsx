import React, { useState } from "react";


const Home = () => {
	const [color, setColor] = useState("");
	//const [alternate, setAlternate] = useState("");

	return (
		
		<div className="container traffic-light ">
			<div onClick={()=>setColor("red")} className={"red"+ (color==="red"? " glow": "" )}>

			</div>
			<div onClick={()=>setColor("yellow")} className={"yellow"+ (color==="yellow"? " glow": "" )}>

			</div>
			<div onClick={()=>setColor("green")} className={"green"+ (color==="green"? " glow": "" )}>

			</div>
		</div>
		
	);
};

export default Home;
