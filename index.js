import { html, virtual, component, useState } from "./src/deps.js";

const tabs = [
  {
    name: "Sobre",
    content: html`
      <div>
        <h2>Olá</h2>
        <p>
          Meu nome é Vitor Neves Gomes Gouveia, tenho 17 anos, moro atualmente
          no Brasil, São Paulo. Completamente apaixonado pela tecnolgia e seus
          avanços. Sou um desenvolvedor <strong>JavaScript</strong>
        </p>
        <p>
          Entrei em contato com a programação pela primeira vez em 2020, quando
          comecei o ensino médio com curso de programação, desde então não parei
          de estudar e praticar.
        </p>
      </div>

      <div>
        <p>
          Após 2 anos estudando com o mesmo set de tecnologias, tenho um largo
          conhecimento do ecossistema do Javascript mas também de tecnologias e
          habilidades similares como:
        </p>
        <ul>
          <li>Figma</li>
          <li>Git</li>
          <li>Github CLI</li>
          <li>Github Actions</li>
        </ul>
      </div>

      <div>
        <p>Especializações:</p>
        <ul>
          <li>HTML/CSS3/SCSS</li>
          <li>Javascript/Typescript</li>
          <li>Node.js/Express</li>
          <li>Svelte/React.js/Next.js</li>
        </ul>
      </div>

      <div>
        <p>veja mais no meu github:</p>
        <a href="https://github.com/vitorGouveia">
          https://github.com/vitorGouveia
        </a>
      </div>
    `,
  },
  {
    name: "Formação",
    content: html`
      <ul>
        <li>
          <div>
            <h1>ETEC Jornalista Roberto Marinho</h1>
            <p>
              Na ETEC fiz o curso de Informática para Internet, onde aprendi
              muitos nadas sobre programação, aprendi que sozinho consigo ir
              mais longe, por isso que passei 2 anos da minha vida estudando
              programação todo dia para conseguir total fluência e liberadade
              para escrever o que quissese
            </p>
          </div>
        </li>
      </ul>
    `,
  },
  {
    name: "Projetos",
    content: html`
      <style>
        img {
          width: 500px;
          height: 280px;
          object-fit: cover;
        }

        .projects {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          gap: 32px;
        }

        .projects li a {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .projects a p {
          font-weight: 400;
          color: hsl(0, 0%, 40%);
        }

        a:hover {
          text-decoration: none !important;
        }
      </style>
      <h1>Projetos</h1>
      <p>
        Costumo construir diversos projetos pro meu Github, projetos que
        realmente ajudam pessoas e solucionam problemas. Esses são os que julgo
        os melhores
      </p>

      <ul class="projects">
        <li>
          <a href="https://github.com/Neo-Florescence/NeoExpertise">
            <h1>NeoExpertise</h1>

            <p>E-commerce de jogos.</p>

            <img src="./src/images/neo-expertise.png" />
          </a>
        </li>

        <li>
          <a href="https://github.com/VitorGouveia/Encryptr">
            <h1>🛡️ Encryptr</h1>

            <p>Site para encriptação/cifragem de mensagens</p>

            <img src="./src/images/encryptr.png" />
          </a>
        </li>

        <li>
          <a href="https://github.com/VitorGouveia/Giffy">
            <h1>Giffy</h1>

            <p>Aplicativo para gravação de GIFs multi-plataforma grátis.</p>

            <img src="./src/images/giffy.png" />
          </a>
        </li>

        <li>
          <a href="https://github.com/VitorGouveia/Firebolt">
            <h1>Firebolt</h1>

            <p>Framework javascript para webcomponents.</p>

            <img src="./src/images/firebolt.png" />
          </a>
        </li>
      </ul>
    `,
  },
];

