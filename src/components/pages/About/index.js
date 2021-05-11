import Header from "../../molecules/Header";
import NavBar from "../../molecules/NavBar";

const About=()=>{
	return(
        <div style={{ minHeight:'100vh',width:'100%',
			backgroundImage: `url("http://www.questarai.com/wp-content/uploads/2016/10/fullwidth-header-background-image-1080x720.png")`}}>
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