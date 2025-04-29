import {Routes,Route} from 'react-router-dom';
import CountProgram from './components/Countprogram';
import JsonStringify from './components/JsonStringify';
import Performance from './components/Performance';

function App() {
  return (
    <Routes>
      <Route path='/no1' element={<CountProgram/>}/>
      <Route path='/no2' element={<JsonStringify/>}/>
      <Route path='/no3' element={<Performance/>}/>


        </Routes>
        );
}

export default App;
