import './App.css';
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { DataProvider } from './context/DataContext.jsx';

function App() {
  return (
      <DataProvider>
        <Header />
          <Outlet />
        <Footer />
      </DataProvider>
  );
}

export default App;
