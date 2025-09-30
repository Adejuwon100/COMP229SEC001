import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './About'
import Contact from './contact'
import Education from './education'
import Project from './project'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

const MainRouter = () => {
return (<div>
<Navbar />
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/education" element={<Education />} />
<Route exact path="/project" element={<Project />} />
<Route exact path="/contact" element={<Contact />} />
<Route exact path="/footer" element={<Footer />} />
<Route exact path="/navbar" element={<Navbar />} />

</Routes>
</div>
)
}
export default MainRouter