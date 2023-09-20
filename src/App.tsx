import React, {createContext, useState} from 'react';
import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import ProtectedAlreadyConnectedRoute from "./classes/ProtectedAlreadyConnectedRoute";
import ProtectedAuthRoute from "./classes/ProtectedAuthRoute";
import {User as UserModel} from "./models/UserModel";
import User from "./classes/User";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

const exclusionArray = [
  '/login',
  '/register',
]

type propsContext = {
  user: UserModel | undefined,
  setUser:  React.Dispatch<React.SetStateAction<UserModel | undefined>>,
}

const defaultState = {
  user: User.getUser(),
  setUser: () => {}
};

export const UserContext = createContext<propsContext>(defaultState);

function App() {
  // const {user, setUser} = useContext(UserContext);
  const [user, setUser] = useState<UserModel>()

  const location = useLocation();
  return (
      <>
        <UserContext.Provider value={{user, setUser}}>
          <div className="h-screen flex flex-col">
            {/*{exclusionArray.indexOf(location.pathname) < 0 && <Header/>}*/}
            <div className="flex flex-1 overflow-y-auto">
              <Routes>
                <Route path="" >
                    <Route
                        index
                        element={
                            <ProtectedAuthRoute>
                                <Home />
                            </ProtectedAuthRoute>
                        }
                    />
                    <Route
                      path="login"
                      element={
                        <ProtectedAlreadyConnectedRoute>
                          <Login />
                        </ProtectedAlreadyConnectedRoute>
                      }
                    />
                    <Route
                      path="register"
                      element={
                        <ProtectedAlreadyConnectedRoute>
                          <Register />
                        </ProtectedAlreadyConnectedRoute>
                      }
                    />
                  {/*<Route*/}
                  {/*    path="user"*/}
                  {/*    element={*/}
                  {/*      <ProtectedAuthRoute>*/}
                  {/*        <Nav />*/}
                  {/*      </ProtectedAuthRoute>*/}
                  {/*    }*/}
                  {/*>*/}
                  {/*  <Route path="profile" element={<Profile />}/>*/}
                  {/*  <Route path="change-password" element={<Password />}/>*/}
                  {/*  <Route path="tickets" element={<Tickets />}/>*/}
                  {/*  <Route path="purchased" element={<Purchased />}/>*/}
                  {/*  <Route path="for-sale" element={<ForSale />}/>*/}
                  {/*  <Route path="sold" element={<Sold />}/>*/}
                  {/*  <Route*/}
                  {/*      path="sell-ticket"*/}
                  {/*  >*/}
                  {/*    <Route index element={<SellTicket/>}/>*/}
                  {/*    <Route path="sport">*/}
                  {/*      <Route path="new" element={<AddSportTicket />}/>*/}
                  {/*    </Route>*/}
                  {/*    <Route path="spectacle">*/}
                  {/*      <Route path="new" element={<AddSpectacleTicket />}/>*/}
                  {/*    </Route>*/}
                  {/*    <Route path="*" element={<NotFound />} />*/}
                  {/*  </Route>*/}
                  {/*  <Route path="*" element={<NotFound />} />*/}
                  {/*</Route>*/}
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </div>
          </div>
        </UserContext.Provider>
      </>
  );
}

export default App;
