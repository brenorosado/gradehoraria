import { SubjectContainer } from '../styles/subject';

const Subject = ({ subject, updateSubjects }) => {
    return (
        <SubjectContainer
            onClick={(e) => {
                e.preventDefault();
                if(subject.available) updateSubjects(subject);
            }}
            color={subject.completed ? 'lightgreen' : subject.available ? 'lightyellow' : 'lightcoral'}
        >
            <h4>{subject.name}</h4>
            <span>Carga horária: {subject.hours}h</span>
        </SubjectContainer >
    );
};

export default Subject;