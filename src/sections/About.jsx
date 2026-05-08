import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

import lukaImg from '../../public/assets/luka.jpeg';
import techStackImg from '../../public/assets/TechStack.jpg';
import grid3Img from '../../public/assets/grid3.png';
import grid4Img from '../../public/assets/grid4.png';
import tickSvg from '../../public/assets/tick.svg';
import copySvg from '../../public/assets/copy.svg';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('lukegomes51@gmail.com');

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        },3000)
    }
    return (
        <section className="c-space my-20" id="sobre">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src={lukaImg} alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Olá, eu sou o Luka</p>
                            <p className="grid-subtext">Sou estudante de Desenvolvimento de software e 
                                Multiplataforma e atualemte no 2º semestre da faculdade</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src={techStackImg} alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Conhecimentos</p>
                            <p className="grid-subtext">Tenho conhecimento em JavaScript, ReactJS, Python e outras tecnologias de desenvolvimento.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="grid-headtext">
                                Trabalho remoto
                            </p>
                            <p className="grid-subtext">
                                Atualmente moro no Brasil, com trabalho remoto disponível.
                            </p>
                            <Button 
                                name="Entre em contato" 
                                isBeam 
                                containerClass="w-full mt-10" 
                                href="https://www.instagram.com/lukagoms51"
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src={grid3Img} alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Minha paixão por programação</p>
                            <p className="grid-subtext"> Adoro resolver problemas e construir coisas através de 
                                código. Programar não é apenas minha profissão — é minha paixão. Gosto de 
                                explorar novas tecnologias e aprimorar minhas habilidades.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src={grid4Img} alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Entre em contato</p>
                        </div>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? tickSvg : copySvg} alt="copy"/>
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">lukegomes51@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About