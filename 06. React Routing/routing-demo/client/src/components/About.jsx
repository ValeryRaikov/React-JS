import { Link, Outlet } from 'react-router-dom'

export default function About() {
    return (
        <>
            <nav className='p-20 hidden lg:flex lg:gap-x-12'>
                <Link to="mission" className='text-sm font-semibold leading-6 text-gray-900'>Our Mission</Link>
                <Link to="our-team" className='text-sm font-semibold leading-6 text-gray-900'>Our Team</Link>
                <Link to="contact-us" className='text-sm font-semibold leading-6 text-gray-900'>Contact Us</Link>
            </nav>

            <Outlet />
        </>
    )
}
