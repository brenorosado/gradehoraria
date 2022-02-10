export const mechatronicsSubjects = {
    calculo1: {
        key: "calculo1",
        name: 'Cálculo 1',
        hours: 72,
        completed: false,
        preRequisites: [],
        semester: 1,
    },
    sistemasDigitais: {
        key: "sistemasDigitais",
        name: 'Sistemas Digitais',
        hours: 72,
        completed: false,
        preRequisites: [],
        semester: 1,
    },
    aeds1: {
        key: "aeds1",
        name: 'AEDS 1',
        hours: 72,
        completed: false,
        preRequisites: [],
        semester: 1,
    },
    quimicaGeral: {
        key: "quimicaGeral",
        name: 'Química Geral',
        hours: 54,
        completed: false,
        preRequisites: [],
        semester: 1,
    },
    quimicaExperimental: {
        key: "quimicaExperimental",
        name: 'Química Experimental',
        hours: 18,
        completed: false,
        preRequisites: [],
        semester: 1,
    },
    introEngenharia: {
        key: "introEngenharia",
        name: 'Introdução à Engenharia',
        hours: 36,
        completed: false,
        preRequisites: [],
        semester: 1,
    },
    metodologiaCientifica: {
        key: "metodologiaCientifica",
        name: 'Metodologia Científica',
        hours: 36,
        completed: false,
        preRequisites: [],
        semester: 1,
    },
    calculo2: {
        key: "calculo2",
        name: 'Cálculo 2',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1'],
        semester: 2,
    },
    fisica1: {
        key: "fisica1",
        name: 'Física 1',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1'],
        semester: 2,
    },
    aeds2: {
        key: "aeds2",
        name: 'AEDS 2',
        hours: 72,
        completed: false,
        preRequisites: ['AEDS 1'],
        semester: 2,
    },
    gaal: {
        key: "gaal",
        name: 'GAAL',
        hours: 72,
        completed: false,
        preRequisites: [],
        semester: 2,
    },
    individuos: {
        key: "individuos",
        name: 'Indivíduos',
        hours: 36,
        completed: false,
        preRequisites: [],
        semester: 2,
    },
    cts: {
        key: "cts",
        name: 'CTS',
        hours: 36,
        completed: false,
        preRequisites: [],
        semester: 2,
    },
    calculo3: {
        key: "calculo3",
        name: 'Cálculo 3',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2'],
        semester: 3,
    },
    fisica2: {
        key: "fisica2",
        name: 'Física 2',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Física 1'],
        semester: 3,
    },
    poo: {
        key: "poo",
        name: 'POO',
        hours: 72,
        completed: false,
        preRequisites: ['AEDS 1'],
        semester: 3,
    },
    estatistica: {
        key: "estatistica",
        name: 'Estatística',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1'],
        semester: 3,
    },
    economia: {
        key: "economia",
        name: 'Economia',
        hours: 72,
        completed: false,
        preRequisites: [],
        semester: 3,
    },
    eda: {
        key: "eda",
        name: 'EDA',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2'],
        semester: 4,
    },
    fisica3: {
        key: "fisica3",
        name: 'Física 3',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Física 1'],
        semester: 4,
    },
    calculoNumerico: {
        key: "calculoNumerico",
        name: 'Cálculo Numérico',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1'],
        semester: 4,
    },
    microprocessadores: {
        key: "microprocessadores",
        name: 'Microprocessadores',
        hours: 72,
        completed: false,
        preRequisites: ['Sistemas Digitais'],
        semester: 4,
    },
    materiais: {
        key: "materiais",
        name: 'Materiais',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Física 1'],
        semester: 4,
    },
    edb: {
        key: "edb",
        name: 'EDB',
        hours: 36,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA'],
        semester: 5,
    },
    circuitos1teoria: {
        key: "circuitos1teoria",
        name: 'Circuitos 1 - Teoria',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA'],
        semester: 5,
    },
    circuitos1pratica: {
        key: "circuitos1pratica",
        name: 'Circuitos 1 - Prática',
        hours: 36,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA'],
        semester: 5,
    },
    cad1: {
        key: "cad1",
        name: 'CAD 1',
        hours: 36,
        completed: false,
        preRequisites: [],
        semester: 5,
    },
    processos: {
        key: "processos",
        name: 'Processos',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Física 1', 'Materiais'],
        semester: 5,
    },
    estatica: {
        key: "estatica",
        name: 'Estática',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Física 1'],
        semester: 5,
    },
    meioAmbiente: {
        key: "meioAmbiente",
        name: 'Meio Ambiente',
        hours: 36,
        completed: false,
        preRequisites: [],
        semester: 5,
    },
    modelagem: {
        key: "modelagem",
        name: 'Modelagem',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'EDB'],
        semester: 6,
    },
    eletronica1: {
        key: "eletronica1",
        name: 'Eletrônica 1',
        hours: 108,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'Circuitos 1 - Teoria'],
        semester: 6,
    },
    cad2: {
        key: "cad2",
        name: 'CAD 2',
        hours: 36,
        completed: false,
        preRequisites: ['CAD 1'],
        semester: 6,
    },
    mecanicaDosSolidos: {
        key: "mecanicaDosSolidos",
        name: 'Mecânica dos Sólidos',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Física 1', 'Estática'],
        semester: 6,
    },
    dinamica: {
        key: "dinamica",
        name: 'Dinâmica',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Física 1', 'Estática'],
        semester: 6,
    },
    controle1: {
        key: "controle1",
        name: 'Controle 1',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'EDB', 'Modelagem'],
        semester: 7,
    },
    eletronica2: {
        key: "eletronica2",
        name: 'Eletrônica 2',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'Circuitos 1 - Teoria', 'Eletrônica 1'],
        semester: 7,
    },
    maquinas: {
        key: "maquinas",
        name: 'Máquinas',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'Circuitos 1 - Teoria'],
        semester: 7,
    },
    informaticaIndustrial: {
        key: "informaticaIndustrial",
        name: 'Informática Industrial',
        hours: 72,
        completed: false,
        preRequisites: ['Sistemas Digitais', 'Microprocessadores'],
        semester: 7,
    },
    mecanismos: {
        key: "mecanismos",
        name: 'Mecanismos',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Física 1', 'Estática', 'Mecânica dos Sólidos'],
        semester: 7,
    },
    controle2: {
        key: "controle2",
        name: 'Controle 2',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'EDB', 'Modelagem', 'Controle 1'],
        semester: 8,
    },
    eletronicaDePotencia: {
        key: "eletronicaDePotencia",
        name: 'Eletrônica de Potência',
        hours: 36,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'Circuitos 1 - Teoria', 'Eletrônica 1'],
        semester: 8,
    },
    labMaquinas: {
        key: "labMaquinas",
        name: 'Lab. Máquinas',
        hours: 36,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'Circuitos 1 - Teoria'],
        semester: 8,
    },
    redesIndustriais: {
        key: "redesIndustriais",
        name: 'Redes Industriais',
        hours: 72,
        completed: false,
        preRequisites: ['Sistemas Digitais', 'Microprocessadores', 'Informática Industrial'],
        semester: 8,
    },
    mecanicaComputacional: {
        key: "mecanicaComputacional",
        name: 'Mecânica Computacional',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Física 1', 'Estática', 'Mecânica dos Sólidos'],
        semester: 8,
    },
    instrumentacao: {
        key: "instrumentacao",
        name: 'Instrumentação',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'EDB', 'Modelagem'],
        semester: 8,
    },
    controle3: {
        key: "controle3",
        name: 'Controle 3',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'EDB', 'Modelagem', 'Controle 1'],
        semester: 9,
    },
    sistemasEmbarcados: {
        key: "sistemasEmbarcados",
        name: 'Sistemas Embarcados',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'Circuitos 1 - Teoria', 'Eletrônica 1'],
        semester: 9,
    },
    optativa1: {
        key: "optativa1",
        name: 'Optativa 1',
        hours: 72,
        completed: false,
        preRequisites: [],
        semester: 9,
    },
    sistemasSupervisorios: {
        key: "sistemasSupervisorios",
        name: 'Sistemas Supervisórios',
        hours: 72,
        completed: false,
        preRequisites: ['Sistemas Digitais', 'Microprocessadores', 'Informática Industrial'],
        semester: 9,
    },
    sistemasMecanicos: {
        key: "sistemasMecanicos",
        name: 'Sistemas Mecânicos',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Física 1', 'Estática', 'Mecânica dos Sólidos', 'Dinâmica'],
        semester: 9,
    },
    tcc1: {
        key: "tcc1",
        name: 'TCC 1',
        hours: 0,
        completed: false,
        preRequisites: [],
        semester: 9,
    },
    robotica: {
        key: "robotica",
        name: 'Robótica',
        hours: 72,
        completed: false,
        preRequisites: ['Cálculo 1', 'Cálculo 2', 'EDA', 'EDB', 'Modelagem', 'Controle 1', 'Controle 2'],
        semester: 10,
    },
    optativa2: {
        key: "optativa2",
        name: 'Optativa 2',
        hours: 72,
        completed: false,
        preRequisites: [],
        semester: 10,
    },
    optativa3: {
        key: "optativa3",
        name: 'Optativa 3',
        hours: 72,
        completed: false,
        preRequisites: [],
        semester: 10,
    },
    integracaoDeSistemasAutomatizados: {
        key: "integracaoDeSistemasAutomatizados",
        name: 'Integração de Sistemas Automatizados',
        hours: 72,
        completed: false,
        preRequisites: ['Sistemas Digitais', 'Microprocessadores', 'Informática Industrial', 'Sistemas Supervisórios'],
        semester: 10,
    },
    optativa4: {
        key: "optativa4",
        name: 'Optativa 4',
        hours: 72,
        completed: false,
        preRequisites: [],
        semester: 10,
    },
    tcc2: {
        key: "tcc2",
        name: 'TCC 2',
        hours: 36,
        completed: false,
        preRequisites: ['TCC 1'],
        semester: 10,
    },
    estagio: {
        key: "estagio",
        name: 'Estágio',
        hours: 200,
        completed: false,
        preRequisites: [],
        semester: 10,
    },
}