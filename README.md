# Matteo Fasano - React Challenge

Test per la posizione di Front end presso Across

## Richiesta del test
### Welcome to the React Challenge
Taken the html structure in the example below (index.html),
write a simple React calculator (adder) su that has the following mandatory functionalities:
<ul>
  <li>rows can be added and removed</li>
  <li>each row have a sign (minus or plus)</li>
  <li>each row can be enabled or disabled by a dedicated control button. Disabled rows must be excluded from the addition.</li>
  <li>The result must be updated "live" while the user is writing</li>
</ul>
Feel free to add libraries if needed.

Structure and quality of the code, are matter of evaluation

ES6+ Javascript knowledge is matter of evaluation

Look and feel of the solution is a plus

### Example below
<div class="wrapper">
  <div>
    <button>Add row</button>
  </div>
  <ul>
    <li>
      <select>
        <option selected>+</option>
        <option>-</option>
      </select>
      <input type="text" value="100"/>
      <button>Delete</button>
      <button>Disable</button>
    </li>
    <li>
      <select>
        <option selected>+</option>
        <option>-</option>
      </select>
      <input type="text" value="30"/>
      <button>Delete</button>
      <button>Disable</button>
    </li>
    <li>
      <select>
        <option>+</option>
        <option selected>-</option>
      </select>
      <input type="text" value="7"/>
      <button>Delete</button>
      <button>Disable</button>
    </li>
  </ul>
  <div>
    Result: 123
  </div>
</div>

## 💻 Tecnologie utilizzate

Il sito è stato sviluppato utilizzando [React](https://it.legacy.reactjs.org/) insieme al framework di componenti di Material Design [Vuetify](https://vuetifyjs.com/en/).

## 💿 Install

Per installare e utilizzare il progetto in locale e produzione si può utilizzare npm

| NPM | |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| `npm install` | installla tutte le dipendenze necessarie |
| `npm start`   | esegue l'app in development mode. Il sito sarà disponibile al seguente link: [http://localhost:3000](http://localhost:3000) |
| `npm run build`   | esegue la build dell'applicazione per la produzione. sarà disponibile nella cartella `build`|