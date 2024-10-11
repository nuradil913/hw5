import UserDetails from "./UserDetails";
import Username from "./Username";
import { BrowserRouter , Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
 
 <Routes>
   <Route path="/" element={<Username />} />
   <Route path="/user/:id" element={<UserDetails />} />
 </Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
