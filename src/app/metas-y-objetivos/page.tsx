import type { FunctionComponent } from 'react';
import { useFetch } from '../hooks/useFetch';

// type GoalsProps = {};

const objetives = [
    'Evaluar los posibles beneficios y consecuencias antes de tomar decisiones',
    'Comenzar con pequeños pasos, dividir los problemas en pequeñas partes para mejorar la solución',
    'Aprender de los fracasos y descubrir nuevas perspectivas de solución',
    'Actitud positiva para superar los desafíos',
];

const Goals: FunctionComponent = async () => {
    const data = await useFetch({
        per_page: 6,
        query: 'risk',
        search: 'photos',
    });

    return (
        <section className='flex flex-col h-fit min-h-dvh p-14 items-center justify-center gap-10'>
            <h1 className='text-4xl text-center md:text-5xl mt-9'>
                Metas y objetivos
            </h1>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='text-3xl'>Meta</h2>
                <p className='text-2xl animate-pulse mb-11'>
                    Mejorar el asumir riesgos
                </p>
                <h2 className='text-3xl mb-8'>Objetivos a corto plazo</h2>
                <ul className='flex flex-col gap-10'>
                    {objetives.map((objetive) => (
                        <li className='text-3xl' key={objetive}>
                            {objetive}
                        </li>
                    ))}
                </ul>
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
                            <p className='text-3xl animate-bounce'>
                                {/* {user.username} */}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Goals;
