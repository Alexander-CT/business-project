// type ActionsProps = {};

import type { FunctionComponent } from 'react';
import { useFetch } from '../hooks/useFetch';
const objetives = [
    {
        name: 'Identificar riesgos',
        actions: [
            {
                name: 'Realizar un análisis exhaustivo de los posibles riesgos en tus proyectos o decisiones',
            },
            {
                name: 'Consultar a expertos o colegas para obtener diferentes perspectivas sobre los riesgos',
            },
            {
                name: 'Utilizar herramientas como el Análisis SWOT o el Análisis de Efectos para evaluar amenazas con mayor precisión',
            },
        ],
    },
    {
        name: 'Mitigar riesgos',
        actions: [
            {
                name: 'Desarrollar tácticas de recuperación. Crear un plan claro para actuar rápidamente después de que ocurran incidentes o crisis',
            },
            {
                name: 'Establecer controles y procedimientos para reducir la probabilidad de riesgos',
            },
            {
                name: 'Implementar medidas preventivas específicas para cada tipo de riesgo identificado',
            },
        ],
    },
    {
        name: 'Evaluar la relación riesgo-recompensa',
        actions: [
            {
                name: 'Calcular el impacto potencial de cada riesgo en tus objetivos',
            },
            {
                name: 'Considerar los beneficios esperados al asumir el riesgo',
            },
            {
                name: 'Establecer umbrales de riesgo aceptables basados en tus prioridades y metas',
            },
        ],
    },
];
const Actions: FunctionComponent = async () => {
    const data = await useFetch({
        per_page: 6,
        query: 'risk',
        search: 'photos',
    });
    return (
        <section className='w-full max-w-4xl mx-auto py-12 md:py-20'>
            <header className='text-center mb-12'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100'>
                    Acciones para lograr mis objetivos
                </h1>
            </header>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {objetives.map(({ name, actions }, index) => (
                    <div
                        key={name}
                        className='flex flex-col items-center justify-center'
                    >
                        <img
                            src={data.results[index].urls.small}
                            width={200}
                            height={200}
                            alt='Objetivo 1'
                            className='rounded-full mb-4'
                        />
                        <h2>Objetivo {index + 1}</h2>
                        <h2 className='text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
                            {name}
                        </h2>
                        <div className='space-y-2 text-gray-700 dark:text-gray-400 mb-4'>
                            {actions.map(({ name }, index) => (
                                <>
                                    <h3 key={name}>Accion {index + 1}</h3>
                                    <p key={name}>{name}</p>
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-center justify-center mt-10'>
                <h2>Sustento</h2>
                <div className='grid grid-cols-3 grid-rows-2 gap-3 w-[37rem]'>
                    {data.results.map(({ id, urls: { small } }) => (
                        <div
                            key={id}
                            className='flex flex-row items-center justify-center'
                        >
                            <img
                                src={small}
                                alt={id}
                                className='object-cover aspect-square animate-one-pulse'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Actions;
