import React, { useState, useEffect } from 'react'
import UpdateProduct from '@/components/product/updateProduct'

export default function Index(props) {
	return (
		<>
			<div className="container">
				<p>Update Your Product</p>
				<UpdateProduct />
			</div>
		</>
	)
}
