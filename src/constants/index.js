import cesarImg from '../../public/assets/cesar.jpeg';
import daizaImg from '../../public/assets/daiza.jpeg';
import claudineiImg from '../../public/assets/claudinei.jpeg';
import fatecImg from '../../public/assets/fatec.jpeg';
import agriRSlabImg from '../../public/assets/AgriRSlab.png';
import spotlight2Img from '../../public/assets/spotlight2.png';
import spotlight1Img from '../../public/assets/spotlight1.png';
import reactSvg from '../../public/assets/react.svg';
import cssImg from '../../public/assets/CSS.png';
import htmlImg from '../../public/assets/HTML.png';
import figmaImg from '../../public/assets/figma.svg';
import javascriptImg from '../../public/assets/JavaScript.png';
import typescriptImg from '../../public/assets/typescript.png';
import solutionImg from '../../public/assets/solution.jpeg';
import marsImg from '../../public/assets/mars.jpeg';
import gatesImg from '../../public/assets/gates.jpeg';

export const navLinks = [
    {
        id: 1,
        name: 'Principal',
        href: '#principal',
    },
    {
        id: 2,
        name: 'Sobre',
        href: '#sobre',
    },
    {
        id: 3,
        name: 'Trabalhos',
        href: '#trabalhos',
    },
    {
        id: 4,
        name: 'Contato',
        href: '#contato',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'César caires',
        position: 'Gerente Geral da Solution Controles',
        img: cesarImg,
        review:
            'Trabalhar com Luka foi uma experiência fantástica. Ele transformou nosso site desatualizado em uma plataforma moderna e fácil de usar. Sua atenção aos detalhes e compromisso com a qualidade são incomparáveis. Recomendo-o fortemente para qualquer projeto de desenvolvimento web.',
    },
    {
        id: 2,
        name: 'Daíza Gomes',
        position: 'Gerente Administrativo da Esofer',
        img: daizaImg,
        review:
            'A experiência do Luka em desenvolvimento web é realmente impressionante. Ele entregou uma solução robusta e escalável para o nosso site de e-commerce, e nossas vendas online aumentaram significativamente desde o lançamento. Ele é um verdadeiro profissional! Trabalho fantástico.',
    },
    {
        id: 3,
        name: 'Claudinei Pinaffi',
        position: 'Analista de sistemas',
        img: claudineiImg,
        review:
            'Não tenho palavras suficientes para elogiar o Luka. Ele conseguiu pegar os requisitos complexos do nosso projeto e transformá-los em um site impecável e funcional. Sua capacidade de resolver problemas é excepcional.',
    },
    {
        id: 4,
        name: 'Fatec Jacareí',
        position: 'Faculdade de Tecnologia de Jacareí',
        img: fatecImg,
        review:
            'Foi um prazer trabalhar com o Luka. Ele compreendeu perfeitamente as nossas necessidades e entregou um site que superou as nossas expectativas. As suas habilidades em desenvolvimento frontend e backend são de altíssimo nível.',
    },
];

