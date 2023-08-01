
import { GiHamburgerMenu } from "react-icons/gi";

const sections = [
    {
        name: 'Home',
        id: 'home',
    },
    {
        name: 'About',
        id: 'about',
    },
    {
        name: 'Service',
        id: 'service',
    },
    {
        name: 'Portfolio',
        id: 'portfolio',
    },
    {
        name: 'Proteeners',
        id: 'proteeners',
    },
    {
        name: 'Prodcasters',
        id: 'prodcasters',
    },
    {
        name: 'Contact Us',
        id: 'contact-us',
    },
];
const Header = () => {

  return (
    <header
        className='
            py-10
            flex
            justify-between
            items-center
            px-3
            md:px-0
        '
    >
        <img 
            src="logo.png" 
            alt="proton-logo" 
        />
        <div
            className="
                text-4xl
                text-slate-300
                p-2
                border
                border-slate-300
                rounded-xl
                block
                lg:hidden
            "
        >
            <GiHamburgerMenu />
        </div>
        <nav
            className='
                hidden
                lg:flex
                items-center
                gap-4
            '
        >
            {sections.map((section, index) => (
                <div
                    key={section.id}
                    className={`
                        uppercase
                        text-white
                        text-lg
                        transition-all
                        duration-300
                        cursor-pointer
                        ${index === 6 ? 'bg-primary-1 px-4 py-2 rounded-full hover:tracking-widest ease-in  text-white' : 'hover:text-primary-1'}
                    `}
                    id={section.id}
                >
                    {section.name}
                </div>
            ))}
        </nav>
    </header>
  )
}

export default Header