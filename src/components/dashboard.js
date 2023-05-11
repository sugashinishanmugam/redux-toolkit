import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Navigation from './navbar';
const Dashboard = () => {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </Provider>
  )
}

export default Dashboard