const user = {
  name: "Vitor Neves Gomes Gouveia",
  email: "vitor.gouveia10@gmail.com",
  phone: "11 94013-6716",
  socialMedia: [
    {
      platform: "Linkedin",
      link: "https://br.linkedin.com/in/vitor-neves-gomes-gouveia-08ba391a7",
    },
    {
      platform: "Github",
      link: "https://github.com/VitorGouveia",
    },
  ],
  profilePicture: {
    url: "https://media-exp1.licdn.com/dms/image/C4E03AQHUhCYQePK_8w/profile-displayphoto-shrink_200_200/0/1588719961464?e=2147483647&v=beta&t=IFPf5NgW2sQ6qbu0tqCqFyxoCdglw4n51U_THW625kk",
    description:
      "This is an image of myself looking toward the camera with a death threat look",
  },
};

const SocialMedia = virtual(({ link, platform }) => {
  return html`<li><a href="${link}">${platform}</a></li>`;
});

const DetailsHeader = () => {
  return html`
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      body {
        display: flex;
        font-family: sans-serif;
      }

      header {
        min-width: 200px;
        width: 20vw;
        max-width: 400px;
        height: 100vh;

        position: sticky;

        display: flex;
        flex-direction: column;
        gap: 16px;

        padding: 32px 64px;
        background: hsl(240, 50%, 40%);
        color: #fff;
      }

      @media (max-width: 1200px) {
        header {
          display: none;
        }
      }

      img {
        width: 100%;
        aspect-ratio: 1;
        height: auto;
        border-radius: 8px;
      }

      h1 {
        font-size: 24px;
        // text-align: center;
      }

      p {
        color: #fff;
        opacity: 0.8;
        font-size: 18px;
        font-weight: 500;
      }

      .divider {
        width: 100%;
        height: 4px;
        margin: 0 auto;
        background-color: hsl(240, 50%, 30%);
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        list-style: none;
        padding: 0px;
      }

      li a {
        padding: 4px 8px;
        border-radius: 4px;
        background: hsl(240, 50%, 70%);
        color: #fff;
        text-decoration: none;
      }
    </style>

    <header>
      <a
        href="https://i.pinimg.com/originals/61/a5/a1/61a5a1eec1183ed481e9212a9ff506b0.jpg"
      >
        <img
          src="${user.profilePicture.url}"
          alt="${user.profilePicture.description}"
        />
      </a>

      <h1 class="name">${user.name}</h1>

      <div>
        <p>${user.email}</p>
        <p>${user.phone}</p>
      </div>

      <div class="divider"></div>

      <ul>
        ${user.socialMedia.map(({ link, platform }) =>
          SocialMedia({ link, platform })
        )}
      </ul>
    </header>
  `;
};

const TabsNavigation = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].name);

  return html`
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      body {
        display: flex;
        font-family: sans-serif;
      }

      main {
        padding: 32px 20px;
        flex: 1;
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 32px;
      }

      @media (min-width: 768px) {
        main {
          padding: 32px 32px;
        }
      }

      @media (min-width: 1200px) {
        main {
          padding: 32px 64px;
        }
      }

      nav ul {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        list-style: none;
      }

      nav li,
      nav button {
        width: 100%;
      }

      nav button {
        padding: 8px 16px;

        display: grid;
        place-items: center;
        border: none;

        font-weight: bold;
        font-size: 22px;
        cursor: pointer;
      }

      nav button:hover {
        background: hsl(240, 50%, 40%);
        color: #fff;
      }

      button.active {
        background: hsl(240, 50%, 40%);
        color: #fff;
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .content ul {
        list-style: none;
      }

      .content a {
        color: hsl(240, 50%, 40%);
        font-weight: bold;
      }

      .content a:hover {
        text-decoration: wavy underline;
      }
    </style>
    <main>
      <nav>
        <ul>
          ${tabs.map(
            ({ name }) =>
              html`
                <li>
                  <button
                    class="${name === currentTab ? "active" : ""}"
                    @click=${() => setCurrentTab(name)}
                  >
                    ${name}
                  </button>
                </li>
              `
          )}
        </ul>
      </nav>
      ${tabs.map(
        ({ name, content }) => html`
          <div
            class="content"
            style="display: ${name === currentTab ? "flex" : "none"}"
          >
            ${content}
          </div>
        `
      )}
    </main>
  `;
};

customElements.define("details-header", component(DetailsHeader));
customElements.define("tabs-navigation", component(TabsNavigation));
