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
              },
              {
                title: "title section one item two",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
              },
              {
                title: "title section one item three",
                titleColor: "#1E90FF",
                image: "https://placehold.co/670x380",
                link: "https://news.com/tech",
                subtitle: "Subtitle section one item one",
                subtitleColor: "#666666",
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
              },
            ],
          },
          sectionThree: {
            title: "title section three",
            color: "#9C27B0",
            items: [
              {
                title: "subtitle section three item three",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards",
                subtitle: "",
                subtitleColor: "#CCCCCC",
              },
              {
                title: "subtitle section three item three",
                titleColor: "#FFD700",
                image: "https://placehold.co/320x180",
                link: "https://news.com/awards2",
                subtitle: "",
                subtitleColor: "#CCCCCC",
              },
            ],
          },
          sectionFour: {
            title: "title section four",
            color: "#FF9800",
            items: [
              {
                title: "subtitle section four item four",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/wellness",
                subtitle: "Stay fit in 2024",
                subtitleColor: "#333333",
              },
              {
                title: "subtitle section four item four",
                titleColor: "#FFFFFF",
                image: "https://placehold.co/320x180",
                link: "https://news.com/wellness2",
                subtitle: "Stay fit in 2024",
                subtitleColor: "#333333",
              },
            ],
          },
        },
        order: 2,
      },
      {
        type: "secondHero",
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
        order: 3,
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
        order: 4,
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
        order: 5,
      },
      {
        type: "colunaEditoria",
        order: 7,
        data: {},
      },
      {
        type: "footer",
        order: 7,
        data: {},
      },
      // {
      //   type: "navTab",
      //   data: {
      //     categories: [
      //       {
      //         title: "SBT News",
      //         color: "#FF9800",
      //         items: [
      //           {
      //             description:
      //               "Líder da oposição defende 'emenda Pix' e diz que governo tenta 'enquadrar'...",
      //             image: "emenda.jpg",
      //             link: "https://news.com/home",
      //           },
      //           {
      //             description:
      //               "Líder da oposição defende 'emenda Pix' e diz que governo tenta 'enquadrar'...",
      //             image: "emenda.jpg",
      //             link: "https://news.com/home",
      //           },
      //           {
      //             description:
      //               "Líder da oposição defende 'emenda Pix' e diz que governo tenta 'enquadrar'...",
      //             image: "emenda.jpg",
      //             link: "https://news.com/home",
      //           },
      //         ],
      //       },
      //       {
      //         title: "Últimas notícias",
      //         color: "#FF9800",
      //         items: [
      //           {
      //             description:
      //               "Líder da oposição defende 'emenda Pix' e diz que governo tenta 'enquadrar'...",
      //             image: "emenda.jpg",
      //             link: "https://news.com/home",
      //           },
      //           {
      //             description:
      //               "Líder da oposição defende 'emenda Pix' e diz que governo tenta 'enquadrar'...",
      //             image: "emenda.jpg",
      //             link: "https://news.com/home",
      //           },
      //           {
      //             description:
      //               "Líder da oposição defende 'emenda Pix' e diz que governo tenta 'enquadrar'...",
      //             image: "emenda.jpg",
      //             link: "https://news.com/home",
      //           },
      //         ],
      //       },
      //       {
      //         title: "Política",
      //         color: "#FF9800",
      //         items: [
      //           {
      //             description:
      //               "Líder da oposição defende 'emenda Pix' e diz que governo tenta 'enquadrar'...",
      //             image: "emenda.jpg",
      //             link: "https://news.com/home",
      //           },
      //           {
      //             description:
      //               "Líder da oposição defende 'emenda Pix' e diz que governo tenta 'enquadrar'...",
      //             image: "emenda.jpg",
      //             link: "https://news.com/home",
      //           },
      //           {
      //             description:
      //               "Líder da oposição defende 'emenda Pix' e diz que governo tenta 'enquadrar'...",
      //             image: "emenda.jpg",
      //             link: "https://news.com/home",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   order: 3,
      // },
      // {
      //   type: "media",
      //   order: 4,
      //   data: {
      //     reels: {
      //       title: "Reels",
      //       color: "#FF9800",
      //       items: [
      //         {
      //           username: "SBT",
      //           timestamp: "2017-08-31T18:10:00+0000",
      //           media: "https://news.com/image.png",
      //           icon: "https://sbt.com/sbt.png",
      //           link: "https://news.com/stories",
      //         },
      //         {
      //           username: "SBT",
      //           timestamp: "2017-08-31T18:10:00+0000",
      //           media: "https://news.com/image.png",
      //           icon: "https://sbt.com/sbt.png",
      //           link: "https://news.com/stories",
      //         },
      //         {
      //           username: "SBT",
      //           timestamp: "2017-08-31T18:10:00+0000",
      //           media: "https://news.com/image.png",
      //           icon: "https://sbt.com/sbt.png",
      //           link: "https://news.com/stories",
      //         },
      //       ],
      //     },
      //     stories: {
      //       title: "Reels",
      //       color: "#FF9800",
      //       items: [
      //         {
      //           username: "SBT",
      //           timestamp: "2017-08-31T18:10:00+0000",
      //           media: "https://news.com/image.png",
      //           icon: "https://sbt.com/sbt.png",
      //           link: "https://news.com/stories",
      //         },
      //         {
      //           username: "SBT",
      //           timestamp: "2017-08-31T18:10:00+0000",
      //           media: "https://news.com/image.png",
      //           icon: "https://sbt.com/sbt.png",
      //           link: "https://news.com/stories",
      //         },
      //         {
      //           username: "SBT",
      //           timestamp: "2017-08-31T18:10:00+0000",
      //           media: "https://news.com/image.png",
      //           icon: "https://sbt.com/sbt.png",
      //           link: "https://news.com/stories",
      //         },
      //       ],
      //     },
      //   },
      // },
      // {
      //   typeof: "settings",
      //   data: {
      //     theme: "dark",
      //     notificationsEnabled: false,
      //   },
      // },
    ],
  };

  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
