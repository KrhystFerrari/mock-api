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
        type: "second-hero-news",
        data: {
          sectionOne: {
            title: "",
            color: "",
            items: [
              {
                title:
                  '"O ar de Los Angeles estava muito ruim", diz Fernanda Torres após deixar cidade em razão dos incêndios',
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_FOTO_SBT_NEWS_19_badce9da7c.png",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/o-ar-de-los-angeles-estava-muito-ruim-diz-fernanda-torres-apos-deixar-cidade-em-razao-dos-incendios",
                subtitle:
                  "Atriz já havia compartilhado imagens do céu avermelhado da cidade nessa quarta-feira (8)",
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
                  "Polícia Militar apreende quase 10 mil porções de drogas em casa abandonada na zona sul de São Paulo",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_imagem_site_640x440_2_60b5583271.png",
                link: "https://sbtnews.sbt.com.br/noticia/policia/policia-militar-apreende-quase-10-mil-porcoes-de-drogas-em-casa-abandonada-na-zona-sul-de-sao-paulo",
                subtitle:
                  "Dentro do imóvel, estavam armazenadas 5,5 mil porções de cocaína, 2,5 mil de maconha, 1,1 mil de crack, 40 comprimidos de ecstasy e 263 frascos de lança-perfume",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "Temporal no litoral paulista deixa 250 desabrigados; Inmet emite novo alerta ",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Sem_titulo_93df267144.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/temporal-no-litoral-paulista-deixa-250-desabrigados-inmet-emite-novo-alerta",
                subtitle:
                  "De acordo com a Defesa Civil do Estado de São Paulo, em apenas 24 horas choveu 263 mm; esperado para o mês era de 236 mm",
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
                  "Hospital promete maior fiscalização após médicos fraudarem o ponto em Porto Alegre",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_medico_porto_alegre_d1503a9df3.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/hospital-promete-maior-fiscalizacao-apos-medicos-fraudarem-o-ponto-em-porto-alegre",
                subtitle:
                  "11 profissionais foram demitidos depois que uma investigação comprovou que eles batiam o ponto, mas iam embora, deixando os pacientes sem atendimento",
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
                  "Tristeza ou depressão? Como diferenciar os sintomas e buscar ajuda no momento certo",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Depressao_pode_ser_confundido_com_tristeza_Freepik_1423febff6.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/tristeza-ou-depressao-como-diferenciar-os-sintomas-e-buscar-ajuda-no-momento-certo",
                subtitle:
                  "Transtorno depressivo já afeta mais de 300 milhões de pessoas no mundo, segundo a OMS",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  'Em último discurso antes da posse, Trump diz que vai parar as "invasões à fronteira"',
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_trump_discurso_3c36b6bb05.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/em-ultimo-discurso-antes-da-posse-trump-diz-que-vai-parar-as-invasoes-a-fronteira",
                subtitle:
                  "Republicano também pretende acabar com medidas relacionadas à diversidade e inclusão",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dd485e41f1758def296e1bc7377f8ea7",
                  name: "mundo",
                },
              },
            ],
          },
          sectionTwo: {
            title: "",
            color: "",
            items: [
              {
                title:
                  "Cenipa vai investigar acidente aéreo que deixou 6 vítimas em Ubatuba (SP)",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_cai_aviao_ubatuba_be178fbd62.jfif",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/cenipa-vai-investigar-acidente-aereo-que-deixou-8-vitimas-em-ubatuba-sp",
                subtitle:
                  "Avião atravessou pista, explodiu e foi parar na praia do Cruzeiro; o piloto morreu e outras 5 pessoas ficaram feridas",
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
                  "Virose no litoral: o que é o norovírus, que teve casos identificados na Baixada Santista",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Norovirus_foi_detectado_na_Baixada_Santista_veja_sintomas_e_como_se_prevenir_1a07fec7e2.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/virose-no-litoral-o-que-e-o-norovirus-que-teve-casos-identificados-na-baixada-santista-1",
                subtitle:
                  "Infectologista aponta que esse tipo de vírus é comum entre os surtos de doenças gastrointestinais e possui alto potencial de transmissão",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  "Polícia Federal realiza operação contra disseminação de fake news nas eleições de 2024",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_FOTO_SBT_NEWS_18_a852e49e78.png",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/policia-federal-realiza-operacao-contra-disseminacao-de-fake-news-nas-eleicoes-de-2024",
                subtitle:
                  "Agentes cumpriram mandado de busca e apreensão contra homem suspeito de envolvimento na criação e divulgação de vídeo com informações falsas",
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
                  "Ministério da Saúde estuda incluir Ozempic no SUS no primeiro semestre de 2025",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_ozempic_70824e26a3.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/saude/ministerio-da-saude-estuda-incluir-ozempic-no-sus-no-primeiro-semestre-de-2025",
                subtitle:
                  "Análise incluirá eficácia, segurança e impacto orçamentário e deve durar até 180 dias",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
            ],
          },
          sectionThree: {
            title: "",
            color: "",
            items: [
              {
                title:
                  "Hidrantes secam no Sul da Califórnia em meio aos intensos incêndios ",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_hidrantes_california_8f4585e336.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/hidrantes-secam-no-sul-da-california-em-meio-aos-intensos-incendios",
                subtitle:
                  "O Chefe do Departamento de Água e Energia de Los Angeles afirmou que os equipamentos não são suficientes para suprir os incêndios",
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
                  "Com homenagem de Biden, funeral de Jimmy Carter chega ao último dia nos EUA",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Foto_JPG_21_0ee5a48c66.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/com-homenagem-de-biden-funeral-de-jimmy-carter-chega-ao-ultimo-dia-nos-eua",
                subtitle:
                  "Ex-presidente será velado na Catedral Nacional de Washington e na Igreja Batista Maranatha; ele será enterrado ao lado da esposa",
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
                  "Médico “fantasma” que teria recebido R$ 60 mil sem trabalhar é demitido em Valinhos (SP)",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Foto_JPG_2025_01_09_T054513_409_32b67bab09.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/medico-fantasma-que-teria-recebido-r-60-mil-sem-trabalhar-e-demitido-em-valinhos-sp",
                subtitle:
                  "Profissional prestava serviços para a prefeitura por meio de consórcio intermunicipal",
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
                  "Prefeitura de São Paulo apreende nove mototáxis a serviço da 99 e ameaça ação judicial contra empresa",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_DIVAS_POP_PL_3caaeeb37c.png",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/prefeitura-de-sao-paulo-apreende-nove-mototaxis-a-servico-da-99-e-ameaca-acao-judicial-contra-empresa",
                subtitle:
                  "Ricardo Nunes afirma que, se a empresa não retirar modalidade nesta quinta-feira (16), entrará com ação para cobrança de multas diárias ",
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
                  "99 chega a 50 mil corridas de mototáxi em São Paulo, mesmo com suspensão e apreensões",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_99_mototaxi_sao_paulo_5dc6a76fb5.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/99-chega-a-50-mil-corridas-de-mototaxi-em-sao-paulo-mesmo-com-suspensao-e-apreensoes",
                subtitle:
                  "Em comunicado, empresa afirma que nenhum acidente foi registrado e que está disposta a colaborar com a prefeitura para uma regulamentação do serviço",
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
                  "Caso Gritzbach: olheiro que ajudou na execução teve apoio fora de São Paulo, diz polícia",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_suspeito_morte_delator_dac3c0bc50.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/policia-civil-acredita-que-olheiro-que-ajudou-na-morte-do-delator-do-ppc-tem-apoio-fora-do-estado",
                subtitle:
                  "Suspeito foragido foi visto no Rio de Janeiro; namorada está presa",
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
                  "Polícia prende golpistas que usavam deepfake de Marcos Mion na internet",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Marcos_Mion_178ef3f313.JPG",
                link: "https://sbtnews.sbt.com.br/noticia/policia/policia-prende-golpistas-que-usavam-deepfake-de-marcos-mion-na-internet",
                subtitle:
                  "Criminosos usavam o rosto do apresentador em falsas promoções de uma rede de restaurantes; dezenas de vítimas foram lesadas",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "PM suspeito de matar Gritzbach foi investigado por homicídio com uso de fuzil em SP",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_imagem_site_640x440_2_2025_01_16_T155706_008_524b8398a1.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/policia/pm-suspeito-de-matar-gritzbach-foi-investigado-por-homicidio-com-uso-de-fuzil-em-sp",
                subtitle:
                  "Policial teria se envolvido em troca de tiros durante ocorrência de assalto a transportadora, em 2018",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "Delegado da Polícia Civil do DF é preso após atirar em esposa, empregada e enfermeira",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Whats_App_Image_2025_01_16_at_12_47_21_c4d493b0dd.jpeg",
                link: "https://sbtnews.sbt.com.br/noticia/policia/delegado-da-policia-civil-do-df-e-preso-apos-atirar-em-esposa-empregada-e-enfermeira",
                subtitle:
                  "De acordo com a Polícia Militar, Mikhail Rocha estava em surto; ele foi ao hospital para buscar ajuda para o filho que teria se ferido",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "Jovem diz que contraiu HPV na academia; é possível se contaminar ao tocar superfícies? Entenda",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_E_possivel_contrair_HPV_na_academia_Reproducao_Tiktok_1490ac78c1.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/jovem-diz-que-contraiu-hpv-na-academia-e-possivel-se-contaminar-ao-tocar-superficies-entenda",
                subtitle:
                  "Estudante conta que descobriu uma verruga no dedo da mão e foi informada pelo dermatologista que a lesão era causada pelo vírus",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  "Câncer de pulmão: como o diagnóstico precoce pode aumentar as chances de cura?",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Diagnostico_precoce_aumenta_as_chances_de_cura_do_cancer_de_pulmao_Freepik_e18399f4ab.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/cancer-de-pulmao-como-o-diagnostico-precoce-pode-aumentar-as-chances-de-cura",
                subtitle:
                  "Estudos mostram que a tomografia computadorizada de baixa dose é eficaz na identificação de tumores em estágios iniciais; entenda",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  '"Uma vergonha": papa Francisco critica planos de deportação em massa de Donald Trump',
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_papa_francisco_c3422f2cb8.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/uma-vergonha-papa-francisco-critica-planos-de-deportacao-em-massa-de-donald-trump",
                subtitle:
                  'Em mensagem oficial enviada ao republicano, o pontífice pediu que os EUA mantenham seus ideais de serem uma "terra de oportunidades e acolhimento"',
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
                title: "Trump anuncia retorno do TikTok durante comício",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_tiktok_13f65803f9.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/trump-anuncia-retorno-do-tik-tok-durante-comicio",
                subtitle:
                  "Presidente eleito reforça interesse em dividir propriedade do aplicativo chinês",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dd485e41f1758def296e1bc7377f8ea7",
                  name: "mundo",
                },
              },
            ],
          },
        },
        order: 5,
      },
      {
        type: "second-hero-sports",
        data: {
          sectionOne: {
            title: "",
            color: "",
            items: [
              {
                title:
                  '"O ar de Los Angeles estava muito ruim", diz Fernanda Torres após deixar cidade em razão dos incêndios',
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_FOTO_SBT_NEWS_19_badce9da7c.png",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/o-ar-de-los-angeles-estava-muito-ruim-diz-fernanda-torres-apos-deixar-cidade-em-razao-dos-incendios",
                subtitle:
                  "Atriz já havia compartilhado imagens do céu avermelhado da cidade nessa quarta-feira (8)",
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
                  "Polícia Militar apreende quase 10 mil porções de drogas em casa abandonada na zona sul de São Paulo",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_imagem_site_640x440_2_60b5583271.png",
                link: "https://sbtnews.sbt.com.br/noticia/policia/policia-militar-apreende-quase-10-mil-porcoes-de-drogas-em-casa-abandonada-na-zona-sul-de-sao-paulo",
                subtitle:
                  "Dentro do imóvel, estavam armazenadas 5,5 mil porções de cocaína, 2,5 mil de maconha, 1,1 mil de crack, 40 comprimidos de ecstasy e 263 frascos de lança-perfume",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "Temporal no litoral paulista deixa 250 desabrigados; Inmet emite novo alerta ",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Sem_titulo_93df267144.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/temporal-no-litoral-paulista-deixa-250-desabrigados-inmet-emite-novo-alerta",
                subtitle:
                  "De acordo com a Defesa Civil do Estado de São Paulo, em apenas 24 horas choveu 263 mm; esperado para o mês era de 236 mm",
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
                  "Hospital promete maior fiscalização após médicos fraudarem o ponto em Porto Alegre",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_medico_porto_alegre_d1503a9df3.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/hospital-promete-maior-fiscalizacao-apos-medicos-fraudarem-o-ponto-em-porto-alegre",
                subtitle:
                  "11 profissionais foram demitidos depois que uma investigação comprovou que eles batiam o ponto, mas iam embora, deixando os pacientes sem atendimento",
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
                  "Tristeza ou depressão? Como diferenciar os sintomas e buscar ajuda no momento certo",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Depressao_pode_ser_confundido_com_tristeza_Freepik_1423febff6.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/tristeza-ou-depressao-como-diferenciar-os-sintomas-e-buscar-ajuda-no-momento-certo",
                subtitle:
                  "Transtorno depressivo já afeta mais de 300 milhões de pessoas no mundo, segundo a OMS",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  'Em último discurso antes da posse, Trump diz que vai parar as "invasões à fronteira"',
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_trump_discurso_3c36b6bb05.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/em-ultimo-discurso-antes-da-posse-trump-diz-que-vai-parar-as-invasoes-a-fronteira",
                subtitle:
                  "Republicano também pretende acabar com medidas relacionadas à diversidade e inclusão",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dd485e41f1758def296e1bc7377f8ea7",
                  name: "mundo",
                },
              },
            ],
          },
          sectionTwo: {
            title: "",
            color: "",
            items: [
              {
                title:
                  "Cenipa vai investigar acidente aéreo que deixou 6 vítimas em Ubatuba (SP)",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_cai_aviao_ubatuba_be178fbd62.jfif",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/cenipa-vai-investigar-acidente-aereo-que-deixou-8-vitimas-em-ubatuba-sp",
                subtitle:
                  "Avião atravessou pista, explodiu e foi parar na praia do Cruzeiro; o piloto morreu e outras 5 pessoas ficaram feridas",
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
                  "Virose no litoral: o que é o norovírus, que teve casos identificados na Baixada Santista",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Norovirus_foi_detectado_na_Baixada_Santista_veja_sintomas_e_como_se_prevenir_1a07fec7e2.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/virose-no-litoral-o-que-e-o-norovirus-que-teve-casos-identificados-na-baixada-santista-1",
                subtitle:
                  "Infectologista aponta que esse tipo de vírus é comum entre os surtos de doenças gastrointestinais e possui alto potencial de transmissão",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  "Polícia Federal realiza operação contra disseminação de fake news nas eleições de 2024",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_FOTO_SBT_NEWS_18_a852e49e78.png",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/policia-federal-realiza-operacao-contra-disseminacao-de-fake-news-nas-eleicoes-de-2024",
                subtitle:
                  "Agentes cumpriram mandado de busca e apreensão contra homem suspeito de envolvimento na criação e divulgação de vídeo com informações falsas",
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
                  "Ministério da Saúde estuda incluir Ozempic no SUS no primeiro semestre de 2025",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_ozempic_70824e26a3.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/saude/ministerio-da-saude-estuda-incluir-ozempic-no-sus-no-primeiro-semestre-de-2025",
                subtitle:
                  "Análise incluirá eficácia, segurança e impacto orçamentário e deve durar até 180 dias",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
            ],
          },
          sectionThree: {
            title: "",
            color: "",
            items: [
              {
                title:
                  "Hidrantes secam no Sul da Califórnia em meio aos intensos incêndios ",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_hidrantes_california_8f4585e336.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/hidrantes-secam-no-sul-da-california-em-meio-aos-intensos-incendios",
                subtitle:
                  "O Chefe do Departamento de Água e Energia de Los Angeles afirmou que os equipamentos não são suficientes para suprir os incêndios",
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
                  "Com homenagem de Biden, funeral de Jimmy Carter chega ao último dia nos EUA",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Foto_JPG_21_0ee5a48c66.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/com-homenagem-de-biden-funeral-de-jimmy-carter-chega-ao-ultimo-dia-nos-eua",
                subtitle:
                  "Ex-presidente será velado na Catedral Nacional de Washington e na Igreja Batista Maranatha; ele será enterrado ao lado da esposa",
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
                  "Médico “fantasma” que teria recebido R$ 60 mil sem trabalhar é demitido em Valinhos (SP)",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Foto_JPG_2025_01_09_T054513_409_32b67bab09.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/medico-fantasma-que-teria-recebido-r-60-mil-sem-trabalhar-e-demitido-em-valinhos-sp",
                subtitle:
                  "Profissional prestava serviços para a prefeitura por meio de consórcio intermunicipal",
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
                  "Prefeitura de São Paulo apreende nove mototáxis a serviço da 99 e ameaça ação judicial contra empresa",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_DIVAS_POP_PL_3caaeeb37c.png",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/prefeitura-de-sao-paulo-apreende-nove-mototaxis-a-servico-da-99-e-ameaca-acao-judicial-contra-empresa",
                subtitle:
                  "Ricardo Nunes afirma que, se a empresa não retirar modalidade nesta quinta-feira (16), entrará com ação para cobrança de multas diárias ",
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
                  "99 chega a 50 mil corridas de mototáxi em São Paulo, mesmo com suspensão e apreensões",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_99_mototaxi_sao_paulo_5dc6a76fb5.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/99-chega-a-50-mil-corridas-de-mototaxi-em-sao-paulo-mesmo-com-suspensao-e-apreensoes",
                subtitle:
                  "Em comunicado, empresa afirma que nenhum acidente foi registrado e que está disposta a colaborar com a prefeitura para uma regulamentação do serviço",
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
                  "Caso Gritzbach: olheiro que ajudou na execução teve apoio fora de São Paulo, diz polícia",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_suspeito_morte_delator_dac3c0bc50.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/policia-civil-acredita-que-olheiro-que-ajudou-na-morte-do-delator-do-ppc-tem-apoio-fora-do-estado",
                subtitle:
                  "Suspeito foragido foi visto no Rio de Janeiro; namorada está presa",
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
                  "Polícia prende golpistas que usavam deepfake de Marcos Mion na internet",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Marcos_Mion_178ef3f313.JPG",
                link: "https://sbtnews.sbt.com.br/noticia/policia/policia-prende-golpistas-que-usavam-deepfake-de-marcos-mion-na-internet",
                subtitle:
                  "Criminosos usavam o rosto do apresentador em falsas promoções de uma rede de restaurantes; dezenas de vítimas foram lesadas",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "PM suspeito de matar Gritzbach foi investigado por homicídio com uso de fuzil em SP",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_imagem_site_640x440_2_2025_01_16_T155706_008_524b8398a1.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/policia/pm-suspeito-de-matar-gritzbach-foi-investigado-por-homicidio-com-uso-de-fuzil-em-sp",
                subtitle:
                  "Policial teria se envolvido em troca de tiros durante ocorrência de assalto a transportadora, em 2018",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "Delegado da Polícia Civil do DF é preso após atirar em esposa, empregada e enfermeira",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Whats_App_Image_2025_01_16_at_12_47_21_c4d493b0dd.jpeg",
                link: "https://sbtnews.sbt.com.br/noticia/policia/delegado-da-policia-civil-do-df-e-preso-apos-atirar-em-esposa-empregada-e-enfermeira",
                subtitle:
                  "De acordo com a Polícia Militar, Mikhail Rocha estava em surto; ele foi ao hospital para buscar ajuda para o filho que teria se ferido",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "Jovem diz que contraiu HPV na academia; é possível se contaminar ao tocar superfícies? Entenda",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_E_possivel_contrair_HPV_na_academia_Reproducao_Tiktok_1490ac78c1.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/jovem-diz-que-contraiu-hpv-na-academia-e-possivel-se-contaminar-ao-tocar-superficies-entenda",
                subtitle:
                  "Estudante conta que descobriu uma verruga no dedo da mão e foi informada pelo dermatologista que a lesão era causada pelo vírus",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  "Câncer de pulmão: como o diagnóstico precoce pode aumentar as chances de cura?",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Diagnostico_precoce_aumenta_as_chances_de_cura_do_cancer_de_pulmao_Freepik_e18399f4ab.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/cancer-de-pulmao-como-o-diagnostico-precoce-pode-aumentar-as-chances-de-cura",
                subtitle:
                  "Estudos mostram que a tomografia computadorizada de baixa dose é eficaz na identificação de tumores em estágios iniciais; entenda",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  '"Uma vergonha": papa Francisco critica planos de deportação em massa de Donald Trump',
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_papa_francisco_c3422f2cb8.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/uma-vergonha-papa-francisco-critica-planos-de-deportacao-em-massa-de-donald-trump",
                subtitle:
                  'Em mensagem oficial enviada ao republicano, o pontífice pediu que os EUA mantenham seus ideais de serem uma "terra de oportunidades e acolhimento"',
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
                title: "Trump anuncia retorno do TikTok durante comício",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_tiktok_13f65803f9.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/trump-anuncia-retorno-do-tik-tok-durante-comicio",
                subtitle:
                  "Presidente eleito reforça interesse em dividir propriedade do aplicativo chinês",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dd485e41f1758def296e1bc7377f8ea7",
                  name: "mundo",
                },
              },
            ],
          },
        },
        order: 6,
      },
      {
        type: "second-hero-pop",
        data: {
          sectionOne: {
            title: "",
            color: "",
            items: [
              {
                title:
                  '"O ar de Los Angeles estava muito ruim", diz Fernanda Torres após deixar cidade em razão dos incêndios',
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_FOTO_SBT_NEWS_19_badce9da7c.png",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/o-ar-de-los-angeles-estava-muito-ruim-diz-fernanda-torres-apos-deixar-cidade-em-razao-dos-incendios",
                subtitle:
                  "Atriz já havia compartilhado imagens do céu avermelhado da cidade nessa quarta-feira (8)",
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
                  "Polícia Militar apreende quase 10 mil porções de drogas em casa abandonada na zona sul de São Paulo",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_imagem_site_640x440_2_60b5583271.png",
                link: "https://sbtnews.sbt.com.br/noticia/policia/policia-militar-apreende-quase-10-mil-porcoes-de-drogas-em-casa-abandonada-na-zona-sul-de-sao-paulo",
                subtitle:
                  "Dentro do imóvel, estavam armazenadas 5,5 mil porções de cocaína, 2,5 mil de maconha, 1,1 mil de crack, 40 comprimidos de ecstasy e 263 frascos de lança-perfume",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "Temporal no litoral paulista deixa 250 desabrigados; Inmet emite novo alerta ",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Sem_titulo_93df267144.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/temporal-no-litoral-paulista-deixa-250-desabrigados-inmet-emite-novo-alerta",
                subtitle:
                  "De acordo com a Defesa Civil do Estado de São Paulo, em apenas 24 horas choveu 263 mm; esperado para o mês era de 236 mm",
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
                  "Hospital promete maior fiscalização após médicos fraudarem o ponto em Porto Alegre",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_medico_porto_alegre_d1503a9df3.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/hospital-promete-maior-fiscalizacao-apos-medicos-fraudarem-o-ponto-em-porto-alegre",
                subtitle:
                  "11 profissionais foram demitidos depois que uma investigação comprovou que eles batiam o ponto, mas iam embora, deixando os pacientes sem atendimento",
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
                  "Tristeza ou depressão? Como diferenciar os sintomas e buscar ajuda no momento certo",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Depressao_pode_ser_confundido_com_tristeza_Freepik_1423febff6.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/tristeza-ou-depressao-como-diferenciar-os-sintomas-e-buscar-ajuda-no-momento-certo",
                subtitle:
                  "Transtorno depressivo já afeta mais de 300 milhões de pessoas no mundo, segundo a OMS",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  'Em último discurso antes da posse, Trump diz que vai parar as "invasões à fronteira"',
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_trump_discurso_3c36b6bb05.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/em-ultimo-discurso-antes-da-posse-trump-diz-que-vai-parar-as-invasoes-a-fronteira",
                subtitle:
                  "Republicano também pretende acabar com medidas relacionadas à diversidade e inclusão",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dd485e41f1758def296e1bc7377f8ea7",
                  name: "mundo",
                },
              },
            ],
          },
          sectionTwo: {
            title: "",
            color: "",
            items: [
              {
                title:
                  "Cenipa vai investigar acidente aéreo que deixou 6 vítimas em Ubatuba (SP)",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_cai_aviao_ubatuba_be178fbd62.jfif",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/cenipa-vai-investigar-acidente-aereo-que-deixou-8-vitimas-em-ubatuba-sp",
                subtitle:
                  "Avião atravessou pista, explodiu e foi parar na praia do Cruzeiro; o piloto morreu e outras 5 pessoas ficaram feridas",
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
                  "Virose no litoral: o que é o norovírus, que teve casos identificados na Baixada Santista",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Norovirus_foi_detectado_na_Baixada_Santista_veja_sintomas_e_como_se_prevenir_1a07fec7e2.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/virose-no-litoral-o-que-e-o-norovirus-que-teve-casos-identificados-na-baixada-santista-1",
                subtitle:
                  "Infectologista aponta que esse tipo de vírus é comum entre os surtos de doenças gastrointestinais e possui alto potencial de transmissão",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  "Polícia Federal realiza operação contra disseminação de fake news nas eleições de 2024",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_FOTO_SBT_NEWS_18_a852e49e78.png",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/policia-federal-realiza-operacao-contra-disseminacao-de-fake-news-nas-eleicoes-de-2024",
                subtitle:
                  "Agentes cumpriram mandado de busca e apreensão contra homem suspeito de envolvimento na criação e divulgação de vídeo com informações falsas",
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
                  "Ministério da Saúde estuda incluir Ozempic no SUS no primeiro semestre de 2025",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_ozempic_70824e26a3.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/saude/ministerio-da-saude-estuda-incluir-ozempic-no-sus-no-primeiro-semestre-de-2025",
                subtitle:
                  "Análise incluirá eficácia, segurança e impacto orçamentário e deve durar até 180 dias",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
            ],
          },
          sectionThree: {
            title: "",
            color: "",
            items: [
              {
                title:
                  "Hidrantes secam no Sul da Califórnia em meio aos intensos incêndios ",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_hidrantes_california_8f4585e336.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/hidrantes-secam-no-sul-da-california-em-meio-aos-intensos-incendios",
                subtitle:
                  "O Chefe do Departamento de Água e Energia de Los Angeles afirmou que os equipamentos não são suficientes para suprir os incêndios",
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
                  "Com homenagem de Biden, funeral de Jimmy Carter chega ao último dia nos EUA",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Foto_JPG_21_0ee5a48c66.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/com-homenagem-de-biden-funeral-de-jimmy-carter-chega-ao-ultimo-dia-nos-eua",
                subtitle:
                  "Ex-presidente será velado na Catedral Nacional de Washington e na Igreja Batista Maranatha; ele será enterrado ao lado da esposa",
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
                  "Médico “fantasma” que teria recebido R$ 60 mil sem trabalhar é demitido em Valinhos (SP)",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Foto_JPG_2025_01_09_T054513_409_32b67bab09.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/medico-fantasma-que-teria-recebido-r-60-mil-sem-trabalhar-e-demitido-em-valinhos-sp",
                subtitle:
                  "Profissional prestava serviços para a prefeitura por meio de consórcio intermunicipal",
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
                  "Prefeitura de São Paulo apreende nove mototáxis a serviço da 99 e ameaça ação judicial contra empresa",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_DIVAS_POP_PL_3caaeeb37c.png",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/prefeitura-de-sao-paulo-apreende-nove-mototaxis-a-servico-da-99-e-ameaca-acao-judicial-contra-empresa",
                subtitle:
                  "Ricardo Nunes afirma que, se a empresa não retirar modalidade nesta quinta-feira (16), entrará com ação para cobrança de multas diárias ",
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
                  "99 chega a 50 mil corridas de mototáxi em São Paulo, mesmo com suspensão e apreensões",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_99_mototaxi_sao_paulo_5dc6a76fb5.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/99-chega-a-50-mil-corridas-de-mototaxi-em-sao-paulo-mesmo-com-suspensao-e-apreensoes",
                subtitle:
                  "Em comunicado, empresa afirma que nenhum acidente foi registrado e que está disposta a colaborar com a prefeitura para uma regulamentação do serviço",
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
                  "Caso Gritzbach: olheiro que ajudou na execução teve apoio fora de São Paulo, diz polícia",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_suspeito_morte_delator_dac3c0bc50.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/brasil/policia-civil-acredita-que-olheiro-que-ajudou-na-morte-do-delator-do-ppc-tem-apoio-fora-do-estado",
                subtitle:
                  "Suspeito foragido foi visto no Rio de Janeiro; namorada está presa",
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
                  "Polícia prende golpistas que usavam deepfake de Marcos Mion na internet",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Marcos_Mion_178ef3f313.JPG",
                link: "https://sbtnews.sbt.com.br/noticia/policia/policia-prende-golpistas-que-usavam-deepfake-de-marcos-mion-na-internet",
                subtitle:
                  "Criminosos usavam o rosto do apresentador em falsas promoções de uma rede de restaurantes; dezenas de vítimas foram lesadas",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "PM suspeito de matar Gritzbach foi investigado por homicídio com uso de fuzil em SP",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_imagem_site_640x440_2_2025_01_16_T155706_008_524b8398a1.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/policia/pm-suspeito-de-matar-gritzbach-foi-investigado-por-homicidio-com-uso-de-fuzil-em-sp",
                subtitle:
                  "Policial teria se envolvido em troca de tiros durante ocorrência de assalto a transportadora, em 2018",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "Delegado da Polícia Civil do DF é preso após atirar em esposa, empregada e enfermeira",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Whats_App_Image_2025_01_16_at_12_47_21_c4d493b0dd.jpeg",
                link: "https://sbtnews.sbt.com.br/noticia/policia/delegado-da-policia-civil-do-df-e-preso-apos-atirar-em-esposa-empregada-e-enfermeira",
                subtitle:
                  "De acordo com a Polícia Militar, Mikhail Rocha estava em surto; ele foi ao hospital para buscar ajuda para o filho que teria se ferido",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "d93fac0aa9e6f682d248328c737c9d69",
                  name: "policia",
                },
              },
              {
                title:
                  "Jovem diz que contraiu HPV na academia; é possível se contaminar ao tocar superfícies? Entenda",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_E_possivel_contrair_HPV_na_academia_Reproducao_Tiktok_1490ac78c1.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/jovem-diz-que-contraiu-hpv-na-academia-e-possivel-se-contaminar-ao-tocar-superficies-entenda",
                subtitle:
                  "Estudante conta que descobriu uma verruga no dedo da mão e foi informada pelo dermatologista que a lesão era causada pelo vírus",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  "Câncer de pulmão: como o diagnóstico precoce pode aumentar as chances de cura?",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_Diagnostico_precoce_aumenta_as_chances_de_cura_do_cancer_de_pulmao_Freepik_e18399f4ab.png",
                link: "https://sbtnews.sbt.com.br/noticia/saude/cancer-de-pulmao-como-o-diagnostico-precoce-pode-aumentar-as-chances-de-cura",
                subtitle:
                  "Estudos mostram que a tomografia computadorizada de baixa dose é eficaz na identificação de tumores em estágios iniciais; entenda",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dc3af6cd717b8e2aea5169944dbda405",
                  name: "saude",
                },
              },
              {
                title:
                  '"Uma vergonha": papa Francisco critica planos de deportação em massa de Donald Trump',
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_papa_francisco_c3422f2cb8.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/uma-vergonha-papa-francisco-critica-planos-de-deportacao-em-massa-de-donald-trump",
                subtitle:
                  'Em mensagem oficial enviada ao republicano, o pontífice pediu que os EUA mantenham seus ideais de serem uma "terra de oportunidades e acolhimento"',
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
                title: "Trump anuncia retorno do TikTok durante comício",
                titleColor: "",
                image:
                  "https://sbt-news-assets-prod.s3.sa-east-1.amazonaws.com/thumbnail_tiktok_13f65803f9.jpg",
                link: "https://sbtnews.sbt.com.br/noticia/mundo/trump-anuncia-retorno-do-tik-tok-durante-comicio",
                subtitle:
                  "Presidente eleito reforça interesse em dividir propriedade do aplicativo chinês",
                subtitle2: "",
                subtitleColor: "",
                duration: "",
                videoLink: "",
                category: {
                  id: "dd485e41f1758def296e1bc7377f8ea7",
                  name: "mundo",
                },
              },
            ],
          },
        },
        order: 7,
      },
      {
        type: "programCalendar",
        order: 8,
        data: {},
      },
      {
        type: "expandableCard",
        order: 9,
        data: {},
      },
      {
        type: "colunaEditoria",
        order: 10,
        data: {},
      },
      {
        type: "reels",
        order: 11,
        data: {},
      },
      {
        type: "footer",
        order: 12,
        data: {},
      },
    ],
  };

  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
