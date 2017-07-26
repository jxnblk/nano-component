import React from 'react'
import { ThemeProvider } from 'theming'
import NavBar from './NavBar'
import Header from './Header'
import Demo from './Demo'
import Features from './Features'
import GettingStarted from './GettingStarted'
import FunctionalStyles from './FunctionalStyles'
import CTA from './CTA'
import Footer from './Footer'

const theme = {
  colors: {
  }
}

const App = props => (
  <ThemeProvider theme={theme}>
    <div>
      <NavBar />
      <Header />
      <Demo />
      <Features />
      <GettingStarted />
      <FunctionalStyles />
      <CTA />
      <Footer />
    </div>
  </ThemeProvider>
)

export default App
