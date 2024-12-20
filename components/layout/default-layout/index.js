import React, { useState, useEffect, Children } from 'react'
import Header from './header'
import Footer from './footer'

export default function DefaultLayout({ children }) {
  return (
	<>
	  <Header />
	  <main>{children}</main>
	  <Footer />
	</>
  )
}
