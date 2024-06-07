'use client';
import { useFetch } from '@/app/hooks/useFetch';
import styles from '@/app/styles/BusinessModelYou.module.css';
import { useRef, type FunctionComponent } from 'react';

// type BussinessModelYouProps = {};
const BussinessModelYou: FunctionComponent = () => {
    const data = useFetch({
        per_page: 10,
        query: 'family',
        search: 'photos',
    });
    const models = [
        {
            question: '¿Quién eres y qué tienes?',
            answer: () => (
                <p className={styles.paragraph}>
                    Soy Alexander Piero Castro Tocaffondi, programador
                    full-stack, poseo grandes habilidades analíticas con enfoque
                    en la colaboración y resultados.
                </p>
            ),
        },
        {
            question: '¿Qué haces?',
            answer: () => (
                <p className={styles.paragraph}>
                    Brindo soluciones de software a todo tipo de problemas,
                    desde rendimiento hasta diseño de páginas web y desarrollo
                    de APIs
                </p>
            ),
        },
        {
            question: '¿Cómo ayudas?',
            answer: async () => (
                <>
                    <p className={styles.paragraph}>
                        Dando feedback, colaborando y contribuyendo en función
                        de la dinámica de equipo comprometiéndome con los
                        resultados y respaldando cada propuesta.
                    </p>
                    <img src={(await data).results[1].urls.regular} alt='' />
                </>
            ),
        },
        {
            question: '¿A quiénes ayuda?',
            answer: async () => (
                <>
                    <p className={styles.paragraph}>
                        Creando soluciones de software además de brindar
                        soluciones empresariales también puedo apoyar
                        económicamente a mi familia.
                    </p>
                    <img src={(await data).results[2].urls.regular} alt='' />
                </>
            ),
        },
        {
            question: '¿Cómo te conocen y cómo haces llegar lo que ofreces?',
            answer: () => (
                <p className={styles.paragraph}>
                    Me conocen en la universidad como en LinkedIn, ahí se puede
                    encontrar información más detallada sobre mí{' '}
                    <a
                        href='https://www.linkedin.com/in/alexander-castro-tocaffondi/'
                        target='_blank'
                        rel='noreferrer noopenner'
                        className={styles.link}
                    >
                        LinkedIn
                    </a>
                </p>
            ),
        },
        {
            question: '¿Cómo interactúas?',
            answer: () => (
                <p className={styles.paragraph}>
                    Amablemente, siempre colaborando e incentivando la escucha
                    activa de nuevas ideas,
                </p>
            ),
        },
        {
            question: '¿Quiénes te ayudan?',
            answer: async () => (
                <>
                    <p className={styles.paragraph}>
                        Me apoyan familia, amigos, compañeros y maestros, su
                        apoyo y confianza siempre es bien valorada y dispongo de
                        mi tiempo para retribuir, fundamentalmente su apoyo me
                        ayuda a seguir adelante
                    </p>
                    <img src={(await data).results[0].urls.regular} alt='' />
                </>
            ),
        },
        {
            question: '¿Qué das?',
            answer: () => (
                <>
                    <p className={styles.paragraph}>
                        Ofrezco un enfoque creativo, como programador
                        full-stack, mi objetivo es más que simplemente escribir
                        código, aporto ideas frescas y soluciones tecnológicas
                        innovadoras.
                    </p>
                    <p className={styles.paragraph}>
                        Trabajo en sinergia con el equipo, gestionando riesgos y
                        enfocándome en obtener resultados tangibles. Mi
                        habilidad para combinar visión estratégica con
                        habilidades técnicas me permite ofrecer un valor
                        excepcional en cada proyecto.
                    </p>
                </>
            ),
        },
        {
            question: '¿Qué obtienes?',
            answer: () => (
                <p>
                    Este análisis me permite determinar con precisión los
                    factores e interacciones que me permitirán efectuar mi marca
                    personal y ampliar mi perspectiva respecto al business model
                    you.
                </p>
            ),
        },
    ];
    return (
        <section className={styles.BusinessModelYou}>
            <div className={styles.table}>
                {models.map(({ question, answer: Answer }, index) => {
                    const questionAndAnswerRef = useRef<HTMLDivElement>(null);
                    const textCopied =
                        questionAndAnswerRef.current?.innerText || '';

                    return (
                        <div key={question} className={styles.model}>
                            <div ref={questionAndAnswerRef}>
                                <h2 className={styles.question}>
                                    {index + 1}. {question}
                                </h2>
                                <div className={styles.answer}>
                                    <Answer />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default BussinessModelYou;
