export interface ScriptLine {
  id: string;
  character: string;
  text: string;
  act: number;
  scene: number;
  soundEffect?: string;
  notes?: string;
}

export interface Character {
  id: string;
  name: string;
  displayName: string;
  color: string;
  description: string;
}

export const characters: Character[] = [
  {
    id: "jovem1",
    name: "JOVEM 1",
    displayName: "Jovem 1",
    color: "#FF6B6B",
    description: "Jovem descontraído, sempre procurando internet"
  },
  {
    id: "jovem2",
    name: "JOVEM 2",
    displayName: "Jovem 2",
    color: "#4ECDC4",
    description: "Jovem que estava assistindo série"
  },
  {
    id: "jovem3",
    name: "JOVEM 3",
    displayName: "Jovem 3",
    color: "#FFE66D",
    description: "Jovem que só lê legenda"
  },
  {
    id: "jovem4",
    name: "JOVEM 4",
    displayName: "Jovem 4",
    color: "#95E1D3",
    description: "Jovem observador"
  },
  {
    id: "jovem5",
    name: "JOVEM 5",
    displayName: "Jovem 5",
    color: "#C7CEEA",
    description: "Jovem questionador"
  },
  {
    id: "bibliotecario",
    name: "BIBLIOTECÁRIO",
    displayName: "Bibliotecário",
    color: "#B19CD9",
    description: "Guardião dos livros e histórias"
  },
  {
    id: "joao",
    name: "JOÃO GRILO",
    displayName: "João Grilo",
    color: "#C85A17",
    description: "Protagonista esperto e pobre do sertão"
  },
  {
    id: "chico",
    name: "CHICÓ",
    displayName: "Chicó",
    color: "#E8D4B8",
    description: "Companheiro medroso de João"
  },
  {
    id: "encourado",
    name: "ENCOURADO",
    displayName: "Encourado (Diabo)",
    color: "#722F37",
    description: "O Diabo, juiz do julgamento"
  },
  {
    id: "jesus",
    name: "JESUS",
    displayName: "Jesus (Manuel)",
    color: "#F5E6D3",
    description: "Jesus Cristo no julgamento"
  },
  {
    id: "maria",
    name: "MARIA",
    displayName: "Maria (A Compadecida)",
    color: "#2C5F8D",
    description: "Nossa Senhora, a Compadecida"
  },
  {
    id: "narrador",
    name: "NARRADOR",
    displayName: "Narrador",
    color: "#A0A0A0",
    description: "Voz que narra a história"
  },
  {
    id: "todos",
    name: "TODOS",
    displayName: "Todos",
    color: "#666666",
    description: "Quando todos falam junto"
  }
];

