import SemesterSubjects from "../src/components/SemesterSubjects";
import { mechatronicsSubjects } from "../src/utils/mechatronicsSubjects";
import { HomeMain } from "../src/styles/home";
import { useState } from "react";

const Home = () => {
  const [subjects, setSubjects] = useState(mechatronicsSubjects);

  let totoalCoursedHours = 0;

  Object.values(subjects).map(item => {
    if(item.completed) totoalCoursedHours = totoalCoursedHours + item.hours;
  });

  return (
    <HomeMain>
      <h1>Estrutura curricular: Engenharia Mecatrônica - UFSJ</h1>
      <section>
        <SemesterSubjects semester={1} subjects={subjects} setSubjects={setSubjects} />
        <SemesterSubjects semester={2} subjects={subjects} setSubjects={setSubjects} />
        <SemesterSubjects semester={3} subjects={subjects} setSubjects={setSubjects} />
        <SemesterSubjects semester={4} subjects={subjects} setSubjects={setSubjects} />
        <SemesterSubjects semester={5} subjects={subjects} setSubjects={setSubjects} />
        <SemesterSubjects semester={6} subjects={subjects} setSubjects={setSubjects} />
        <SemesterSubjects semester={7} subjects={subjects} setSubjects={setSubjects} />
        <SemesterSubjects semester={8} subjects={subjects} setSubjects={setSubjects} />
        <SemesterSubjects semester={9} subjects={subjects} setSubjects={setSubjects} />
        <SemesterSubjects semester={10} subjects={subjects} setSubjects={setSubjects} />
      </section>
      <section>
        <h3>Carga horária cursada: {totoalCoursedHours}h</h3>
      </section>
    </HomeMain>
  );
};

export default Home;
