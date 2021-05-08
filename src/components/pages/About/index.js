import Header from "../../molecules/Header";
import NavBar from "../../molecules/NavBar";

const About=()=>{
	return(
        <div>
        <Header />
        <NavBar />
		<div className="container-fluid mt-3">
		<h1>About</h1>
			<br></br>
			<div className="container col-md-4">
				<h2>Final Project Back-end Web Development</h2>	
				<br></br>
				<h5 key="artt">Nama : Lonteng, Arthur Efraim</h5>
				<h5>Nim : 105021810040</h5>
			</div>
			
		</div>
        </div>
		
	)
}

export default About;