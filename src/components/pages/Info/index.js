import React,{useEffect, useState} from 'react'
import firebase from '../../../config/Firebase';
import { Link } from 'react-router-dom';
import Header from '../../molecules/Header';
import NavBar from '../../molecules/NavBar';

const Info = () => {

    const [product, setProduct]= useState([]);

	useEffect(()=>{
		firebase
		.database()
		.ref('film/'+window.location.href.split('/')[4])
		.on('value', (res) => {
			if (res.val()){
				//ubah menjadi array object
				const rawData = res.val()
				
				// console.log(Object.keys(rawData));
				setProduct(rawData)
				console.log(rawData)
			}
		})
		console.log(product)
        console.log(window.location.href.split('/')[4]);
	},[]);
    
    // console.log("test");
    // console.log(window.location.href.split('/')[4]);

    return (
        <div style={{ minHeight:'100vh',
        backgroundImage: `url("http://www.questarai.com/wp-content/uploads/2016/10/fullwidth-header-background-image-1080x720.png")`}}>
            <Header />
            <NavBar />
            <div className="row mt-4 p-2">
                <div style={{width:400}}className="card col-sm-3 pl-3">
                    <img src={product.gambar} alt="..."></img>
                </div>
                <div className="col-sm-6">
                    <p className="fs-4">Title : <span className="fs-5">{product.title}</span></p>
                    <br></br>
                    <p className="fs-4">Genre : <span className="fs-5">{product.genre}</span></p>
                </div>
            </div>
            <br></br>
            <hr />
            <p className="fs-3 p-3">Description : <span className="fs-5">{product.description}</span></p>
        </div>
    )
}

export default Info



// product(item => (
//                     <div className="card shadow-md col-md-3 mb-2" key={item.id}>
//                     {/* <Link to={`/info/${item.id}`}><img src={item.gambar} className="card-img-top" alt="..." /></Link> */}
//                     <img src={item.gambar} alt="..."></img>
//                     <br></br>
//                     <hr></hr>
//                     <p>Title : {item.title}</p>
//                     <hr></hr>
//                     <p>Genre : {item.genre}</p>
//                     {/* <p>{item.description}</p> */}
//                     </div>
//             ))