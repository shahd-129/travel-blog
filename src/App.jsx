
import { useDispatch } from 'react-redux';
import './app.css'
import Routes from './routes';
import { useEffect } from 'react';
import { setToken, setUserId } from './redux/slice/tokenSlice';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    if (storedToken, storedUserId) {
      dispatch(setToken(storedToken));
      dispatch(setUserId(storedUserId))
    }
  }, [dispatch]);

  return (
    <>
      <Routes />
    </>
  )
}

export default App
