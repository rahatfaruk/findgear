import { Link } from "react-router-dom";

function Footer() {
  return (  
    <footer className="bg-gray-200 px-4 py-6 mt-6 text-center">
      <div className="flex gap-2 items-center justify-center">
        <figure className="w-7">
          <img src="/logo.png" className="w-full rounded" />
        </figure>
        <h2 className='text-xl'><Link to={'/'} className="text-primary font-semibold">FindGear</Link></h2>
      </div>
      <p className="text-gray-500 mt-2 text-sm">© FindGear 2024 - All rights reserved</p>
    </footer>
  );
}

export default Footer;