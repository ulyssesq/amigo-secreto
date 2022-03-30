import Header from '../components/Header';
import Footer from '../components/Footer';
import NewFriend from '../../friend/containers/New';
import AllFriends from '../../friend/containers/All';
import Home from '../../ui/containers/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/amigos/convidar" element={<NewFriend/>}/>        
        <Route path="/amigos/todos" element={<AllFriends/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </main>      
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
