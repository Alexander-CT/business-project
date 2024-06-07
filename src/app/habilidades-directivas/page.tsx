import type { FunctionComponent } from 'react';
import { useFetch } from '../hooks/useFetch';

// type ManagementSkillsProps = {};

const skills = ['Liderazgo', 'Toma de decisiones', 'Planificación'];
const ManagemetSkills: FunctionComponent = async () => {
    const data = await useFetch({
        per_page: 4,
        query: 'management',
        search: 'photos',
    });

    return (
        <section className='flex flex-col h-fit min-h-dvh p-10 items-center justify-center gap-10'>
            <h1 className='text-3xl'>Habilidades directivas</h1>
            <div className='flex flex-row items-center justify-center gap-16'>
                <ul className='flex flex-col gap-10'>
                    {skills.map((skill) => (
                        <li className='text-3xl animate-bounce' key={skill}>
                            {skill}
                        </li>
                    ))}
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

export default ManagemetSkills;
