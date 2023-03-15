import './App.css';

import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction'
import Challenge from './components/Challenge/Challenge'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import Subscription from './components/Subscription/Subscription'
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduction></Introduction>
      <Challenge></Challenge>
      <Services></Services>
      <Title></Title>
      <Subscription></Subscription>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
