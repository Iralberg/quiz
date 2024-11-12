const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
  {
    category: "MATEMATICA",
    questions: [
      {
        question: "Quanto é 2 + 2?",
        options: ["22", "4", "1", "3"],
        answer: "4",
        tip: "É o Segundo número",
      },
      {
        question: "Quanto é 2 + 2 ÷ 2?",
        options: ["6", "2", "22", "3"],
        answer: "3",
        tip: "sucessor de 2",
      },
      {
        question: "Quanto é 2 x -3?",
        options: ["6", "-6", "5", "1"],
        answer: "-6",
      },
      {
        question: "Quanto é 2 + 2 x 2?",
        options: ["8", "2", "6", "22"],
        answer: "6",
      },
      {
        question: "Quanto é 3*3?",
        options: ["9", "3", "2", "27"],
        answer: "27",
      },
    ],
  },
  {
    category: "HISTÓRIA",
    questions: [
      {
        question: "  Quem foi o primeiro presidente do brasil?  ",
        options: ["Dom Pedro 1", "Marechal deodoro da fonseca", "Dom Pedro 2", "Dom Pedro 3"],
        answer: "Marechal deodoro da fonseca",
        tip: "MDF",
      },
      {
        question: "QUEM FOI O PRIMEIRO INPERADOR DO BRASIL?",
        options: ["Dom Pedro 1", "Dom Pedro 2", "Dom Pedro 6", "Dom Pedro 5"],
        answer: "Dom Pedro 1",
        tip: "segundo rei",
      },
      {
        question: " Em que ano aconteceu a abolição da escravatura? ",
        options: ["6 de novembro", "13 de maio de 1888", "15 de novembro 1889", "1 de março"],
        answer: "13 de maio de 1888",
      },
      {
        question: " Em que ano aconteceu a Proclamação da República? ",
        options: ["7 de setembro de 1500", "14 de novembro 1889", "15 de novembro 1889 ", "23 de Março"],
        answer: "15 de novembro 1889 ",
      },
      {
        question: " QUANDO FOI QUE DESCOBRIRAM O BRASIL? ",
        options: ["7 de setembro de 1500", "15 de novembro 1889 ", "11 de outubro de 1510", "13 de maio de 1888"],
        answer: "7 de setembro de 1500",
      },
    ],
  },
];

export default data;
