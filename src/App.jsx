// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";

// import Navbar from "./components/Navbar";
// import PrivateRoute from "./routes/PrivateRoute";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Transfer from "./pages/Transfer";
// import Profile from "./pages/Profile";


// export default function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Navbar />
//         <div className="container mx-auto mt-6">
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             <Route
//               path="/"
//               element={
//                 <PrivateRoute>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/transfer"
//               element={
//                 <PrivateRoute>
//                   <Transfer />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/profile"
//               element={
//                 <PrivateRoute>
//                   <Profile />
//                 </PrivateRoute>
//               }
//             />

//             {/* Add a fallback 404 page or redirect as needed */}
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import PrivateRoute from "./routers/PrivateRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/transfer" element={<PrivateRoute><Transfer /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}