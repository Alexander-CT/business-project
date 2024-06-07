import type { FunctionComponent } from 'react';
import { useFetch } from '../hooks/useFetch';

// type PersonalValueProps = {};
function CrownIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z' />
            <path d='M5 21h14' />
        </svg>
    );
}

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
        </svg>
    );
}

function SlidersVerticalIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <line x1='4' x2='4' y1='21' y2='14' />
            <line x1='4' x2='4' y1='10' y2='3' />
            <line x1='12' x2='12' y1='21' y2='12' />
            <line x1='12' x2='12' y1='8' y2='3' />
            <line x1='20' x2='20' y1='21' y2='16' />
            <line x1='20' x2='20' y1='12' y2='3' />
            <line x1='2' x2='6' y1='14' y2='14' />
            <line x1='10' x2='14' y1='8' y2='8' />
            <line x1='18' x2='22' y1='16' y2='16' />
        </svg>
    );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
            <circle cx='9' cy='7' r='4' />
            <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
            <path d='M16 3.13a4 4 0 0 1 0 7.75' />
        </svg>
    );
}
const PersonalValue: FunctionComponent = async () => {
    const data = await useFetch({
        per_page: 4,
        query: 'developer',
        search: 'photos',
    });
    return (
        <section className='w-full max-w-5xl mx-auto py-12 md:py-24 lg:py-32'>
            <div className='px-4 md:px-6'>
                <div className='space-y-6 md:space-y-10'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                            Mi valor personal
                        </h2>
                        <p className='max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                            Destaco por mi efectiva comunicación, trabajo en
                            equipo, resolución de problemas y liderazgo.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        <div className='flex items-start gap-4'>
                            <div className='bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800'>
                                <MessageCircleIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>
                                    Comunicación Efectiva
                                </h3>
                                <p className='text-gray-500 dark:text-gray-400'>
                                    Transmito ideas de manera clara y concisa,
                                    adaptándome a diferentes audiencias.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start gap-4'>
                            <div className='bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800'>
                                <UsersIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>
                                    Trabajo en Equipo
                                </h3>
                                <p className='text-gray-500 dark:text-gray-400'>
                                    Colaboro de manera efectiva con mis colegas,
                                    fomentando un ambiente de confianza y
                                    respeto.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start gap-4'>
                            <div className='bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800'>
                                <SlidersVerticalIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>
                                    Resolución de Problemas
                                </h3>
                                <p className='text-gray-500 dark:text-gray-400'>
                                    Analizo situaciones de manera crítica y
                                    encuentro soluciones innovadoras a los
                                    desafíos.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start gap-4'>
                            <div className='bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800'>
                                <CrownIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>
                                    Liderazgo
                                </h3>
                                <p className='text-gray-500 dark:text-gray-400'>
                                    Motivo y guío a mi equipo, inspirándolos a
                                    alcanzar sus objetivos de manera efectiva.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 md:mt-20'>
                    <div className='space-y-6 md:space-y-10'>
                        <div className='text-center'>
                            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                                Lo que dicen de mí
                            </h2>
                            <p className='max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                                Mis colegas y clientes destacan mi desempeño en
                                estas áreas.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                            <div className='bg-gray-100 rounded-lg p-6 dark:bg-gray-800'>
                                <blockquote className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-4'>
                                        <img
                                            className='rounded-full aspect-square h-20'
                                            src={data.results[0].urls.small}
                                            alt=''
                                        />
                                        <div>
                                            <p className='text-sm font-medium leading-none'>
                                                John Doe
                                            </p>
                                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                                                Gerente de Proyecto
                                            </p>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 dark:text-gray-400'>
                                        "Alexander es un excelente comunicador y
                                        líder. Siempre logra motivar a su equipo
                                        y encontrar soluciones creativas a los
                                        problemas."
                                    </p>
                                </blockquote>
                            </div>
                            <div className='bg-gray-100 rounded-lg p-6 dark:bg-gray-800'>
                                <blockquote className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-4'>
                                        <img
                                            className='rounded-full aspect-square h-20'
                                            src={data.results[1].urls.small}
                                            alt=''
                                        />
                                        <div>
                                            <p className='text-sm font-medium leading-none'>
                                                Sarah Miller
                                            </p>
                                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                                                Directora de Marketing
                                            </p>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 dark:text-gray-400'>
                                        "He tenido el placer de trabajar con
                                        Alexander en varios proyectos. Su
                                        capacidad de trabajo en equipo y
                                        resolución de problemas es excepcional."
                                    </p>
                                </blockquote>
                            </div>
                            <div className='bg-gray-100 rounded-lg p-6 dark:bg-gray-800'>
                                <blockquote className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-4'>
                                        <img
                                            className='rounded-full aspect-square h-20'
                                            src={data.results[2].urls.small}
                                            alt=''
                                        />
                                        <div>
                                            <p className='text-sm font-medium leading-none'>
                                                Tom Lee
                                            </p>
                                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                                                Cliente
                                            </p>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 dark:text-gray-400'>
                                        "Alexander es un profesional
                                        excepcional. Su comunicación clara y su
                                        capacidad de liderazgo han sido
                                        fundamentales para el éxito de nuestro
                                        proyecto."
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalValue;
