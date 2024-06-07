import styles from '@/app/styles/Navbar.module.css';
import type { FunctionComponent } from 'react';
// type NavbarProps = {};
// const data = [
//     'Diagnóstico del problema',
//     'Narración colectiva del problema',
//     'Causas y consecuencias',
//     'Fundamentos del problema',
//     'Objetivos del proyecto',
//     'Fundamentación técnica',
//     'Alternativa de solución creativa',
//     'Estrategias artísticas del proyecto',
//     'Recursos del proyecto',
//     'Monitoreo',
//     'Video de ejecución del proyecto',
// ];
// const data = ['Home', 'Esquema del proyecto', 'Contactanos'];

const skills = [
    'Habilidades personales',
    'Habilidades sociales',
    'Habilidades directivas',
];

const challenges = ['Mis debilidades', 'Metas y objetivos'];
const removeDiacritics = (text: string) => {
    return text
        .normalize('NFD')
        .toLowerCase()
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ /g, '-');
};
const data = [
    {
        name: 'Presentación personal',
        url: '/',
    },
    {
        name: 'Mis habilidades',
        childrens: skills.map((name) => ({
            name,
            url: `/${removeDiacritics(name)}`,
        })),
    },
    {
        name: 'Retos',
        childrens: challenges.map((name) => ({
            name,
            url: `/${removeDiacritics(name)}`,
        })),
    },
    {
        name: 'Acciones',
        url: '/acciones',
    },
    {
        name: 'Valor personal',
        url: '/valor-personal',
    },
    {
        name: 'Business Model You',
        url: '/business-model-you',
    },
];
const Navbar: FunctionComponent = () => {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.list}>
                {data.map(({ name, url, childrens }) => {
                    const hasChildren = childrens && childrens.length > 0;
                    const drowpDownClass = hasChildren ? styles.dropdown : '';
                    return (
                        <li
                            key={name}
                            className={[styles.item, drowpDownClass].join(' ')}
                            data-dropdown={hasChildren}
                        >
                            {!childrens ? (
                                <a href={url} className={styles.link}>
                                    {name}
                                </a>
                            ) : (
                                <>
                                    <span className={styles.link}>{name}</span>
                                    <ul key={name} className={styles.list}>
                                        {childrens.map(({ name, url }) => (
                                            <li
                                                key={name}
                                                className={styles.item}
                                            >
                                                <a
                                                    href={url}
                                                    className={styles.link}
                                                >
                                                    {name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