export const myProjects = [
    {
        title: 'AgriRs-Lab',
        desc: 'O projeto ABP (Aprendizagem Baseada em Projeto) desenvolvido como atividade do 1° semestre do curso de Desenvolvimento de Software Multiplataforma da Fatec Jacareí, tem como objetivo criar um website para o Laboratório de Sensoriamento Remoto Agrícola do INPE (AgriRS Lab).',
        subdesc:
            'O site visa fornecer informações sobre o laboratório, seus projetos de pesquisa, publicações e eventos relacionados ao sensoriamento remoto agrícola. O projeto é desenvolvido utilizando as tecnologias HTML e CSS, garantindo uma experiência de usuário moderna e responsiva.',
        href: 'https://youtu.be/jQnsITIP0jw?si=5E4s6t_IxLEX7PQG',
        texture: `${import.meta.env.BASE_URL}textures/project/videokayman.mp4`,
        logo: agriRSlabImg,
        logoStyle: {
            backgroundColor: '#161f2a',
            border: '0.2px solid #1d2336',
            boxShadow: '0px 0px 60px 0px #3046aa4d',
        },
        spotlight: spotlight2Img,
        tags: [
            {
                id: 1,
                nome: 'React.js',
                path: reactSvg,
            },
            {
                id: 2,
                nome: 'CSS',
                path: cssImg,
            },
            {
                id: 3,
                nome: 'HTML',
                path: htmlImg,
            },
            {
                id: 4,
                nome: 'Figma',
                path: figmaImg,
            },
        ],
    },
    {
        title: 'FATEC Jacareí - Secretaria',
        desc: 'Este projeto foi desenvolvido como atividade do 2º semestre do curso de Desenvolvimento de Software Multiplataforma da Fatec Jacareí. O desafio consiste na criação de uma Aplicação Web de Autoatendimento da Secretaria Acadêmica, baseada em um chatbot conversacional',
        subdesc:
            'Tivemos os seguintes objetivos: Reduzir a sobrecarga operacional da secretaria, Conduzir o usuário por uma árvore de navegação estruturada (menus e perguntas guiadas), Permitir consultas diretas e fornecer respostas objetivas e verificáveis, Exibir evidências documentais (Regulamento, Manual de Estágio, Calendário Acadêmico, PPC), Garantir rastreabilidade, confiabilidade da informação e redução de ambiguidades.',
        href: 'https://github.com/NexaTechJAC',
        texture: `${import.meta.env.BASE_URL}textures/project/nexatech.mp4`,
        logo: fatecImg,
        logoStyle: {
            backgroundColor: '#2f1313',
            border: '0.2px solid #3e1717',
            boxShadow: '0px 0px 60px 0px #b52f2f4d',
        },
        spotlight: spotlight1Img,
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: reactSvg,
            },
            {
                id: 2,
                name: 'JavaScript',
                path: javascriptImg,
            },
            {
                id: 3,
                name: 'TypeScript',
                path: typescriptImg,
            },
            {
                id: 4,
                name: 'Figma',
                path: figmaImg,
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Solution Controles',
        pos: 'Programador PCP e PCM',
        duration: '2024 - Atualmente',
        title: "Experiência na gestão de processos administrativos e produtivos, prestando suporte estratégico em cadastro de clientes, emissão de notas fiscais e elaboração de propostas comerciais. Atuação no atendimento preliminar e acompanhamento da pós-venda, garantindo qualidade no relacionamento com clientes e eficiência nas negociações. Responsável por controlar pedidos, contratos e documentos de vendas, além de monitorar estoques e acompanhar ordens de produção para assegurar cumprimento de prazos. Forte contribuição na análise de métricas de desempenho, criação de relatórios e integração entre departamentos (produção, vendas, compras e logística), promovendo comunicação eficaz e melhoria contínua.",
        icon: solutionImg,
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Mars Brasil',
        pos: 'Auxiliar de Produção',
        duration: '2022 - 2024',
        title: "Experiência de processos produtivos, incluindo abastecimento de insumos, requisição de matérias-primas e apoio direto aos operadores em partidas, paradas e inventários de linha. Atuação ativa em segurança operacional por meio de DDS's e cumprimento rigoroso das normas de qualidade (GMP e HACCP), além do controle de embalagens, movimentação de materiais e organização diária da área. Responsável por identificar desvios de processo, escalonar soluções e acompanhar manutenções, promovendo eficiência, conformidade e melhoria contínua. Participação em iniciativas de 5S e sugestões de melhorias, reforçando o compromisso com produtividade e ambiente seguro.",
        icon: marsImg,
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Gates do Brasil',
        pos: 'Auxiliar de Produção',
        duration: '2021 - 2022',
        title: "Experiência de processos industriais, com atuação na operação de máquinas de corte (Slab Cutter e Slab Shapper) e preparação de equipamentos. Responsável por garantir a qualidade e rastreabilidade das correias por meio de inspeções, identificação e embalagem, além de realizar movimentações com talha e ponte rolante. Forte contribuição para a organização do setor, fechamento de GTI e aplicação de práticas de segurança e qualidade, assegurando eficiência operacional e suporte às equipes de produção.",
        icon: gatesImg,
        animation: 'salute',
    },
];