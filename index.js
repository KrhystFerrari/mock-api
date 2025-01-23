const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// Configuração de CORS para permitir o acesso de localhost:3000
const corsOptions = {
  origin: "*", // Permite apenas o frontend rodando em localhost:3000
  methods: "GET,POST,PUT,DELETE", // Métodos permitidos
  allowedHeaders: "Content-Type, Authorization", // Cabeçalhos permitidos
};

// Usando o CORS no middleware
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  const jsonResponse = {
    components: [
      {
        type: "header",
        order: 1,
        data: {},
      },
      {
        type: "hero",
        data: {
          sectionOne: {
            title: "SBT Sports",
            color: "#46aabe",
            items: [
              {
                title:
                  "Australian Open 2025: Brasil tem quatro representantes no primeiro Grand Slam do ano",
                titleColor: "",
                image:
                  "https://sbt-sports-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_australian_open_2025_brasil_tem_quatro_representantes_no_primeiro_grand_slam_do_ano_7fdf12dd33.jpg",
                link: "https://sports.sbt.com.br/noticia/esportes/australian-open-2025-brasil-tem-quatro-representantes-no-primeiro-grand-slam-do-ano-1",
                subtitle:
                  "João Fonseca, Thiago Monteiro, Thiago Wild e Bia Haddad representam o Brasil no primeiro Grand Slam do ano",
                subtitleColor: "",
                duration: "5 min",
                videoLink: "https://news.com/video/market-update",
              },
              {
                title:
                  "Santos é goleado pelo Athletic em primeiro teste com Caixinha",
                titleColor: "#1E90FF",
                image:
                  "https://sbt-sports-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_santos_e_goleado_pelo_athletic_em_primeiro_teste_com_caixinha_e16182a2aa.jpg",
                link: "https://sports.sbt.com.br/noticia/esportes/santos-e-goleado-pelo-athletic-em-primeiro-teste-com-caixinha-1",
                subtitle:
                  "Peixe é derrotado por 4 a 1 em preparação para o Paulistão; único gol foi marcado por Guilherme",
                subtitleColor: "",
              },
              {
                title:
                  "Everton demite Dyche a três horas de jogo pela Copa da Inglaterra",
                titleColor: "",
                image:
                  "https://sbt-sports-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_apos_ser_comprado_everton_demite_tecnico_antes_de_partida_pela_copa_da_inglaterra_a16b21ea9b.jpg",
                link: "https://sports.sbt.com.br/noticia/esportes/everton-demite-dyche-a-tres-horas-de-jogo-pela-copa-da-inglaterra",
                subtitle:
                  "Clube vive crise técnica e financeira; Leighton Baines assume como técnico interino",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
              },
            ],
          },
          sectionTwo: {
            title: "SBT News",
            color: "#5e0bff",
            items: [
              {
                title:
                  "Saiba quem são os ocupantes de avião que explodiu após atravessar pista em Ubatuba (SP)",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_familia_aviao_ubatuba_ecd30732aa.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/saiba-quem-sao-os-ocupantes-de-aviao-que-explodiu-apos-atravessar-pista-em-ubatuba-sp",
                subtitle:
                  "Piloto morreu, 4 ocupantes sobreviveram. Pai e crianças foram transferidos para hospital de Caraguatatuba, cidade vizinha; mãe segue internada em Ubatuba ",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
              },
            ],
          },
          sectionThree: {
            title: "Pop",
            color: "#d250be",
            items: [
              {
                title:
                  "Foto de Gabriel Medina nos Jogos Olímpicos ganha 'Oscar' da fotografia esportiva",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_medina_c1a8051825.png",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/foto-de-gabriel-medina-nos-jogos-olimpicos-ganha-oscar-da-fotografia-esportiva",
                subtitle:
                  "Registro foi feito por Jerome Brouillet no terceiro dia do surfe na Olimpíada de Paris em 2024",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dd485e41f1758def296e1bc7377f8ea7",
                  name: "mundo",
                },
              },
              {
                title:
                  "Ubatuba registrou seis acidentes aéreos nos últimos oito anos; relembre",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Ubatuba_registrou_seis_acidentes_aereos_nos_ultimos_tres_anos_Montagem_Bombeiros_e_Reproducao_2191e79fce.png",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/ubatuba-registrou-seis-ocorrencias-aereas-nos-ultimos-oito-anos-relembre",
                subtitle:
                  "Três dos acidentes, incluindo o desta quinta-feira (9), tiveram vítimas fatais; levantamento foi feito a partir de dados do Cenipa",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "6a4120be23c814f80233ecbb34e71adc",
                  name: "brasil",
                },
              },
            ],
          },
          sectionFour: {
            title: "Programas de TV",
            color: "#282828",
            items: [
              {
                title:
                  "Envenenamento no Piauí: Perícia investiga cajus que podem ter intoxicado parentes de família morta com arroz",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_imagem_site_640x440_2_1_fec39b65eb.png",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/envenenamento-no-piaui-pericia-investiga-cajus-que-podem-ter-envenenado-parentes-de-familia-morta-por-arroz",
                subtitle:
                  "O IML do Piauí informou que realiza exames nos cajus supostamente envenenados",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "6a4120be23c814f80233ecbb34e71adc",
                  name: "brasil",
                },
              },
              {
                title:
                  'Lula critica decisão da Meta de encerrar checagem de fatos e convoca reunião: "Extremamente grave"',
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_54223051440_0fe2b64627_o_b9f62fb513.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/politica/lula-critica-decisao-da-meta-de-encerrar-checagem-de-fatos-e-convoca-reuniao-extremamente-grave",
                subtitle:
                  '"Queremos que cada país tenha sua soberania resguardada. Não pode um cidadão, dois, três, achar que pode ferir a soberania de uma nação", comentou',
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d20f58eeb146b2c530634c225a4bf799",
                  name: "politica",
                },
              },
            ],
          },
        },
        order: 2,
      },
      {
        type: "newsEmphasis",
        order: 3,
        data: {},
      },
      {
        type: "second-hero",
        data: {
          sectionOne: {
            title: "Title section one",
            color: "#FF5733",
            items: [
              {
                title: "title section one item one",
                titleColor: "#000000",
                image: "https://placehold.co/670x380",
                link: "https://news.com/market-update",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#555555",
                duration: "5 min",
                videoLink: "https://news.com/video/market-update",
                category: {
                  id: "1",
                  name: "SBT News",
                },
              },
              {
                title: "title section one item two",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "2",
                  name: "Mundo",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "3",
                  name: "Brasil",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "4",
                  name: "Governo",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "5",
                  name: "Mercado",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "6",
                  name: "Agro",
                },
              },
            ],
          },
          sectionTwo: {
            title: "Title section two",
            color: "#4CAF50",
            items: [
              {
                title: "subtitle section two item one",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "1",
                  name: "SBT News",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "2",
                  name: "Mundo",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "3",
                  name: "Brasil",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "4",
                  name: "Governo",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "5",
                  name: "Mercado",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "6",
                  name: "Agro",
                },
              },
            ],
          },
          sectionThree: {
            title: "title section three",
            color: "#9C27B0",
            items: [
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "1",
                  name: "SBT News",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards2",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "1",
                  name: "SBT News",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards3",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "2",
                  name: "Mundo",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards4",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "2",
                  name: "Mundo",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards5",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "3",
                  name: "Brasil",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards6",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "3",
                  name: "Brasil",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards7",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "4",
                  name: "Governo",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards8",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "4",
                  name: "Governo",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards9",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "5",
                  name: "Mercado",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards10",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "5",
                  name: "Mercado",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards11",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "6",
                  name: "Agro",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards12",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "6",
                  name: "Agro",
                },
              },
            ],
          },
        },
        order: 5,
      },
      {
        type: "thirdHero",
        data: {
          sectionOne: {
            title: "Title section one",
            color: "#FF5733",
            items: [
              {
                title: "title section one item one",
                titleColor: "#000000",
                image: "https://placehold.co/670x380",
                link: "https://news.com/market-update",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#555555",
                duration: "5 min",
                videoLink: "https://news.com/video/market-update",
                category: {
                  id: "1",
                  name: "SBT Sports",
                },
              },
              {
                title: "title section one item two",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "2",
                  name: "Paris 2024",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "3",
                  name: "Ginástica",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "4",
                  name: "Natação",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "5",
                  name: "Futebol",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "6",
                  name: "Vôlei",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "7",
                  name: "Tênis",
                },
              },
            ],
          },
          sectionTwo: {
            title: "Title section two",
            color: "#4CAF50",
            items: [
              {
                title: "subtitle section two item one",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "1",
                  name: "SBT Sports",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "2",
                  name: "Paris 2024",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "3",
                  name: "Ginástica",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "4",
                  name: "Natação",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "5",
                  name: "Futebol",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "6",
                  name: "Vôlei",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "7",
                  name: "Tênis",
                },
              },
            ],
          },
          sectionThree: {
            title: "title section three",
            color: "#9C27B0",
            items: [
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "1",
                  name: "SBT Sports",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards2",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "1",
                  name: "SBT Sports",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards3",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "2",
                  name: "Paris 2024",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards4",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "2",
                  name: "Paris 2024",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards5",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "3",
                  name: "Ginástica",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards6",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "3",
                  name: "Ginástica",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards7",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "4",
                  name: "Natação",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards8",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "4",
                  name: "Natação",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards9",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "5",
                  name: "Futebol",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards10",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "5",
                  name: "Futebol",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards11",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "6",
                  name: "Vôlei",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards12",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "6",
                  name: "Vôlei",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards12",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "7",
                  name: "Tênis",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards12",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "7",
                  name: "Tênis",
                },
              },
            ],
          },
        },
        order: 6,
      },
      {
        type: "fourthHero",
        data: {
          sectionOne: {
            title: "Title section one",
            color: "#FF5733",
            items: [
              {
                title: "title section one item one",
                titleColor: "#000000",
                image: "https://placehold.co/670x380",
                link: "https://news.com/market-update",
                subtitle: "Subtitle section one item one",
                subtitle2: "Subtitle 2 section one item one",
                subtitleColor: "#555555",
                duration: "5 min",
                videoLink: "https://news.com/video/market-update",
                category: {
                  id: "1",
                  name: "Pop",
                },
              },
              {
                title: "title section one item two",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitle2: "Subtitle 2 section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "2",
                  name: "Fofocalizando",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitle2: "Subtitle 2 section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "3",
                  name: "Quiz",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitle2: "Subtitle 2 section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "4",
                  name: "Fique por dentro",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitle2: "Subtitle 2 section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "5",
                  name: "Tbt",
                },
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitle2: "Subtitle 2 section one item one",
                subtitleColor: "#666666",
                category: {
                  id: "6",
                  name: "Looks",
                },
              },
            ],
          },
          sectionTwo: {
            title: "Title section two",
            color: "#4CAF50",
            items: [
              {
                title: "subtitle section two item one",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "1",
                  name: "Pop",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "2",
                  name: "Fofocalizando",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "3",
                  name: "Quiz",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "4",
                  name: "Fique por dentro",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "5",
                  name: "Tbt",
                },
              },
              {
                title: "subtitle section two item two",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/football",
                subtitle: "Team A vs Team B",
                subtitleColor: "#AAAAAA",
                category: {
                  id: "6",
                  name: "Looks",
                },
              },
            ],
          },
          sectionThree: {
            title: "title section three",
            color: "#9C27B0",
            items: [
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "1",
                  name: "Pop",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards2",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "1",
                  name: "Pop",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards3",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "2",
                  name: "Fofocalizando",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards4",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "2",
                  name: "Fofocalizando",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards5",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "3",
                  name: "Quiz",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards6",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "3",
                  name: "Quiz",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards7",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "4",
                  name: "Fique por dentro",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards8",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "4",
                  name: "Fique por dentro",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards9",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "5",
                  name: "Tbt",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards10",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "5",
                  name: "Tbt",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards11",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "6",
                  name: "Looks",
                },
              },
              {
                title: "",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards12",
                subtitle: "subtitle section three item three",
                subtitleColor: "#CCCCCC",
                category: {
                  id: "6",
                  name: "Looks",
                },
              },
            ],
          },
        },
        order: 7,
      },
      {
        type: "colunaEditoria",
        order: 8,
        data: {},
      },
      {
        type: "reels",
        order: 9,
        data: {},
      },
      {
        type: "footer",
        order: 10,
        data: {},
      },
    ],
  };

  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
