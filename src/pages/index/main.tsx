import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '@src/components/Header.tsx'
import Footer from '@src/components/Footer.tsx'
import MainSection from '@src/components/Main.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <MainSection />
    <Footer />
  </React.StrictMode>,
)
