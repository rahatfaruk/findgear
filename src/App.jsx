import { Outlet } from "react-router-dom";

function App() {
  return (  
    <div>
      <h1 className="bg-blue-200 text-primary">App</h1>
      <Outlet />
    </div>
  );
}

export default App;