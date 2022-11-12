// import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
interface ExpertiseItemProps {
    title: string;
    icon: string;
}

export function ExpertiseItem({ title, icon }: ExpertiseItemProps) {
    //  useEffect(() => {
    //     Aos.init({duration: 2000});
    // }, []);

    return (
         <div className="flex flex-col text-white fill-white justify-center items-center text-center py-4">
            <img src={icon} alt={`icone-${title}`} className="w-20 h-20 fill-white"/>
            <p className="text-sm font-bold pl-3 text-brand-500 text-center">{title}</p>
        </div>
    );
}
