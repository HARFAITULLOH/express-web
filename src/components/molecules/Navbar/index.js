import React, { useState } from 'react';
import './navbar.css';
import { useNavigate, NavLink } from 'react-router-dom';
import { Button, Logo, Link } from '../../atoms';


const Navbar = ({menu, btn_nav, path}) => {
  const navigate = useNavigate();
  const [menuBtn, setMenuBtn] = useState(false);

  const menuButton = () => {
    setMenuBtn(!menuBtn);
  }

  const menuPageButton = (path) => {
    navigate(path);
    menuButton();
  }

  return (
    <div className='navbar'>
      <div 
      className="brand-logo">
        < Logo />
      </div>

      <div 
      className="humberger-menu" 
      onClick={() => menuButton()}>
        <span
          style={(menuBtn) ?
            {
              border: '2px solid rgb(248, 248, 0)',
              transform: 'scale(0)',
              transition: 'all .5s'
            }
            :
            {
              border: '2px solid white',
              transition: 'all .5s'
            }
          }
        >
        </span>
        <span 
          style={
            {
              backgroundColor: 'blue',
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '3px',
            }
          }
          // style={(menuBtn) ?
          //   {
          //     border: '2px solid rgb(248, 248, 0)',
          //     transform: 'rotate(130deg)',
          //     transition: 'all 1s'
          //   }
          //   :
          //   {
          //     border: '2px solid white',
          //     transition: 'all 1s'
          //   }
          // }
        >
          <span 
          style={(menuBtn) ?
            {
              border: '2px solid rgb(248, 248, 0)',
              transform: 'rotate(140deg)',
              transition: 'all .5s',
              position: 'absolute',
              width: '30px',
            }
            :
            {
              border: '2px solid white',
              transition: 'all .5s',
              position: 'absolute',
              width: '30px',
            }
          }
          >
          </span>
          <span 
          style={(menuBtn) ?
            {
              border: '2px solid rgb(248, 248, 0)',
              transform: 'rotate(-140deg)',
              transition: 'all .5s',
              position: 'absolute',
              width: '30px',
            }
            :
            {
              border: '2px solid white',
              transition: 'all .5s',
              position: 'absolute',
              width: '30px',
            }
          }
          >
          </span>
        </span>
        <span 
          style={(menuBtn) ?
            {
              border: '2px solid rgb(248, 248, 0)',
              transform: 'scale(0)',
              transition: 'all .5s'
            }
            :
            {
              border: '2px solid white',
              transition: 'all .5s'
            }
          }
        >
        </span>
      </div>

      <div 
        className="menu-page" style={(menuBtn) ?
        {
          width: '100vw',
          position: 'fixed',
          top: 0,
          bottom: 0,
          zIndex: -1,
        }
        :
        {
          display: 'none'
        }
      }>
        <div className='content'>
          <Link title='HOME'
            onClick={() => menuPageButton('/')}
          />
          <Link title='SERVICE' 
            onClick={() => menuPageButton('/service')}
          />
          <Link title='ABOUT' 
            onClick={() => menuPageButton('/about')}
          />
          <Link title='REGISTER'
            onClick={() => menuPageButton('/register')}
          />
          <Button title='LOGIN'
            onClick={() => menuPageButton('/login')}
          />
        </div>
      </div>
      
      <div className="menu" >
        {menu.map((menu, i) => 
          ((menu === 'home' && path === '/') || 
            (menu === 'dashboard' && path === '/dashboard/')  
          ) ?
          (< NavLink 
              key={i}
              to={`${path}`}
          >
            {menu.toUpperCase()}
          </NavLink>
          )
          :
          (< NavLink 
              key={i}
              to={`${path}${menu.toLowerCase()}`}
          >
            {menu.toUpperCase()}
          </NavLink>
          )
        )}
      </div>

      <div className="btn-nav">
        { (path === '/') ?
          (<>
            < Link className='link' title='REGISTER' onClick={() => navigate('/register')}/>
            < Button title='LOGIN' onClick={() => navigate('/login')}/>
          </>
          )
          : 
          (<>
            < Link className='link' title='DASHBOARD' onClick={() => navigate('/dashboard')}/>
            < Button title='LOGOUT' onClick={() => {
                navigate('/');
                localStorage.removeItem('username');
              }}/>
          </>
          )
        }
      </div>
    </div>
  )
};

export default Navbar;