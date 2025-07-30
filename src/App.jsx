
import { useDispatch } from 'react-redux';
import './app.css'
import Routes from './routes';
import { useEffect } from 'react';
import { setToken } from './redux/slice/tokenSlice';
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [dispatch]);
   
  return (
    <>
      <Routes />
    </>
  )
}

export default App
