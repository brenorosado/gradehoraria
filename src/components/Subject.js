import { useEffect } from 'react';
import { SubjectContainer } from '../styles/subject';

const Subject = ({ subject, subjectKey, subjects, setSubjects }) => {
    const { name, hours, completed, preRequisites } = subject;

    let preRequisitesNotCompleted = [];

    preRequisites.map(item => {
        const { completed } = Object.values(subjects).find(({ name }) => name === item);
        if (!completed) preRequisitesNotCompleted.push(item);
    });

    useEffect(() => {
        if (preRequisitesNotCompleted.length > 0) {
            setSubjects(prevSubjects => ({
                ...prevSubjects,
                [subjectKey]: {
                    ...subject,
                    completed: false,
                }
            }));
        };
    }, [subjects]);

    return (
        <SubjectContainer
            onClick={(e) => {
                (preRequisitesNotCompleted.length > 0) ? (
                    setSubjects(prevSubjects => ({
                        ...prevSubjects,
                        [subjectKey]: {
                            ...subject,
                            completed: false,
                        }
                    }))
                ) : (
                    setSubjects(prevSubjects => ({
                        ...prevSubjects,
                        [subjectKey]: {
                            ...subject,
                            completed: !subject.completed,
                        }
                    }))
                )
            }}
            color={
                (preRequisitesNotCompleted.length > 0) ? (
                    'lightcoral'
                ) : (
                    completed ? 'lightgreen' : 'lightyellow'
                )
            }
        >
            <h4>{name}</h4>
            <span>Carga horária: {hours}h</span>
        </SubjectContainer >
    );
};

export default Subject;