import Subject from "../src/components/Subject";
import { HomeMain, Semester } from "../src/styles/home";

const Home = () => {
  return (
    <HomeMain>
      <h1>Estrutura curricular - Engenharia Mecatrônica</h1>
      <section>
        <Semester>
          <span>1º Semestre</span>
          <Subject title="Cálculo 1" hours="72" completed={false} />
          <Subject title="Sistemas Digitais" hours="72" />
          <Subject title="AEDS 1" hours="72" />
          <Subject title="Química Geral" hours="54" />
          <Subject title="Química Experimental" hours="18" />
          <Subject title="Introdução à Engenharia" hours="36" />
          <Subject title="Metodologia Científica" hours="36" />
        </Semester>
        <Semester>
          <span>2º Semestre</span>
          <Subject title="Cálculo 2" hours="72" />
          <Subject title="Física 1" hours="72" />
          <Subject title="AEDS 2" hours="72" />
          <Subject title="GAAL" hours="72" />
          <Subject title="Indivíduos" hours="36" />
          <Subject title="CTS" hours="36" />
        </Semester>
        <Semester>
          <span>3º Semestre</span>
          <Subject title="Cálculo 3" hours="72" />
          <Subject title="Física 2" hours="72" />
          <Subject title="POO" hours="72" />
          <Subject title="Estatística" hours="72" />
          <Subject title="Economia" hours="72" />
        </Semester>
        <Semester>
          <span>4º Semestre</span>
          <Subject title="EDA" hours="72" />
          <Subject title="Física 3" hours="72" />
          <Subject title="Cálculo Numérico" hours="72" />
          <Subject title="Microprocessadores" hours="72" />
          <Subject title="Materiais" hours="72" />
        </Semester>
        <Semester>
          <span>5º Semestre</span>
          <Subject title="EDB" hours="36" />
          <Subject title="Circuitos 1" hours="108" />
          <Subject title="CAD 1" hours="36" />
          <Subject title="Processos" hours="72" />
          <Subject title="Estática" hours="72" />
          <Subject title="Meio Ambiente" hours="36" />
        </Semester>
        <Semester>
          <span>6º Semestre</span>
          <Subject title="Modelagem" hours="72" />
          <Subject title="Eletrônica 1" hours="108" />
          <Subject title="CAD 2" hours="36" />
          <Subject title="Mecânica dos Sólidos" hours="72" />
          <Subject title="Dinâmica" hours="72" />
        </Semester>
        <Semester>
          <span>7º Semestre</span>
          <Subject title="Controle 1" hours="72" />
          <Subject title="Eletrônica 2" hours="72" />
          <Subject title="Máquinas" hours="72" />
          <Subject title="Informática Industrial" hours="72" />
          <Subject title="Mecanismos" hours="72" />
        </Semester>
        <Semester>
          <span>8º Semestre</span>
          <Subject title="Controle 2" hours="72" />
          <Subject title="Eletrônica de Potência" hours="36" />
          <Subject title="Lab. Máquinas" hours="36" />
          <Subject title="Redes Industriais" hours="72" />
          <Subject title="Mecânica Computacional" hours="72" />
          <Subject title="Instrumentação" hours="72" />
        </Semester>
        <Semester>
          <span>9º Semestre</span>
          <Subject title="Controle 3" hours="72" />
          <Subject title="Sistemas Embarcados" hours="72" />
          <Subject title="Optativa 1" hours="72" />
          <Subject title="Sistemas Supervisórios 1" hours="72" />
          <Subject title="Sistemas Mecânicos" hours="72" />
          <Subject title="TCC 1" hours="0" />
        </Semester>
        <Semester>
          <span>10º Semestre</span>
          <Subject title="Robótica" hours="72" />
          <Subject title="Optativa 2" hours="72" />
          <Subject title="Optativa 3" hours="72" />
          <Subject title="Integração de Sistemas Automatizados" hours="72" />
          <Subject title="Optativa 4" hours="72" />
          <Subject title="TCC 2" hours="36" />
          <Subject title="Estágio" hours="200" />
        </Semester>
      </section>
    </HomeMain>
  );
};

export default Home;
