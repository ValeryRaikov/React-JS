import { Link, Outlet } from 'react-router-dom'

export default function About() {
    return (
        <>
            <nav className="p-20 hidden lg:flex lg:gap-x-12">
                <Link to="our-team" className='text-sm font-semibold leading-6 text-gray-900'>Our Team</Link>
                <Link to="contact-us" className='text-sm font-semibold leading-6 text-gray-900'>Contact Us</Link>
                <Link to="locations" className='text-sm font-semibold leading-6 text-gray-900'>Locations</Link>
            </nav>

            <p className="p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat quod nemo aliquam rerum. Explicabo veniam officia modi quasi quod aperiam commodi consectetur cupiditate dolor tempore. Qui ipsum totam ipsam!</p>

            <Outlet />
        </>
    )
}