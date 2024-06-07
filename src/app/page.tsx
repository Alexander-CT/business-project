import { useFetch } from '@/app/hooks/useFetch';
import type { SVGProps } from 'react';

function BookIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
        </svg>
    );
}

function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d='M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
            <rect width='20' height='14' x='2' y='6' rx='2' />
        </svg>
    );
}

function CrownIcon(props: SVGProps<SVGSVGElement>) {
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

function HandshakeIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d='m11 17 2 2a1 1 0 1 0 3-3' />
            <path d='m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4' />
            <path d='m21 3 1 11h-2' />
            <path d='M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3' />
            <path d='M3 4h8' />
        </svg>
    );
}

function MessageCircleIcon(props: SVGProps<SVGSVGElement>) {
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

function MountainIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
        </svg>
    );
}

function PaletteIcon(props: SVGProps<SVGSVGElement>) {
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
            <circle cx='13.5' cy='6.5' r='.5' fill='currentColor' />
            <circle cx='17.5' cy='10.5' r='.5' fill='currentColor' />
            <circle cx='8.5' cy='7.5' r='.5' fill='currentColor' />
            <circle cx='6.5' cy='12.5' r='.5' fill='currentColor' />
            <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z' />
        </svg>
    );
}

function PresentationIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d='M2 3h20' />
            <path d='M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3' />
            <path d='m7 21 5-5 5 5' />
        </svg>
    );
}

function RocketIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' />
            <path d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' />
            <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' />
            <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' />
        </svg>
    );
}

function TrophyIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d='M6 9H4.5a2.5 2.5 0 0 1 0-5H6' />
            <path d='M18 9h1.5a2.5 2.5 0 0 0 0-5H18' />
            <path d='M4 22h16' />
            <path d='M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22' />
            <path d='M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22' />
            <path d='M18 2H6v7a6 6 0 0 0 12 0V2Z' />
        </svg>
    );
}

