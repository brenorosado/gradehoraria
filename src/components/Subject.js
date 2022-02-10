import { useState } from 'react';
import { SubjectContainer } from '../styles/subject';

const Subject = ({ title, hours, prerequisites }) => {
    const [subjectCompleted, setSubjectCompleted] = useState(false);

    return (
        <SubjectContainer onClick={(e) => setSubjectCompleted(!subjectCompleted)} color={subjectCompleted ? 'lightgreen' : 'lightyellow'}>
            <h4>{title}</h4>
            <span>Carga horária: {hours}h</span>
        </SubjectContainer>
    );
};

export default Subject;