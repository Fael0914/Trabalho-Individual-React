import { Routes, Route} from 'react-router'
import { Home } from '../Pages/Home/index'
import { Login } from './../Pages/Login/index';
import {NotFound} from '../Pages/NotFound/index'
export const Router = () => {
return (
<Routes>
<Route path='/home' element={<Home />} />
<Route path='/' element={<Login />} />
<Route path='*' element={<NotFound />} />
</Routes>
)
}