// 獲得全部商品
export const fetchAllProducts = async () => {
	const url = 'http://localhost:3005/api/product/getAllProduct';
	
	try{
		const res = await fetch(url);
		const data = await res.json();
		if(data.result === 'success'){
			return data.data;
			console.log('get all products success');
		}else{
			console.log('get all products failed');
		}
	}catch(err){
		console.log('Error: ' + err);
	}
}

// 獲得單一商品
export const fetchProduct = async (id) => {
	try {
		const res = await fetch(`http://localhost:3005/api/product/${id}`);
		const data = await res.json();
		
		if (data.result === 'success') {
			console.log('get product success');
			return data.data;
		} else if (data.result === 'failed') {
			console.log('get product failed');
			throw new Error(data.message || 'Failed to fetch product');
		}
	} catch (error) {
		console.error('Error fetching product:', error);
		throw error;
	}
};

// 更新商品細節
export const updateProduct = async (id, name, originPrice) => {
	try{
		const res = await fetch('http://localhost:3005/api/product/updateProduct', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				ID: id,
				Name: name,
				OriginPrice: originPrice
			})
		});
		const data = await res.json();
		if(data.result === 'success'){
			console.log('update product success');
		}else{
			console.log('update product failed');
		}
	}catch(e){
		console.log('updateProduct Error: ' + e);
	}
}

