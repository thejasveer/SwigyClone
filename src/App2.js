import React from'react';
import ReactDOM from'react-dom/client';    
import  Header  from './components/Header';   
import  Body   from './components/Body';   
import  About   from './components/About';   
// import  Contact   from './components/Contact';   s
// import Error from './components/Error';
// import ResMenu from './components/ResMenu';
import {lazy,Suspense} from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Shimmer } from './components/Shimmer';
import UserContext from './utils/UserContext'; 
import { useState } from 'react';

const Contact = lazy(()=> import('./components/Contact'))
const Error = lazy(()=> import('./components/Error'))
const ResMenu = lazy(()=> import('./components/ResMenu'))

    
const AppLayout = ()=>{
    const [username,setUserName] = useState("Jasveer");

    return (
        <UserContext.Provider value={{loggedInUser:username,setUserName}}>
        
        <div className='app'>
            <Header/>
            <Outlet />
        </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element:<AppLayout/> ,
        children:[
            {
                path: '/',
                element:<Body/> 
            },
            {
                path: '/about',
                element:<About/> 
            }, 
            {
                path: '/contact',
                element:<Suspense fallback={<Shimmer/>}><Contact/> </Suspense>
            },
            {
                path:'/res/:id',
                element: <Suspense fallback={<Shimmer/>}><ResMenu/> </Suspense>
            }
        ],
        errorElement:<Suspense fallback={<Shimmer/>}><Error/> </Suspense>

    }, 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);