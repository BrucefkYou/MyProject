import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { fetchAllProducts } from '@/service/product';
export default function ProductList(props) {
	const router = useRouter();
	const [products, setProducts] = useState([]);
	const getProduct = async () => {
		const data = await fetchAllProducts();
		setProducts(data);
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<>
			{products.length > 0 ? (
				<ul>
					{products.map((product) => (
						<li key={product.ID}>
							ID: {product.ID}, Name: {product.Name}, Origin Price: {product.OriginPrice}
							<Link className='btn' href={`/products/${product.ID}`}>Link</Link>
						</li>
					))}
				</ul>
			) : (
				<p>No products available.</p>
			)}
		</>
	);
}