function UsersIcon(props: SVGProps<SVGSVGElement>) {
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
const Home = async () => {
    const data = await useFetch({
        per_page: 10,
        query: 'family',
        search: 'photos',
    });
    return (
        <div className='bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-50 font-inter'>
            <div className='container mx-auto px-4 py-12 md:py-16 lg:py-20'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 mb-11'>
                    Presentación personal
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                    <div className='relative rounded-xl overflow-hidden'>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#5E50EE] to-[#8D7EF5] opacity-50' />
                        <div className="absolute inset-0 bg-[url('/geometric-pattern.svg')] bg-repeat opacity-20" />
                        <img
                            src={'/alex.jpg'}
                            width={400}
                            height={400}
                            alt='Profile'
                            className='relative z-10 w-full h-full object-cover'
                        />
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-3xl md:text-4xl font-bold'>
                            Saludos, soy Alexander Piero Castro Tocaffondi
                        </h1>
                        <p className='text-lg text-gray-600 dark:text-gray-400'>
                            Soy un apasionado del trabajo en equipo, la
                            comunicación efectiva y el liderazgo. Me encantan
                            los desafíos y disfruto ayudando a los demás a
                            alcanzar sus objetivos. Siempre estoy buscando
                            formas de mejorar y crecer, tanto a nivel personal
                            como profesional y técnico.
                        </p>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='flex flex-col items-center'>
                                <UsersIcon className='w-8 h-8 text-[#5E50EE]' />
                                <span className='text-sm font-medium'>
                                    Trabajo en equipo
                                </span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <MessageCircleIcon className='w-8 h-8 text-[#8D7EF5]' />
                                <span className='text-sm font-medium'>
                                    Comunicación
                                </span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <CrownIcon className='w-8 h-8 text-[#F6A609]' />
                                <span className='text-sm font-medium'>
                                    Liderazgo
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 md:mt-16 lg:mt-20'>
                    <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                        2 Claves del autoliderazgo
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6'>
                            <div className='flex items-center mb-4'>
                                <PresentationIcon className='w-8 h-8 text-[#5E50EE] mr-3' />
                                <h3 className='text-lg font-bold'>
                                    Poder personal
                                </h3>
                            </div>
                            <p className='text-gray-600 dark:text-gray-400'>
                                Es hacer frente a desafíos sin temor, con
                                determinación, confianza, convirtiendo los
                                imposibles en realidades.
                            </p>
                        </div>
                        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6'>
                            <div className='flex items-center mb-4'>
                                <HandshakeIcon className='w-8 h-8 text-[#8D7EF5] mr-3' />
                                <h3 className='text-lg font-bold'>Elección</h3>
                            </div>
                            <p className='text-gray-600 dark:text-gray-400'>
                                Cuando tienes metas claras puedes elegir cómo y
                                dónde vivir en este mundo.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-12 md:mt-16 lg:mt-20'>
                    <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                        2 Valores morales que guían mi conducta
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6'>
                            <div className='flex items-center mb-4'>
                                <TrophyIcon className='w-8 h-8 text-[#5E50EE] mr-3' />
                                <h3 className='text-lg font-bold'>
                                    Responsabilidad
                                </h3>
                            </div>
                            <p className='text-gray-600 dark:text-gray-400'>
                                La responsabilidad es la cualidad que tiene un
                                individuo que cumple sus obligaciones o promesas
                                y asume las consecuencias de sus actos de manera
                                consciente e intencionada
                            </p>
                        </div>
                        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6'>
                            <div className='flex items-center mb-4'>
                                <BriefcaseIcon className='w-8 h-8 text-[#8D7EF5] mr-3' />
                                <h3 className='text-lg font-bold'>Respeto</h3>
                            </div>
                            <p className='text-gray-600 dark:text-gray-400'>
                                Implica aceptar y valorar las diferencias,
                                reconocer los derechos y dignidad de los demás,
                                y actuar de manera ética y justa. El respeto
                                debe ser recíproco y nos coloca en un plano de
                                igualdad
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-12 md:mt-16 lg:mt-20'>
                    <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                        Mis 2 inteligencias múltiples
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6'>
                            <div className='flex items-center mb-4'>
                                <PresentationIcon className='w-8 h-8 text-[#5E50EE] mr-3' />
                                <h3 className='text-lg font-bold'>
                                    Inteligencia intrapersonal
                                </h3>
                            </div>
                            <p className='text-gray-600 dark:text-gray-400'>
                                Es la capacidad de construir una percepción
                                precisa respecto de sí mismo y de organizar y
                                dirigir su propia vida. Incluye la
                                autodisciplina, la autocomprensión y la
                                autoestima. Reconocer los estados subjetivos,
                                las propias emociones y sentimientos, tener
                                claridad sobre las razones que llevan a
                                reaccionar de un modo u otro; y comportarse de
                                una manera que resulte adecuada a las
                                necesidades, metas y habilidades personales
                            </p>
                        </div>
                        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6'>
                            <div className='flex items-center mb-4'>
                                <HandshakeIcon className='w-8 h-8 text-[#8D7EF5] mr-3' />
                                <h3 className='text-lg font-bold'>
                                    Inteligencia naturalista
                                </h3>
                            </div>
                            <p className='text-gray-600 dark:text-gray-400'>
                                Es la capacidad de distinguir, clasificar y
                                utilizar elementos del medio ambiente, objetos,
                                animales o plantas. Tanto del ambiente urbano
                                como suburbano o rural. Incluye las habilidades
                                de observación, experimentación, reflexión y
                                cuestionamiento de nuestro entorno. Permite
                                reconocer y clasificar especies de la flora y la
                                fauna. Ayuda a distinguir las especies del
                                entorno que son valiosas o peligrosas, y a
                                categorizar organismos nuevos o poco familiares.
                                Favorece un amplio conocimiento del mundo
                                viviente. Se encuentra con un biólogo, un
                                antropólogo
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-12 md:mt-16 lg:mt-20'>
                    <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                        Personas
                    </h2>
                    <p className='mb-4 text-gray-600 dark:text-gray-400'>
                        Personas que más han influenciaso en mi desarrollo
                        personal
                    </p>
                    <ul>
                        <li>Familia</li>
                        <li>Amigos</li>
                        <li>Maestros</li>
                    </ul>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {data.results.map((result) => (
                            <img
                                key={result.id}
                                className='rounded-full aspect-square'
                                src={result.urls.small}
                                alt=''
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
