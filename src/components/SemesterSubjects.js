import Subject from "./Subject";
import { SemesterContainer } from '../styles/semestersubjects';

const SemesterSubjects = ({ semester, subjects, setSubjects }) => {

    const arrayOfSubjects = Object.values(subjects).filter(item => item.semester == semester);

    return (
        <SemesterContainer>
            <span>{semester}º semestre</span>
            {
                arrayOfSubjects.map(item => {
                    const { key } = item;
                    return <Subject subjectKey={key} subject={item} subjects={subjects} setSubjects={setSubjects} />;
                })
            }
        </SemesterContainer>
    );
};

export default SemesterSubjects;