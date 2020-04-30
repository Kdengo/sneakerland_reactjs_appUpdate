import React from 'react';
import CardIni from './Components/card';
import NavBar from './Components/nav'
import Card from './Components/cajon';
import Card2 from './Components/cajon2';
import Formu from './Components/formu'
import Footer from './Components/footer'

function App() {
  return (
    <div >
       <header>


           <NavBar />
           <CardIni />

           <Card />

           <Card2 />
           <Formu />
           <Footer />

       </header>

    </div>
  );
}

export default App;
