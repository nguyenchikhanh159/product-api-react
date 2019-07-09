import React from 'react';
import HomePage from './pages/HomePages/HomePage';
import NotFoundPage from './pages/NotFoundPages/NotFoundPage';
import ProductListPage from './pages/ProductListPages/ProductListPage';
import ProductActionPage from './pages/ProductsActionPages/ProductActionPage';


const routes=[
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:'/product-list',
        exact:false,
        main:()=><ProductListPage/>
    },
    {
        path:'/product/add',
        exact:false,
        main:({history})=><ProductActionPage history={history}/>
    },
    {
        path:'/product/:id/edit',
        exact:false,
        main:({match,history})=><ProductActionPage match={match} history={history}/>
    },
    {
        path:'', 
        exact:true,
        main:()=><NotFoundPage/>
    }  
];

export default routes;