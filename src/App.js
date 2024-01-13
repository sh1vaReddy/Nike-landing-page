import './App.css';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Superquality from './sections/Superquality';
import Custoerreview from './sections/Customerreview';
import Subribe from './sections/Subscribe';
import Footer from './sections/Footer';
import Popularporductit from './sections/Popularporductit';
import Specialoffer from './sections/Specialoffer';



function App() {
  return (
    <div>
      <main className="relative">
        <Nav/>
        <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
       <section className="padding-x py-10">
        <Popularporductit/>
      </section>
      <section className="padding">
        <Superquality/>
      </section>
      <section className="padding">
       <Specialoffer/>
      </section>
      <section className="bg-blue-100	 padding">
        <Custoerreview/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
       <Subribe/>
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
      </main>
     
     
    </div>
  );
}

export default App;
