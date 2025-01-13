/* ======= Icones Tecnologias =======*/
import { DiJava } from 'react-icons/di';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiBootstrap, SiPython, SiDjango, SiPostgresql, SiGit, SiMysql, SiAmazonaws, SiMongodb, SiSpring } from 'react-icons/si';
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
import imagem12 from './assets/mae.png'
import imagem13 from './assets/clinica.png'
import imagem14 from './assets/bellavet.png'
import imagem15 from './assets/usuario.png'

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
        title: 'Desenvolvimento de Sistemas e APIs',
        description: 'Desenvolvimento de sistemas e APIs robustas e escaláveis utilizando Python com Django e Java com Spring Boot. Com expertise em arquitetura de software, integração de APIs e bancos de dados como PostgreSQL, MySQL e SQL, crio soluções completas para o backend, garantindo alta performance, segurança e eficiência na gestão de dados.'

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
    {
        id: 11,
        name: 'SQL',
        image: <SiMysql id='sql' />
    },
    {
        id: 12,
        name: 'AWS',
        image: <SiAmazonaws id='aws' />
    },
    {
        id: 13,
        name: 'MongoDB',
        image: <SiMongodb id='mongodb' />
    },
    {
        id: 14,
        name: 'Java',
        image: <DiJava id='java' />
    },
    {
        id: 15,
        name: 'Spring Boot',
        image: <SiSpring id='springboot' />
    }
];



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
    {
        id: 12,
        img: imagem12,
        category: 'Python/Django',
        title: 'Sistema de Controle de Vendas e Estoque',
        description:
            'Sistema desenvolvido para controle de vendas e compras, utilizando Python e Django. Com uma interface responsiva criada com Bootstrap, permite gerenciar estoque, registrar transações e visualizar relatórios de forma prática e eficiente.',
        codigo: 'https://github.com/LucasRib52/sistema-mae',
    },
    {
        id: 13,
        img: imagem13,
        category: 'React',
        title: 'Website Clínica Veterinária Violetta',
        description:
            'Website moderno e responsivo para a Clínica Veterinária Violetta, desenvolvido com React. Inclui funcionalidades como exibição de serviços, seção de contato e informações sobre a clínica, oferecendo uma experiência intuitiva e atraente para os usuários.',
        codigo: 'https://github.com/LucasRib52/clinica',
        demo: 'https://www.clinicaveterinariavioletta.com.br/',
    },
    {
        id: 14,
        img: imagem14,
        category: 'React',
        title: 'Website Clínica Veterinária Bellavet',
        description:
            'Website exclusivo e responsivo para a Clínica Veterinária Bellavet, desenvolvido com React. O site inclui funcionalidades como exibição detalhada de serviços, formulário de contato e informações completas sobre a clínica, proporcionando uma experiência moderna e acessível para os clientes.',
        codigo: 'https://github.com/LucasRib52/bellavet',
        demo: 'https://www.clinicaveterinariabellavet.com.br/',
    },
    {
        id: 15,
        img: imagem15,
        category: 'Java/Spring Boot',
        title: 'CRUD de Usuários',
        description:
            'Aplicação backend para gerenciamento de usuários, desenvolvida com Java e Spring Boot. Inclui funcionalidades de autenticação e autorização com Spring Security, persistência de dados utilizando PostgreSQL, e implementação de um CRUD completo com validações robustas. Ideal para gerenciamento de dados com segurança e eficiência.',
        codigo: 'https://github.com/LucasRib52/usuario',
    },
    
   
    
]


