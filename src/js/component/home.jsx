import React, { useState } from "react";


const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div className="container d-flex">
		<div className="container traffic-light ">
			<div onClick={()=>setColor("red")} className={"red"+ (color==="red"? " glow": "" )}>

			</div>
			<div onClick={()=>setColor("yellow")} className={"yellow"+ (color==="yellow"? " glow": "" )}>

			</div>
			<div onClick={()=>setColor("green")} className={"green"+ (color==="green"? " glow": "" )}>

			</div>
		</div>
		<div className="container d-flex">
		<button type="button" class="btn btn-primary">Primary</button>
		</div>
		</div>
	);
};

export default Home;
