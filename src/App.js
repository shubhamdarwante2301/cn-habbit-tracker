import HabbitList from "./components/HabbitList";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { GET_LOCAL_DATA } from './actions';
import { useEffect } from 'react';
import AddNewHabbit from './components/AddNewHabbit';
import HabbitWeekView from "./components/HabbitWeekView";
import useUpdateApp from "./components/utils/updateAppEveryDay";

function App() {
  useUpdateApp();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch({
      type: GET_LOCAL_DATA
    })
  },[dispatch])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HabbitList />} />
        <Route path="/new-habbit" element={<AddNewHabbit />} />
        <Route path="/week-view" element={<HabbitWeekView />} />
      </Routes>
    </div>
  );
}

export default App;
