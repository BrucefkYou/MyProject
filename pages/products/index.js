import React, { useState, useEffect } from 'react'
import ProductList from '@/components/product/productList'

export default function Index(props) {
  return (
	<>
	<div className='product-index'>
		<ProductList />
	</div>
	</>
  )
}
