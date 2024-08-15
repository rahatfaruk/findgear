import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { List } from "react-bootstrap-icons";
import { AuthContext } from "../context/AuthProvider";
import useFirebase from "../hooks/useFirebase";


const navLinks = [
  { id: 1, text: 'Home', path: '/' },
  { id: 2, text: 'Products', path: '/products' },
]

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const {fbSignOut} = useFirebase()

  // logout
  const handleLogout = async () => {
    try {
      await fbSignOut()
      toast.info('logged out')
      navigate('/login', {replace:true})
    } catch (err) {
      toast.error('logged out failed', err.message);
    }
  }

  return (
    <nav className="px-4 dark:bg-gray-800">
      <div className={`max-w-screen-xl mx-auto py-4 border-b grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-4`}>
        <div className="flex gap-2 items-center">
          <figure className="w-8">
            <img src="/logo.png" className="w-full rounded" />
          </figure>
          <h1 className='text-2xl'><Link to={'/'} className="text-primary font-semibold">FindGear</Link></h1>
        </div>

        {/* profile info || login btn && nav-toggler */}
        <div className="flex items-center justify-end md:order-1 gap-4">
          {user ?
            <div className="flex gap-2 items-center">
              <div className='flex items-center gap-2'>
                <p className="font-semibold text-primary">{user.displayName}</p>
                <button className="px-3 py-1 rounded-md text-white bg-red-800 hover:opacity-90" onClick={handleLogout}>Logout</button>
              </div>
            </div>
            :
            <div className="flex gap-3">
              <Link to='/login' className="inline-block px-3 py-1 rounded-md text-white bg-primary hover:opacity-90">Login</Link>
            </div>
          }

          <div className="flex items-center">
            <button className="md:hidden border p-0.5 text-2xl hover:scale-95 dark:text-white" onClick={() => setShowLinks(!showLinks)}> <List /> </button>
          </div>
        </div>

        {/* links */}
        <ul className={`${showLinks ? 'block' : 'hidden'} md:flex justify-center col-span-2 md:col-span-1`}>
          {navLinks.map(link => <NavbarLink key={link.id} link={link} />)}
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;


function NavbarLink({ link }) {
  return (
    <li>
      <NavLink to={link.path} end className={({ isActive }) =>`
        block px-4 py-2 rounded-md hover:underline hover:bg-teal-100 dark:text-white dark:hover:bg-primary 
        ${isActive ? 'text-primary bg-teal-100 font-bold underline dark:bg-primary' : ''}
      `}>{link.text}</NavLink>
    </li>
  );
}