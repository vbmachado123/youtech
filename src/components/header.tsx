import logo from '../assets/Logo.png';
import { HeaderItem } from './header_item';
export function Header() {
    return (
        <div className="bg-brand-300 fixed top-0 w-screen py-4 flex flex-row justify-between items-center content-between px-32">
            <img src={logo} alt="" className='w-[96px]'/>

            <div className='flex flex-row'>
                <HeaderItem label='Sobre Nós'/>
                <HeaderItem label='Nossos Projetos'/>
                <HeaderItem label='Contato'/>
            </div>
        </div>
    );
}