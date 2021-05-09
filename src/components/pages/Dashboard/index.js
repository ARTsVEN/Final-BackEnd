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
			<div>
				<Header />
				<NavBar />
				<h2>Test</h2>
				<div className="row">
				{
				product.map(item => (
						<div className="card shadow-md col-md-4 mb-2 ml-auto" key={item.id}>
						<p>{item.title}</p>
						<p>{item.genre}</p>
						<p>{item.description}</p>
						{/* <img src={item.gambar} alt="..."></img> */}
						<Link to={`/info/${item.id}`}><img src={item.gambar} className="card-img-top" alt="..." /></Link>
						</div>
				))
				}
				</div>
			</div>
		</div>
	)
}

export default Dashboard
