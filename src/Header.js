import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"
import logol from "./logol.png"
import Swal from 'sweetalert2'


// console.log(bg)

const alert =()=>{
  Swal.fire("PLEASE LOGIN OR CREATE NEW ACCOUNT BEFORE ADDING ITEMS TO CART")
}


function Header() {

  const [{ basket ,user},dispatch] = useStateValue();
  
  const handleauth=() =>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to="/">
        <img  className='headlogo' src={logol} />
      </Link>
       
        <div className='headsearch'>
            <input className='headsearchin' type='text'/>
            <SearchIcon className='headsearchi'/>
            {/* logo */}
        </div>
        <div className='headnav'>
          <Link to={!user &&'/login'}>
            <div onClick={handleauth} className='headoption'>
              <span onClick={alert}  className='headopone'>
                Hello {!user ? 'Homosapien ' : user.email}
              </span>
              <span onClick={alert} className='headoptwo'>
                {user?'sign out' :'sign in'}
              </span>
            </div>
          </Link>
       

          <Link to='/orders'>
          <div className='headoption'>
            <span className='headopone'>
              Returns
            </span>
            <span className='headoptwo'>
              &orders
            </span>
          </div>
          </Link>


          <div className='headoption'>
            <span className='headopone'>
              connect your
            </span>
            <span className='headoptwo'>
              Business
              </span>
          </div>
          <Link to="/Checkout">
          <div className='headoptionbas'>
            <ShoppingBasketIcon onClick={alert} />
            <span className='headoptwo  headopc'>{basket?.length}
            </span>

          </div>
          </Link>

        </div>


        


    </div>
  )
}

export default Header;