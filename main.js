class ApexTeam extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Inter', sans-serif;
          color: #fff;
          background: linear-gradient(180deg, #2d2e2e 0%, #000 100%);
          min-height: 100vh;
          text-align: center;
          padding: 2rem;
        }
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #45aaf2;
        }
        h1 {
          color: #45aaf2;
          font-size: 2.5rem;
          margin: 1rem 0;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        .links a {
          display: block;
          background-color: #45aaf2;
          color: #fff;
          padding: 1rem;
          margin: 1rem 0;
          border-radius: 8px;
          text-decoration: none;
          font-size: 1.2rem;
          transition: background-color 0.3s ease;
        }
        .links a:hover {
          background-color: #3d9de0;
        }
      </style>
      <img src="img/new.jpeg" alt="Apex Team">
      <h1>APEX TEAM 🏔️</h1>
      <p>Crypto Market Analysis Made Simple📍</p>
      <div class="links">
        <a href="tg://join?invite=4n8CGPMZcgdlYmJi">OPEN TELEGRAM</a>
      </div>
    `;
  }
}

customElements.define('apex-team', ApexTeam);

document.getElementById('root').innerHTML = '<apex-team></apex-team>';