/* ======= Icones Tecnologias =======*/
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiBootstrap, SiPython, SiDjango, SiPostgresql, SiGit } from 'react-icons/si';

/*======== Import das imagens =======*/
import imagem01 from './assets/arrasta e solta.png'
import imagem02 from './assets/bateria.png'
import imagem03 from './assets/crud react.png'
import imagem04 from './assets/desenhando.png'
import imagem05 from './assets/loja com django.png'
import imagem06 from './assets/pizzaria.png'
import imagem07 from './assets/api-django.png'
import imagem08 from './assets/tatuador.png'
import imagem09 from './assets/majil.png'
import imagem10 from './assets/flix-app.png'
import imagem11 from './assets/urna eletronica.png'

export const links = [
    {
        name: 'Home',
        path: 'home',
    },
    {
        name: 'Services',
        path: 'services',
    },
    {
        name: 'Skills',
        path: 'skills',
    },
    {
        name: 'Portfolio',
        path: 'portfolio',
    },
    {
        name: 'Resume',
        path: 'resume',
    },
    {
        name: 'Contact',
        path: 'contact',
    },
]

export const services = [
    {
        id: 1,
        name: 'Desenvolvedor Front-End',
        title: 'Desenvolvimento de Interfaces',
        description: 'Criação de interfaces de usuário modernas e responsivas utilizando tecnologias como HTML, CSS, JavaScript e frameworks como React. Desenvolvo sites e aplicações web a partir de templates ou personalizados, garantindo uma experiência visual atrativa e funcionalidade eficiente.'
    },
    {
        id: 2,
        name: 'Desenvolvedor Back-End',
        title: 'Desenvolvimento de Sistemas',
        description: 'Desenvolvimento de sistemas robustos e escaláveis utilizando Python e Django. Com expertise em arquitetura de software, banco de dados PostgreSQL e integração de APIs, crio soluções completas para o backend, desde a lógica de negócios até a gestão de dados, garantindo segurança e eficiência.'
    }
];

export const skills = [
    {
        id: 1,
        name: 'HTML',
        image: <SiHtml5 id='html' />
    },
    {
        id: 2,
        name: 'CSS',
        image: <SiCss3 id='css' />
    },
    {
        id: 3,
        name: 'JavaScript',
        image: <SiJavascript id='js' />
    },
    {
        id: 4,
        name: 'TypeScript',
        image: <SiTypescript id='ts' />
    },
    {
        id: 5,
        name: 'React',
        image: <SiReact id='react' />
    },
    {
        id: 6,
        name: 'Bootstrap',
        image: <SiBootstrap id='bootstrap' />
    },
    {
        id: 7,
        name: 'Python',
        image: <SiPython id='python' />
    },
    {
        id: 8,
        name: 'Django',
        image: <SiDjango id='django' />
    },
    {
        id: 9,
        name: 'PostgreSQL',
        image: <SiPostgresql id='postgresql' />
    },
    {
        id: 10,
        name: 'Git',
        image: <SiGit id='git' />
    },
]


