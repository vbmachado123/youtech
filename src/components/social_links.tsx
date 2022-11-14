
import { useEffect } from 'react';
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlinePhone, AiOutlineYuque, AiOutlineYoutube } from 'react-icons/ai';
import { FiMapPin, FiMail } from 'react-icons/fi';

export function SocialLinks() {
    
    return (
          <div className="flex flex-row justify-center mt-[-48px]">
                        
                        <div className="flex flex-col">
                                <a data-aos='slide-up'  href="https://www.linkedin.com/" target='_blank' className='flex flex-row justify-start py-1 text-white items-center'>
                                    <AiOutlineLinkedin className="h-4 w-4"/>
                                    <p className="mt-1 ml-4">YouTech</p>
                                </a>

                                <a data-aos='slide-up' href="#" target='_blank' className='flex flex-row justify-start py-1 items-center text-white items-center'>
                                    <FiMapPin className="h-4 w-4"/>
                                    <p className="mt-1 ml-4">Av. Paulista 2401 - Bela Vista SP</p>
                                </a>
                        </div>
                            

                        <div className="flex flex-col ml-4">

                                <a data-aos='slide-up' href="#" target='_blank' className='flex flex-row justify-start py-1 text-white items-center'>
                                    <AiOutlinePhone className="h-4 w-4"/>
                                    <p className="mt-1 ml-4">(11) 92834-5761</p>
                                </a>

                                <a data-aos='slide-up' href="mailto:comercial@youtech.com.br" target='_blank' className='flex flex-row justify-start py-1 text-white items-center'>
                                    <FiMail className="h-4 w-4"/>
                                    <p className="mt-1 ml-4">comercial@youtech.com.br</p>
                                </a>
</div>
                               
                    </div>
    );
}