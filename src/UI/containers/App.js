import Header from '../components/Header';
import Footer from '../components/Footer';

import NewFriend from '../../Friend/containers/NewFriend';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <NewFriend/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
