import React from "react";

//create your first component
const Home = () => {
	const [color, setColor] = React.useState("glow");
	let styleBox = {
		width: "50px",
		height: "50px",
		marginTop: "4px",
		borderRadius: "50%",
	};
	return (
		<div>
			<div className="palo">1</div>;
			<div className="semaforo mt-0">
				<div
					onClick={() => setColor("roja")}
					className={`roja + ${color === "roja" ? " glow" : ""}`}
					style={styleBox}></div>
				<div
					onClick={() => setColor("amarilla")}
					className={`amarilla + ${
						color === "amarilla" ? " glow" : ""
					}`}
					style={styleBox}></div>
				<div
					onClick={() => setColor("verde")}
					className={`verde + ${color === "verde" ? " glow" : ""}`}
					style={styleBox}></div>
			</div>
		</div>
	);
};

export default Home;