export const education = [
    {
        category: 'educacao',
        title: 'Graduado em Analise e Desenvolvimento de sistemas',
        subtitle: 'Universidade Cruzeiro do Sul',
        date: '2022 - 2025',
        description: 'Formação completa em análise e desenvolvimento de sistemas, com um forte foco em tecnologias modernas e práticas de mercado. Durante o curso, adquiri conhecimentos sólidos em programação, bancos de dados, e desenvolvimento de software, preparando-me para enfrentar desafios reais no ambiente de trabalho.'
    },
    {
        category: 'educacao',
        title: 'Curso Rocketseat',
        subtitle: 'Rocketseat',
        date: '2022-2024',
        description: 'Programa intensivo de capacitação em desenvolvimento web, com foco em ReactJS para criação de interfaces interativas, Python para desenvolvimento backend e bancos de dados como PostgreSQL e MongoDB para gerenciamento de dados. O curso proporcionou uma formação completa para o desenvolvimento de aplicações modernas e escaláveis.'
    },    
    {
        category: 'educacao',
        title: 'Curso B7web',
        subtitle: 'B7web',
        date: '2020-2022',
        description: 'Curso abrangente que abordou tanto o frontend quanto o backend, focando em projetos práticos que simulam cenários do mundo real. A formação incluiu o estudo de HTML, CSS, JavaScript, além de frameworks e bibliotecas como React, preparando-me para atuar de forma completa em projetos de desenvolvimento.'
    },
    {
        category: 'educacao',
        title: 'Curso Rocketseat',
        subtitle: 'Rocketseat',
        date: '2022-2024',
        description: 'Programa intensivo de capacitação em desenvolvimento web, com foco em ReactJS para criação de interfaces interativas, Python para desenvolvimento backend e bancos de dados como PostgreSQL e MongoDB para gerenciamento de dados. O curso proporcionou uma formação completa para o desenvolvimento de aplicações modernas e escaláveis.'
    },
    {
        category: 'educacao',
        title: 'Curso Java + Spring Boot',
        subtitle: 'Javanauta',
        date: '2024-2024',
        description: 'Programa intensivo focado no desenvolvimento backend com Java e Spring Boot, abordando conceitos avançados como autenticação e autorização com Spring Security, integração com bancos de dados relacionais como PostgreSQL e não relacionais como MongoDB, além do uso de contêineres com Docker para implantação eficiente. O curso proporcionou uma visão abrangente sobre práticas modernas para construção de APIs seguras, escaláveis e de alta performance.'
    },
    {
        category: 'educacao',
        title: 'Curso Java + Spring Boot + Angular',
        subtitle: 'Jdev',
        date: '2024-2025',
        description: 'Programa intensivo de capacitação em desenvolvimento full stack, combinando Java e Spring Boot para construção de APIs robustas e seguras com autenticação via Spring Security, e Angular para o desenvolvimento de interfaces modernas e responsivas. O curso também abordou a integração com bancos de dados relacionais como PostgreSQL e não relacionais como MongoDB, além do uso de contêineres com Docker para simplificar o processo de implantação. Uma formação completa voltada para a criação de aplicações escaláveis e de alto desempenho.'
    },
    
]

export const experience = [
    {
        category: 'experiencia',
        title: 'Analista e Desenvolvedor de Sistemas',
        subtitle: 'Majil Assessoria',
        date: '2019 - Presente',
        description: 'Atuação no desenvolvimento de aplicações web utilizando React no frontend e Java com Spring Boot no backend, com foco na criação de APIs robustas e seguras. Responsável pela integração de sistemas com bancos de dados PostgreSQL, manutenção e evolução de sistemas legados, além de garantir a implementação de soluções escaláveis e eficientes para atender às demandas de mercado.'
    },    
    {
        category: 'experiencia',
        title: 'Desenvolvedor FullStack',
        subtitle: 'Freelancer',
        date: '2023 - Presente',
        description: 'Desenvolvimento de sites e aplicações web como freelancer, utilizando uma ampla gama de tecnologias, incluindo React, Python com Django, e Java com Spring Boot para backend robusto. Experiência em integração e gerenciamento de bancos de dados relacionais como PostgreSQL e SQL, além de implementação de APIs seguras e escaláveis. Envolvimento em todas as etapas do ciclo de desenvolvimento, desde a concepção inicial até a entrega e manutenção, com foco na criação de soluções modernas e de alta qualidade para os clientes.'
    }  
]
