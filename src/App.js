import logo from './logo-react.svg';
import './App.css';

function App() {
  const name = "Артем";
  const imageAlt = "Фіолетовий квадрат";
  const favoriteSite = {
    title: "YouTube",
    url: "https://www.youtube.com/"
  };
  const num1 = 7; 
  const num2 = 5; 
  const sum = num1 + num2;
  const colors = ["Червоний", "Синій", "Жовтий", "Зелений"];


  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <p>Ласкаво просимо до нашого сайту!</p>
        Learn React
        <img src={logo} alt={imageAlt} />
        <a href={favoriteSite.url}>
          {favoriteSite.title}
        </a>
        <p>Сума: {sum}</p>
       <ul>{colors.map((color, index) => <li key={index}>{color}</li>)}</ul>
      </header>
    </div> 
  );
}

export default App;
 