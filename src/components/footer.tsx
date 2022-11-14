import logo from '../assets/Logo.png';
import { HeaderItem } from './header_item';
import { SocialLinks } from './social_links';

export function Footer() {
    return <div className="px-24 pt-12 pb-2 w-screen bg-brand-300 flex flex-col">
        <div className="flex flex-row items-center justify-center mb-8">
            <img src={logo} className='h-8' />

                <div className="flex flex-col">
                    <HeaderItem label='Sobre Nós'/>
                    <HeaderItem label='Nossos Projetos'/>
                    <HeaderItem label='Contato'/>
                </div>

                <SocialLinks/>
        </div>
      <p className='text-sm text-center py-8 text-white'>Todos os direitos reservados 2021 - 2022 <strong>Youtech</strong> ©</p>
            {/* <p className='text-sm pb-8 text-center text-white'>Desenvolvido por <strong><a href="http://tevitto.com" target="_blank">teVitto Code</a></strong> | 2022</p> */}


    </div>
}