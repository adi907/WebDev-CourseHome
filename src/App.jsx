// import reactLogo from './assets/react.svg'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "@/pages/Home/Home";
import RootLayout from "@/layouts/RootLayout";
import File from "@/pages/Home/File";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      
      <Route index element={<Home />} />

      
      <Route 
        exact
        path="/:fileName"
        element={<File />}
      />

    </Route>

  )

)

function App() {
  return <RouterProvider router={router} />;
}

export default App;