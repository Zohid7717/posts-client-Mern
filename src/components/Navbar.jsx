import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { checkIsAuth, logout } from '../redux/features/auth/authSlice';
import {toast} from 'react-toastify'

const Navbar = () => {
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()

  const activeStyle = {
    color: 'white'
  }

  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    toast('Вы вышли из системы!')
  }

  return (
    <div className='flex py-4 justify-between items-center'>
      <span className='flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm'>
        E
      </span>
      {
        isAuth && (
          <ul className="flex gap-8">
            <li>
              <NavLink
                to={"/"}
                className='text-xs text-gray-400 hover:text-white'
                style={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/posts"}
                className='text-xs text-gray-400 hover:text-white'
                style={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Мои посты
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/new"}
                className='text-xs text-gray-400 hover:text-white'
                style={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Добавить посит
              </NavLink>
            </li>
          </ul>
        )
      }
      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
        {
          isAuth ? (
            <button onClick={logoutHandler}>Выйти</button>
          ) : (
              <Link to={'/login'}>Войти</Link>
          )
        }
      </div>
    </div>
  );
}

export default Navbar;
