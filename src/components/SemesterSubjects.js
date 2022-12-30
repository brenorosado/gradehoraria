import Subject from "./Subject";
import { SemesterContainer } from '../styles/semestersubjects';

const SemesterSubjects = ({ semester, subjects, updateSubjects }) => {

    const arrayOfSubjects = subjects?.length > 0 ? subjects?.filter(item => item.semester == semester) : [];

    return (
        <SemesterContainer>
            <span>{semester}º semestre</span>
            {
                arrayOfSubjects.map(item => {
                    const { key } = item?.key;
                    return <Subject subjectKey={key} subject={item} subjects={subjects} updateSubjects={updateSubjects} />;
                })
            }
        </SemesterContainer>
    );
};

export default SemesterSubjects;