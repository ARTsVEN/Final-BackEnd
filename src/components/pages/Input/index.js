import React, { useState, useEffect } from 'react';
import firebase from '../../../config/Firebase';
import Header from '../../molecules/Header';
import NavBar from '../../molecules/NavBar';

const Input = () => {

        const [title, setTitle] = useState("")
        const [genre, setGenre] = useState("")
        const [gambar, setGambar] = useState("")
        const [product, setProduct] = useState ([])
        const [button, setButton] = useState("Save");
        const [selectedProduct, setSelectedProduct] = useState({});
        const [description, setDescription] = useState("")
        

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
        },[]);
        const handleGambar = e => {
            const reader = new
            FileReader();
            reader.onloadend = function (){
                setGambar(reader.result);
            };
            reader.readAsDataURL(e);
        };

        const resetForm = () => {
            setTitle("")
            setGenre("")
            setGambar("")
            setDescription("")
            setButton("Save")
            setSelectedProduct("")
            
        }

        const onSubmit = () => {
            const data = {
                title: title,
                genre: genre,
                gambar: gambar,
                description: description,
            };
            if(button === 'Save'){
                // insert
                firebase.database().ref('film').push(data);
            }else{
                // update
                firebase.database().ref(`film/${selectedProduct.id}`).set(data);
            }
            resetForm();
        }

        const onUpdateData = (item) => {
            setTitle(item.title);
            setGenre(item.genre);
            setGambar(item.gambar);
            setDescription(item.description);
            setButton('Update');
            setSelectedProduct(item);
        }

        const onDeleteData = (item) => {
            // delete
            firebase.database().ref(`film/${item.id}`).remove();
        }
    return (
		<div style={{ 
            backgroundImage: `url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v606-aew-58-gradientbackground_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=dd69194345bc62f5d1ba42a0bca5cab0")`}}>
			<Header />
			<NavBar />
		
        <div>
        
        <div style={{ 
      backgroundImage: `url("http://www.questarai.com/wp-content/uploads/2016/10/fullwidth-header-background-image-1080x720.png")`}}className="container mt-5">
            <h2>Input Data</h2>
            <div className="col-6">
                <p className="mt-5">Title</p>
                <input className="form-control" 
                placeholder="Type the product name" 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                />
                <br></br>
                <p>Genre</p>
                <input className="form-control" 
                placeholder="Type the Genre" 
                value={genre} 
                onChange={(e)=>setGenre(e.target.value)}
                />
                <br></br>
                <p>Image</p>
                <input className="form-control" 
                type="file"
                id="gambar"
                onChange={e => handleGambar(e.target.files[0])}
                />
                <br></br>
                <p>Description</p>
                <input className="form-control" 
                placeholder="Type the description" 
                value={description} 
                onChange={(e)=>setDescription(e.target.value)}
                />  
                <br />
                <button className="btn btn-primary" onClick={onSubmit}>{button}</button> 
                {
                    // conditional rendering
                    button === "Update" && <button className="btn btn-secondary" onClick={resetForm}>
                    Cancel Update
                </button>
                }
            </div>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        {/* <th>Gambar</th> */}
                        {/* <th>Description</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.genre}</td>
                                {/* <td>{item.gambar}</td> */}
                                {/* <td>{item.description}</td> */}
                                <td>
                                    <button className="btn btn-success" onClick={()=>onUpdateData(item)}>Edit</button>
                                    <button className="btn btn-danger" onClick={()=>onDeleteData(item)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
		</div>
    )
}

export default Input;
