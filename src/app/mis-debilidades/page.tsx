import type { FunctionComponent } from 'react';
import { useFetch } from '../hooks/useFetch';

// type MyWeaknessesProps = {};

const MyWeaknesses: FunctionComponent = async () => {
    const data = await useFetch({
        per_page: 4,
        query: 'weaknesses',
        search: 'photos',
    });

    return (
        <section className='flex flex-col h-fit min-h-dvh p-10 items-center justify-center gap-10'>
            <h1 className='text-3xl'>Mis debilidades</h1>
            <div className='flex flex-row items-center justify-center gap-16'>
                <article className='flex flex-col gap-2 w-[30%]'>
                    <h2 className='text-3xl mb-2'>Asumir riesgos</h2>
                    <p className='mb-8'>
                        Asumir riesgos implica enfrentar situaciones inciertas o
                        desconocidas con la posibilidad de obtener beneficios o
                        sufrir consecuencias negativas.
                    </p>
                    <h2 className='text-3xl mb-2'>Acciones a realizar</h2>
                    <h3>Armarte de valor</h3>
                    <p className='mb-8'>
                        Deja de subestimarte. Reconoce tus capacidades y no
                        dudes de tu habilidad para manejar el estrés y la
                        responsabilidad. Considera los riesgos de conformarte. A
                        veces, no asumir riesgos también conlleva consecuencias,
                        como vivir con arrepentimiento. Recuerda que el riesgo
                        es relativo; cada persona tiene su propia tolerancia al
                        riesgo.
                    </p>
                    <h3>Beneficios de asumir riesgos</h3>
                    <p className='mb-8'>
                        En el liderazgo empresarial, la asunción de riesgos es
                        crucial para el crecimiento e innovación. Aprender de
                        los fracasos y descubrir necesidades del mercado son
                        ventajas de asumir riesgos.
                    </p>
                    <h3>Enfrentar miedos</h3>
                    <p>
                        Asumir riesgos te ayuda a superar temores como el miedo
                        al fracaso, a lo desconocido o a las críticas.
                    </p>
                </article>
                <ul className='flex flex-col gap-10'>
                    {/* {skills.map((skill) => (
                        <li className='text-3xl animate-bounce' key={skill}>
                            {skill}
                        </li>
                    ))} */}
                </ul>
                <div className='grid grid-cols-2 grid-rows-2 gap-3 aspect-square w-[37rem]'>
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

export default MyWeaknesses;