export const projects = [
    {
        id: 1,
        img: imagem01,
        category: 'JavaScript',
        title: 'Arrasta e Solta',
        description:
            'Uma aplicação interativa que permite arrastar e soltar elementos na página, demonstrando habilidades em manipulação do DOM.',
        codigo: 'https://github.com/LucasRib52/Javascript_Arrastaesolta',
    },
    {
        id: 2,
        img: imagem02,
        category: 'JavaScript',
        title: 'Bateria',
        description:
            'Um projeto divertido que simula uma bateria, onde os usuários podem tocar diferentes sons ao clicar nas teclas.',
        codigo: 'https://github.com/LucasRib52/Javascript_Bateria',
    },
    {
        id: 3,
        img: imagem03,
        category: 'React',
        title: 'Controle Financeiro',
        description:
            'Aplicação de controle financeiro construída em React, permitindo gerenciar receitas e despesas de forma simples e eficiente.',
        codigo: 'https://github.com/LucasRib52/React-Crud',
    },
    {
        id: 4,
        img: imagem04,
        category: 'JavaScript',
        title: 'Paint',
        description:
            'Uma versão simplificada do Paint, onde os usuários podem desenhar e pintar diretamente no navegador.',
        codigo: 'https://github.com/LucasRib52/JavaScript_Desenhando',
    },
    {
        id: 8,
        img: imagem08,
        category: 'React',
        title: 'WebSite Tatuador',
        description:
            'Um website profissional para um estúdio de tatuagem, desenvolvido em React, com foco em design e experiência do usuário.',
        codigo: 'https://github.com/LucasRib52/sitetatuador',
        demo: 'https://www.sanderinktatto.com/',
    },
    {
        id: 9,
        img: imagem09,
        category: 'React',
        title: 'WebSite Contabilidade',
        description:
            'Website moderno para uma empresa de contabilidade, construído em React, com funcionalidades de contato e serviços.',
        codigo: 'https://github.com/LucasRib52/Majil',
        demo: 'https://www.majilassessoria.com/',
    },
    {
        id: 6,
        img: imagem05,
        category: 'Python/Django',
        title: 'Monte sua Loja',
        description:
            'Plataforma para criação de lojas online, utilizando Python e Django, com suporte a gerenciamento de produtos e vendas.',
        codigo: 'https://github.com/LucasRib52/Loja',
    },
    {
        id: 7,
        img: imagem07,
        category: 'Python/Django',
        title: 'Api Com Django Rest Framework',
        description:
            'API desenvolvida com Django Rest Framework, fornecendo endpoints para gerenciamento de dados, pronta para ser integrada a outros sistemas.',
        codigo: 'https://github.com/LucasRib52/flix_api',
        demo: 'https://lucascardoso.pythonanywhere.com/api/v1/genres/',
    },
    {
        id: 5,
        img: imagem06,
        category: 'JavaScript',
        title: 'Pizzaria',
        description:
            'Um sistema de pedidos de pizzas online, com interface simples e interativa, desenvolvido em JavaScript.',
        codigo: 'https://github.com/LucasRib52/Javascript_Pizza',
    },
    {
        id: 10,
        img: imagem10,
        category: 'Python/Django',
        title: 'Crud com streamlit',
        description:
            'Aplicação CRUD interativa, utilizando Python e Streamlit, consumindo a API desenvolvida com Django Rest Framework para gerenciar dados de forma intuitiva.',
        codigo: 'https://github.com/LucasRib52/Crud_Streamlit',
    },
    {
        id: 11,
        img: imagem11,
        category: 'Javascript',
        title: 'Urna Eletronica',
        description:
            'Urna eletronica feita com Javascript, com interface simples e interativa para se divertir.',
        codigo: 'https://github.com/LucasRib52/Javascript_Urna_Eletronica',
    },    
]


export const education = [
    {
        category: 'educacao',
        title: 'Graduado em Analise e Desenvolvimento de sistemas',
        subtitle: 'Universidade Cruzeiro do Sul',
        date: '2022 - 2024',
        description: 'Formação completa em análise e desenvolvimento de sistemas, com um forte foco em tecnologias modernas e práticas de mercado. Durante o curso, adquiri conhecimentos sólidos em programação, bancos de dados, e desenvolvimento de software, preparando-me para enfrentar desafios reais no ambiente de trabalho.'
    },
    {
        category: 'educacao',
        title: 'Curso Rocketseat',
        subtitle: 'Rocketseat',
        date: '2022-2024',
        description: 'Programa intensivo de capacitação em desenvolvimento web, onde foram abordados desde os fundamentos de programação até as tecnologias mais avançadas do mercado. O curso proporcionou uma imersão em ferramentas como JavaScript, React, Node.js, e outras tecnologias essenciais para o desenvolvimento full stack.'
    },
    {
        category: 'educacao',
        title: 'Curso FullStack',
        subtitle: 'B7web',
        date: '2020-2022',
        description: 'Curso abrangente que abordou tanto o frontend quanto o backend, focando em projetos práticos que simulam cenários do mundo real. A formação incluiu o estudo de HTML, CSS, JavaScript, além de frameworks e bibliotecas como React e Node.js, preparando-me para atuar de forma completa em projetos de desenvolvimento.'
    },
    {
        category: 'educacao',
        title: 'Curso PycodeBR',
        subtitle: 'Django Master',
        date: '2023-2024',
        description: 'Especialização em desenvolvimento web com o framework Django, com foco em Python e boas práticas de desenvolvimento. O curso abordou desde a criação de aplicações robustas até a implementação de funcionalidades complexas, garantindo a capacidade de desenvolver soluções escaláveis e eficientes.'
    },
]

export const experience = [
    {
        category: 'experiencia',
        title: 'Analista e Desenvolvedor de Sistemas',
        subtitle: 'Majil Assessoria',
        date: '2023 - Presente',
        description: 'Atuação no desenvolvimento de aplicações web utilizando React e Python, focando na criação de interfaces modernas e eficientes. Responsável pela manutenção e evolução de sistemas legados, garantindo sua adaptabilidade às novas necessidades de mercado e assegurando um desempenho contínuo e eficiente.'
    },
    {
        category: 'experiencia',
        title: 'Desenvolvedor FullStack',
        subtitle: 'Freelancer',
        date: '2022 - Presente',
        description: 'Desenvolvimento de sites e aplicações web como freelancer, utilizando tecnologias como Django, Python, React, e outras. Envolvimento em todas as etapas do ciclo de desenvolvimento, desde a concepção inicial até a implementação e manutenção, sempre buscando entregar soluções de alta qualidade para os clientes.'
    }
]
