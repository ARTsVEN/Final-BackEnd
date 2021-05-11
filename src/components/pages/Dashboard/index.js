import React, {useEffect, useState} from 'react'
import Header from '../../molecules/Header'
import NavBar from '../../molecules/NavBar'
import firebase from '../../../config/Firebase';
import { Link } from 'react-router-dom';


const Dashboard = () => {
	const [product, setProduct]= useState([]);

	useEffect(()=>{
		firebase
		.database()
		.ref('film')
		.on('value', (res) => {
			if (res.val()){
				//ubah menjadi array object
				const rawData = res.val()
				const productArr = [];
				// console.log(Object.keys(rawData));
				Object.keys(rawData).map((item) => {
					productArr.push({
						id: item,
						...rawData[item],
					})
				});
				setProduct(productArr);
				
			}
		})
		console.log(product)
	},[]);
	return (
		<div>
			<div style={{ minHeight:'100vh',width:'100%',
			backgroundImage: `url("http://www.questarai.com/wp-content/uploads/2016/10/fullwidth-header-background-image-1080x720.png")`}}>
				<Header />
				<NavBar />
				<div className="row">
				{
				product.map(item => (
						<div style={{borderColor: 'black', borderWidth:1}}className="card shadow-sm col-md-4 mb-2 mt-2" key={item.id}>
						<div>
						<Link to={`/info/${item.id}`}><img  src={item.gambar} className="card-img-top"style={{height:300, width:'100%'}} alt="..." /></Link>
						</div>
						<br></br>
						<hr></hr>
						<p className="fs-4">Title : <span className="fs-5">{item.title}</span></p>
						<hr></hr>
						<p className="fs-4">Genre : <span className="fs-5">{item.genre}</span></p>
						{/* <p>{item.description}</p> */}
						{/* <img src={item.gambar} alt="..."></img> */}
						</div>
				))
				}
				</div>
			</div>
		</div>
	)
}

export default Dashboard
