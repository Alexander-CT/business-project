import type { FunctionComponent } from 'react';

// type PersonalSkillsProps = {};

const PersonalSkills: FunctionComponent = () => {
    return (
        <section className='flex flex-col h-fit min-h-dvh p-10 items-center justify-center gap-10'>
            <h1 className='text-3xl'>Habilidades personales</h1>
            <div className='flex flex-row gap-10 items-center justify-center'>
                <ul className='flex flex-col gap-2'>
                    <li className='text-3xl animate-bounce'>Iniciativa</li>
                    <li className='text-3xl animate-bounce'>Autonomía</li>
                    <li className='text-3xl animate-bounce'>Creatividad</li>
                </ul>
                <img
                    src='/creative.webp'
                    alt='creative'
                    className='aspect-video object-cover h-[40dvh] animate-one-pulse'
                />
            </div>
        </section>
    );
};

export default PersonalSkills;