export const scriptLines: ScriptLine[] = [
  // ATO 1 - JOVENS NA BIBLIOTECA
  {
    id: "1-1-1",
    character: "JOVEM 1",
    text: "Gente… pelo amor de Deus… alguém tem internet?",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-2",
    character: "JOVEM 2",
    text: "A minha acabou no meio do vídeo!",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-3",
    character: "JOVEM 3",
    text: "Eu tava quase zerando minha série…",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-4",
    character: "JOVEM 4",
    text: "Calma, calma!\nMeu primo falou que aqui tem Wi-Fi grátis.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-5",
    character: "TODOS",
    text: "(Todos param e olham em volta.)",
    act: 1,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "1-1-6",
    character: "JOVEM 5",
    text: "Peraí…\nIsso aqui é uma biblioteca MESMO?",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-7",
    character: "JOVEM 2",
    text: "Achei que biblioteca nem existia mais.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-8",
    character: "JOVEM 1",
    text: "Achei que era coisa de filme antigo.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-9",
    character: "JOVEM 3",
    text: "Ou lugar de castigo de escola.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-10",
    character: "TODOS",
    text: "(Todos riem.)",
    act: 1,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "1-1-11",
    character: "JOVEM 4",
    text: "Nossa, olha o tanto de livro…",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-12",
    character: "JOVEM 5",
    text: "E ninguém pegando.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-13",
    character: "JOVEM 2",
    text: "Porque ninguém lê mais, né.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-14",
    character: "JOVEM 1",
    text: "Hoje em dia o povo vê resumo no TikTok.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-15",
    character: "JOVEM 3",
    text: "Eu só leio legenda de série.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-16",
    character: "JOVEM 4",
    text: "Mentira.\nVocê nem lê legenda. Assiste tudo dublado.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-17",
    character: "TODOS",
    text: "(Risos.)",
    act: 1,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "1-1-18",
    character: "JOVEM 5",
    text: "Imagina vir aqui por vontade própria…",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-19",
    character: "JOVEM 2",
    text: "Você entra e automaticamente sente vontade de cochilar.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-20",
    character: "TODOS",
    text: "(Eles sentam espalhados procurando sinal.)",
    act: 1,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "1-1-21",
    character: "JOVEM 1",
    text: "Qual é a senha do Wi-Fi?",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-22",
    character: "JOVEM 4",
    text: "\"Leiaumlivro\".",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-23",
    character: "TODOS",
    text: "Nãããão…",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-24",
    character: "JOVEM 3",
    text: "Isso já é humilhação.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-25",
    character: "TODOS",
    text: "(O bibliotecário aparece silenciosamente atrás deles segurando um livro.)",
    act: 1,
    scene: 1,
    notes: "Ação cênica",
    soundEffect: "suspense"
  },
  {
    id: "1-1-26",
    character: "BIBLIOTECÁRIO",
    text: "A humilhação maior é entrar numa biblioteca e fingir que os livros são invisíveis.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-27",
    character: "TODOS",
    text: "(Os jovens se assustam.)",
    act: 1,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "1-1-28",
    character: "JOVEM 2",
    text: "Meu Deus!\nVocê brotou do além!",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-29",
    character: "JOVEM 5",
    text: "NPC de biblioteca.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-30",
    character: "BIBLIOTECÁRIO",
    text: "Interessante…\nVocês conseguem passar horas olhando uma tela…\nMas cinco segundos perto de um livro já causa sofrimento.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-31",
    character: "JOVEM 1",
    text: "Não é sofrimento…\nÉ costume.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-32",
    character: "JOVEM 3",
    text: "Livro parece sempre coisa de prova.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-33",
    character: "JOVEM 4",
    text: "Ou trabalho da escola.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-34",
    character: "JOVEM 2",
    text: "Ou aqueles textos enormes que ninguém entende.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-35",
    character: "BIBLIOTECÁRIO",
    text: "Então talvez vocês nunca tenham encontrado a história certa.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-36",
    character: "TODOS",
    text: "(Pausa.)",
    act: 1,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "1-1-37",
    character: "JOVEM 5",
    text: "Tem livro engraçado pelo menos?",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-38",
    character: "BIBLIOTECÁRIO",
    text: "Tem um sobre dois homens que viviam inventando confusão, enganando gente rica, fugindo de problema…\nE um deles mentia tanto que parecia comentarista de internet.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-39",
    character: "JOVEM 3",
    text: "Agora ficou interessante.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-40",
    character: "JOVEM 1",
    text: "Eles eram criminosos?",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-41",
    character: "BIBLIOTECÁRIO",
    text: "Não exatamente.\nEram sobreviventes.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-42",
    character: "JOVEM 2",
    text: "Isso tá começando a parecer série da Netflix.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-43",
    character: "BIBLIOTECÁRIO",
    text: "Só que muito antes da Netflix existir.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-44",
    character: "TODOS",
    text: "(Ele mostra o livro.)",
    act: 1,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "1-1-45",
    character: "BIBLIOTECÁRIO",
    text: "\"O Auto da Compadecida\", de Ariano Suassuna.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-46",
    character: "JOVEM 4",
    text: "Já ouvi falar desse nome.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-47",
    character: "JOVEM 5",
    text: "Não é aquele do cachorro que recebe enterro de luxo?",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-48",
    character: "BIBLIOTECÁRIO",
    text: "Esse mesmo.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-49",
    character: "JOVEM 1",
    text: "Pera…\nEssa história é comédia?",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-50",
    character: "BIBLIOTECÁRIO",
    text: "Comédia, crítica social, religião, Nordeste brasileiro… tudo junto.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-51",
    character: "JOVEM 3",
    text: "E funciona?",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-52",
    character: "BIBLIOTECÁRIO",
    text: "Tanto funciona…\nQue até hoje as pessoas continuam assistindo, lendo e montando essa peça.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-53",
    character: "JOVEM 2",
    text: "Tá… mas qual a parte mais doida?",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-54",
    character: "BIBLIOTECÁRIO",
    text: "O julgamento final.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-55",
    character: "JOVEM 4",
    text: "Como assim?",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-56",
    character: "BIBLIOTECÁRIO",
    text: "Os personagens morrem…\nE vão parar diante de Jesus, Nossa Senhora… e do Diabo.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-57",
    character: "TODOS",
    text: "(Silêncio.)",
    act: 1,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "1-1-58",
    character: "JOVEM 5",
    text: "Aí o negócio escalou rápido.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-59",
    character: "JOVEM 1",
    text: "Tá, agora eu quero ver isso.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-60",
    character: "BIBLIOTECÁRIO",
    text: "Então guardem os celulares por alguns minutos…\nE prestem atenção.\nPorque no sertão nordestino…\nA esperteza era uma forma de sobrevivência.",
    act: 1,
    scene: 1
  },
  {
    id: "1-1-61",
    character: "TODOS",
    text: "(Luzes diminuem lentamente. Som de sanfona começa.)",
    act: 1,
    scene: 1,
    notes: "Ação cênica",
    soundEffect: "sanfona"
  },
  {
    id: "1-1-62",
    character: "NARRADOR",
    text: "No sertão nordestino, onde o sol castiga, a fome aperta e a esperteza vale mais que dinheiro… nasceram João Grilo e Chicó…",
    act: 1,
    scene: 1
  },

  // ATO 2 - O JULGAMENTO
  {
    id: "2-1-1",
    character: "TODOS",
    text: "(Luzes baixas. Sons de vento forte. João Grilo e Chicó aparecem assustados no centro do palco. Chicó segura o braço de João. O Encourado surge lentamente, elegante, vestido de preto, sorrindo de forma debochada.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica",
    soundEffect: "vento"
  },
  {
    id: "2-1-2",
    character: "ENCOURADO",
    text: "(Andando ao redor deles)\nOra, ora…\nVeja só quem chegou por aqui!\nDois cabras enrolados…\nDois mentirosos profissionais…\nE provavelmente os homens que mais deram trabalho no sertão!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-3",
    character: "CHICÓ",
    text: "(Tremendo)\nJoão…\nEu num gosto disso não…",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-4",
    character: "JOÃO GRILO",
    text: "Nem eu, Chicó.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-5",
    character: "CHICÓ",
    text: "Tenho medo dessas coisas sobrenaturais.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-6",
    character: "JOÃO GRILO",
    text: "E eu tenho medo é desse homem olhando pra nós desse jeito.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-7",
    character: "ENCOURADO",
    text: "(Parando diante deles)\nVocês dois tão lascados!\nMentira… enrolação… enganação…\nEspecialmente você, João Grilo!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-8",
    character: "JOÃO GRILO",
    text: "(Indignado)\nOxente!\nPor que eu primeiro?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-9",
    character: "ENCOURADO",
    text: "Porque você enganava padre, patrão, coronel…\nSe duvidar, enganava até relógio!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-10",
    character: "CHICÓ",
    text: "Isso é verdade.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-11",
    character: "JOÃO GRILO",
    text: "Cale a boca, Chicó!\nAqui não é hora de sinceridade.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-12",
    character: "CHICÓ",
    text: "Foi mal.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-13",
    character: "ENCOURADO",
    text: "E ainda fazia tudo sorrindo!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-14",
    character: "JOÃO GRILO",
    text: "(Orgulhoso)\nMas eu era pobre!\nNo sertão, quem não aprende a ser esperto morre de fome.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-15",
    character: "ENCOURADO",
    text: "E acha que isso justifica tudo?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-16",
    character: "JOÃO GRILO",
    text: "Não justifica…\nMas explica muita coisa.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-17",
    character: "CHICÓ",
    text: "(Levantando a mão timidamente)\nPosso falar uma coisa?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-18",
    character: "ENCOURADO",
    text: "Não.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-19",
    character: "CHICÓ",
    text: "Mesmo assim eu vou falar.\nEu só seguia João porque sozinho eu tinha mais medo ainda.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-20",
    character: "JOÃO GRILO",
    text: "Tá vendo?\nEu fazia caridade.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-21",
    character: "ENCOURADO",
    text: "Caridade?\nVocê vivia criando confusão!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-22",
    character: "JOÃO GRILO",
    text: "Mas confusão inteligente.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-23",
    character: "JESUS",
    text: "Silêncio.",
    act: 2,
    scene: 1,
    soundEffect: "divino"
  },
  {
    id: "2-1-24",
    character: "TODOS",
    text: "(Todos se calam imediatamente.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "2-1-25",
    character: "JESUS",
    text: "Toda alma merece ser ouvida antes do julgamento.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-26",
    character: "ENCOURADO",
    text: "Mas esses dois…",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-27",
    character: "JESUS",
    text: "Eu disse silêncio.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-28",
    character: "TODOS",
    text: "(Encourado recua irritado.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "2-1-29",
    character: "CHICÓ",
    text: "(Se ajoelhando rapidamente)\nMeu senhor, eu sou um homem medroso…\nMas de coração bom!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-30",
    character: "ENCOURADO",
    text: "Bom?\nEsse aí mentia mais do que respirava!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-31",
    character: "CHICÓ",
    text: "Mas era mentira sem maldade!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-32",
    character: "JOÃO GRILO",
    text: "Isso é verdade.\nChicó mente por esporte.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-33",
    character: "CHICÓ",
    text: "Às vezes eu nem queria mentir…\nA mentira já saía pronta.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-34",
    character: "TODOS",
    text: "(Plateia ri.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica",
    soundEffect: "risos"
  },
  {
    id: "2-1-35",
    character: "JESUS",
    text: "E você, João Grilo?\nO que tem a dizer sobre sua vida?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-36",
    character: "TODOS",
    text: "(João respira fundo.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "2-1-37",
    character: "JOÃO GRILO",
    text: "Eu fui pobre a vida inteira.\nPassei fome…\nDormia sem saber se ia comer no outro dia…\nFui humilhado pelos ricos… enganado pelos poderosos…\nAprendi cedo que, no sertão, pobre sem esperteza não sobrevive.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-38",
    character: "ENCOURADO",
    text: "Tentando fazer discurso bonito agora?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-39",
    character: "JOÃO GRILO",
    text: "Não, senhor.\nSó quero justiça.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-40",
    character: "ENCOURADO",
    text: "Justiça?\nVocê enganou meio mundo!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-41",
    character: "JOÃO GRILO",
    text: "Porque meio mundo tentava passar por cima de mim.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-42",
    character: "TODOS",
    text: "(Pausa.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "2-1-43",
    character: "JOÃO GRILO",
    text: "Nunca tive dinheiro.\nNunca tive poder.\nTudo que eu tinha era minha cabeça funcionando rápido.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-44",
    character: "CHICÓ",
    text: "E funcionava rápido demais.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-45",
    character: "JOÃO GRILO",
    text: "Obrigado, Chicó.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-46",
    character: "CHICÓ",
    text: "Não foi elogio.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-47",
    character: "JESUS",
    text: "(Refletindo)\nA vida pode endurecer o coração dos homens…\nMas também revela suas dores.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-48",
    character: "ENCOURADO",
    text: "Dor não apaga pecado!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-49",
    character: "JESUS",
    text: "Não apaga.\nMas merece ser compreendida.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-50",
    character: "CHICÓ",
    text: "(Encantado)\nValha-me Nossa Senhora!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-51",
    character: "JOÃO GRILO",
    text: "Agora nós tamo salvos!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-52",
    character: "MARIA",
    text: "Meu filho João…\nVocê continua atrevido.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-53",
    character: "JOÃO GRILO",
    text: "Se não fosse a atrevida da esperança, pobre nem vivia.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-54",
    character: "MARIA",
    text: "(Sorrindo levemente)\nContinua respondão também.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-55",
    character: "JOÃO GRILO",
    text: "É nervoso.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-56",
    character: "CHICÓ",
    text: "Ele responde até morto.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-57",
    character: "TODOS",
    text: "(Risos.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica",
    soundEffect: "risos"
  },
  {
    id: "2-1-58",
    character: "MARIA",
    text: "(Com doçura)\nJesus… olhe para eles com compaixão.\nSão filhos sofridos do sertão.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-59",
    character: "ENCOURADO",
    text: "Mas pecaram!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-60",
    character: "MARIA",
    text: "E quem nunca pecou?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-61",
    character: "TODOS",
    text: "(Silêncio.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "2-1-62",
    character: "MARIA",
    text: "João Grilo errou muitas vezes.\nMas também sofreu muito.\nConheceu a fome…\nA injustiça…\nO abandono…",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-63",
    character: "CHICÓ",
    text: "E as contas também.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-64",
    character: "JOÃO GRILO",
    text: "Principalmente as contas.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-65",
    character: "TODOS",
    text: "(Plateia ri.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica",
    soundEffect: "risos"
  },
  {
    id: "2-1-66",
    character: "MARIA",
    text: "Mesmo vivendo em dificuldade…\nEle nunca perdeu a vontade de viver.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-67",
    character: "ENCOURADO",
    text: "Mas vivia enganando os outros!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-68",
    character: "MARIA",
    text: "E quantas vezes ele também foi enganado?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-69",
    character: "TODOS",
    text: "(Encourado se cala por um instante.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "2-1-70",
    character: "JESUS",
    text: "(Refletindo)\nA dor não apaga os erros…\nMas ensina humanidade.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-71",
    character: "JOÃO GRILO",
    text: "Eu só queria sobreviver.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-72",
    character: "MARIA",
    text: "E ajudou muita gente no caminho…\nMesmo do seu jeito torto.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-73",
    character: "CHICÓ",
    text: "Muito torto.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-74",
    character: "JOÃO GRILO",
    text: "Rapaz, hoje você resolveu me destruir.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-75",
    character: "ENCOURADO",
    text: "Isso é injusto!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-76",
    character: "MARIA",
    text: "Injustiça é condenar alguém sem enxergar sua história.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-77",
    character: "ENCOURADO",
    text: "Então agora qualquer um faz besteira e pronto?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-78",
    character: "JESUS",
    text: "Não.\nMas nenhum ser humano é apenas seus erros.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-79",
    character: "TODOS",
    text: "(Pausa.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "2-1-80",
    character: "JESUS",
    text: "João Grilo…\nVocê terá uma nova chance.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-81",
    character: "JOÃO GRILO",
    text: "(Animado, olhando pra Chicó)\nQuer dizer que eu volto?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-82",
    character: "CHICÓ",
    text: "João… pergunta direito pra ter certeza!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-83",
    character: "JOÃO GRILO",
    text: "Eu volto vivo mesmo?\nRespirando e tudo?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-84",
    character: "JESUS",
    text: "Volta.\nMas trate de viver direito dessa vez.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-85",
    character: "JOÃO GRILO",
    text: "Vou tentar…\nMas num prometo milagre também não.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-86",
    character: "TODOS",
    text: "(Plateia ri.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica",
    soundEffect: "risos"
  },
  {
    id: "2-1-87",
    character: "JESUS",
    text: "E você, Chicó?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-88",
    character: "CHICÓ",
    text: "Eu posso voltar também?",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-89",
    character: "ENCOURADO",
    text: "Esse aí vai voltar mentindo até pros anjos.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-90",
    character: "CHICÓ",
    text: "Eu posso explicar…",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-91",
    character: "JESUS",
    text: "Pode voltar também.\nMas tente falar menos mentira.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-92",
    character: "CHICÓ",
    text: "Ave Maria…\nAí já é mais difícil.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-93",
    character: "TODOS",
    text: "(Todos riem.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica",
    soundEffect: "risos"
  },
  {
    id: "2-1-94",
    character: "ENCOURADO",
    text: "(Resmungando e cruzando os braços)\nAssim não tem graça nenhuma…",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-95",
    character: "MARIA",
    text: "A graça está justamente no perdão.",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-96",
    character: "TODOS",
    text: "(Luzes diminuem lentamente.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica"
  },
  {
    id: "2-1-97",
    character: "JOÃO GRILO",
    text: "Vamos simbora, Chicó!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-98",
    character: "CHICÓ",
    text: "Só acredito porque tô vendo!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-99",
    character: "JOÃO GRILO",
    text: "E ande logo antes que mudem de ideia!",
    act: 2,
    scene: 1
  },
  {
    id: "2-1-100",
    character: "TODOS",
    text: "(Os dois saem correndo atrapalhados. Música nordestina começa a tocar. O Encourado observa irritado enquanto Maria e Jesus se afastam lentamente.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica",
    soundEffect: "nordestina"
  },
  {
    id: "2-1-101",
    character: "TODOS",
    text: "(Luzes se apagam.)",
    act: 2,
    scene: 1,
    notes: "Ação cênica"
  }
];

export function getCharacterLines(characterId: string): ScriptLine[] {
  return scriptLines.filter(line => {
    const character = characters.find(c => c.id === characterId);
    return character && line.character === character.name;
  });
}

export function getActLines(act: number): ScriptLine[] {
  return scriptLines.filter(line => line.act === act);
}

export function getSceneLines(act: number, scene: number): ScriptLine[] {
  return scriptLines.filter(line => line.act === act && line.scene === scene);
}
