import React from 'react'
import githubSvg from '../../public/assets/github.svg';
import instagramSvg from '../../public/assets/instagram.svg';
import twitterSvg from '../../public/assets/twitter.svg';

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Termos & Condições</p>
                <p> | </p>
                <p>Política de Privacidade</p>
            </div>

            <div className="flex gap-3">
                    <a 
                        href="https://github.com/LukaGomes" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img src={githubSvg} alt="github" className="w-1/2 h-1/2"/>
                    </a>
                    <a 
                        href="https://www.instagram.com/lukagoms51?igsh=OXNuazM1eGE3dWwy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img src={instagramSvg} alt="instagram" className="w-1/2 h-1/2"/>
                    </a>
                    <a 
                        href="https://twitter.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img src={twitterSvg} alt="twitter" className="w-1/2 h-1/2"/>
                    </a>
            </div>

            <p className="text-white-500">© 2026 Luka Gomes. Todos os direitos reservados.</p>
        </section>
    )
}
export default Footer