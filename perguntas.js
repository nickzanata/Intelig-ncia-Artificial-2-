export const perguntas = [ // Array de objetos com as perguntas e respostas
    {
        enunciado: "Você e sua família praticam bons hábitos de saúde?", // Enunciado da pergunta
        alternativas: [ // Array de objetos com as alternativas e suas afirmações
            {
                texto: "Sim, temos hábitos saudáveis!", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Você terá uma vida mais longa e próspera.",
                    "Terá mais vistosidade para o cotidiano." // Afirmação da alternativa
                ],
                proxima: 1, // Índice da próxima pergunta
            },
            {
                texto: "Não possuímos hábitos saudáveis.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Você terá uma vida indigente.", // Afirmação da alternativa
                    "Terá menos disposição no cotidiano devido a sua alimentação." // Afirmação da alternativa
                ],
                proxima: 2, // Índice da próxima pergunta
            },
        ]
    },
    {
        enunciado: "Você pratica atividades físicas?", // Enunciado da pergunta
        alternativas: [ // Array de objetos com as alternativas e suas afirmações
            {
                texto: "Sim, tenho o costume de praticar atividades físicas em meu cotidiano.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Seu dia-a-dia está mais leve e facilitado.",
                    "Sua vida está mais feliz, devido ao excesso de dopamina." // Afirmação da alternativa
                ],
                proxima: 3, // Índice da próxima pergunta
            },
            {
                texto: "Não pratico atividades físicas.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Seu dia-a-dia está mais tenso, obstruído.", // Afirmação da alternativa
                    "Suas noites de sono podem estar prejudicadas.", // Afirmação da alternativa
                ],
                proxima: 4, // Índice da próxima pergunta
            },
        ]
    },
    {
        enunciado: "Você se considera uma pessoa saudável?", // Enunciado da pergunta
        alternativas: [ // Array de objetos com as alternativas e suas afirmações
            {
                texto: "Sim, pratico exercícios físicos e mantenho uma alimentação saudável.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Você se sente mais disposto para as atividades do dia-a-dia.", // Afirmação da alternativa
                    "Já percebeu mudanças em seu corpo e em sua autoestima devido a mudanças de hábitos.", // Afirmação da alternativa
                    "Se sente mais feliz consigo mesmo e orgulhoso por estar cuidando da sua saúde.",// Afirmação da alternativa
                ],
                proxima: 3, // Índice da próxima pergunta
            },
            {
                texto: "Não me considero saudável, pois não sigo uma rotina saudável.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Se sente indisposto e cansado o tempo inteiro.", // Afirmação da alternativa
                    "Pode mudar seus hábitos por se sentir insatisfeito, porém não consegue mudar a rotina.", // Afirmação da alternativa

                    "Se sente inseguro e está sempre desanimado.",  // Afirmação da alternativa
                ],
                proxima: 4, // Índice da próxima pergunta
            },
        ]
    },
    {
        enunciado: "Você possui problemas crônicos de saúde?", // Enunciado da pergunta
        alternativas: [ // Array de objetos com as alternativas e suas afirmações
            {
                texto: "Não possuo nenhum problema crônico se saúde.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Não possuo problemas crônicos, devido a meus cuidados diários com exercícios e alimentação." // Afirmação da alternativa
                ],
                proxima: 5, // Índice da próxima pergunta
            },
            {
                texto: "Possuo um ou alguns problemas crônicos de saúde.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Possuo doenças crônicas, devido a maus hábitos no cotidiano, como uma má alimentação, sedentarismo, problemas ambientais, consumo de drogas licitas e ilícitas.", // Afirmação da alternativa
                    "Possuo por conta da heredietariedade de algumas dessas doenças, transmitidas de geração em geração." // Afirmação da alternativa
                ],
                proxima: 6, // Índice da próxima pergunta
            },
        ]
    },
    {
        enunciado: "Quantos litros de água você bebe por dia?", // Enunciado da pergunta
        alternativas: [ // Array de objetos com as alternativas e suas afirmações
            {
                texto: "Menos de 3L por dia.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Pode se sentir fraco, com tontura e dores de cabeça frequentes por falta de água.",  // Afirmação da alternativa
                ],
                proxima: 5, // Índice da próxima pergunta
            },
            {
                texto: "Mais de dois 3L por dia.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Seu organismo está filtrando toxinas, sua pele está com um aspecto melhor e seu corpo esta reagindo melhor.", // Afirmação da alternativa
                ],
                proxima: 6, // Índice da próxima pergunta
            },
        ]
    },
    {
        enunciado: "Você tem ou já teve avitaminose ou hipovitaminose?", // Enunciado da pergunta
        alternativas: [ // Array de objetos com as alternativas e suas afirmações
            {
                texto: "Não, nunca tive nenhuma das duas.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Seus níveis de vitaminas e minerais estão regulados, tornando seu metabolismo disposto. ", // Afirmação da alternativa
                ],
                proxima: 7, // Índice da próxima pergunta
            },
            {
                texto: "Sim, já tive pelo menos uma das duas.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Seus níveis de vitaminas e minerais podem ser desequilibrados devido a uma alimentação irregular afetando diretamente seu bem estar." // Afirmação da alternativa
                ],
                proxima: 7, // Índice da próxima pergunta
            },
        ]
    },
    {
        enunciado: "Quais alimentos mais afetam a sua saúde devido seu consumo?", // Enunciado da pergunta
        alternativas: [ // Array de objetos com as alternativas e suas afirmações
            {
                texto: "Gorduras e Ultraprocessados.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Gorduras e Ultraprocessados, são os alimentos que mais afetam sua saúde, pois, consume muitos enlatados e frituras, para agilizar seu dia-a-dia.",
                ],
                proxima: 7, // Índice da próxima pergunta
            },
            {
                texto: "Carboidratos e sódio.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Carboidratos e sódio, são os mais prejudiciais à sua saúde, pois, consome níveis exagerados de doces, além de diversos tipos de processados, como conservas e alimentos processados, ultrapasando limites de 2.000 mlg de sódio diários para sua segurança.", // Afirmação da alternativa
                ],
                proxima: 7, // Índice da próxima pergunta
            },
        ]
    },
    {
        enunciado: "Você sabe a diferença entre nutrição e alimentação?", // Enunciado da pergunta
        alternativas: [ // Array de objetos com as alternativas e suas afirmações
            {
                texto: "Sim, tenho conhecimento sobre a diferença.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "Você está bem informado sobre quais são as melhores decisões para uma vida saudável.", // Afirmação da alternativa
                ],
            },
            {
                texto: "Não sei da diferença.", // Texto da alternativa
                afirmacao: [ // Array de afirmações
                    "A alimentação está relacionada com a produção e disponibilidade de alimento e a capacidade de saciar a fome, enquanto a nutrição está relacionada à escolha, preparo e utilizção biológica dos alimentos." // Afirmação da alternativa
                ],
            },
        ]
    }
];