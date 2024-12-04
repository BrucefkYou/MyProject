import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { fetchProduct, updateProduct } from '@/service/product';

export default function Product(props) {
	const router = useRouter();

	const [product, setProduct] = useState({
		ID: '',
		Name: '',
		OriginPrice: ''
	});
	const [newName, setNewName] = useState('');
	const [newPrice, setNewPrice] = useState(0);
	const { id } = router.query;

	const getProduct = async () => {
		const data = await fetchProduct(id);
		setProduct(data);
	};

	const handleProductUpdate = async (id, name, originPrice) => {
		const data = await updateProduct(id, name, originPrice);
		if (data) {
			router.push(`/products/${id}`);
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		handleProductUpdate(id, newName, newPrice);
	}

	useEffect(() => {
		if (id) getProduct();
	}, [id]);
	return (
		<>
			{product &&
				<>	
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">ID</label>
							<input type="text"
								value={product.ID}
								classname="form-control"
								readOnly />
						</div>
						<div className="mb-3">
							<label className="form-label">Name</label>
							<input type="text"
								value={product.Name}
								onChange={e => {
									setNewName(e.target.value);
								}}
								classname="form-control"/>
						</div>
						<div className="mb-3">
							<label className="form-check-label" htmlFor="exampleCheck1">OriginPrice</label>
							<input type="text"
								value={product.OriginPrice}
								onChange={e => {
									setNewPrice(e.target.value);
								}}
								classname="form-check-input"/>
						</div>
						<button type="submit" className="btn btn-primary">Update</button>
					</form>

				</>
			}
		</>
	)
}
