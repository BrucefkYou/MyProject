import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { fetchProduct, updateProduct } from '@/service/product';
import Link from 'next/link';

export default function Product(props) {
	const router = useRouter();
	const [product, setProduct] = useState({
		ID: '',
		Name: '',
		OriginPrice: ''
	});
	const { id } = router.query;
	const getProduct = async () => {
		const data = await fetchProduct(id);
		setProduct(data);
	};

	const handleProductUpdate = async (id, name, originPrice) => {

	};

	useEffect(() => {
		if (id) getProduct();
	}, [id]);
	return (
		<>
			{product &&
				<>	
					<Link className='btn btn-primary' href={`/products/updateProduct/${id}`}>Update</Link>
					<form onSubmit={handleProductUpdate()}>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">ID</label>
							<input type="text"
								value={product.ID}
								classname="form-control"
								required />
						</div>
						<div className="mb-3">
							<label className="form-label">Name</label>
							<input type="text"
								value={product.Name}
								classname="form-control"
								required />
						</div>
						<div className="mb-3">
							<label className="form-check-label" htmlFor="exampleCheck1">OriginPrice</label>
							<input type="text"
								value={product.OriginPrice}
								classname="form-check-input"
								required />
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>

				</>
			}
		</>
	)
}
