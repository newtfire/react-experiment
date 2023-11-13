import './App.css';
import puffin from './assets/puffin1.jpg';
import {galleryData} from "./data";


function List() {
  // const kinds = galleryData.kind
  const libraries = galleryData.filter(pic =>
      pic.kind === 'library'
  );
    const electrics = galleryData.filter(pic =>
        pic.kind === 'electric art'
    );
  const listItems = electrics.map(pic =>
      <li key={pic.id}>
          {console.log('IMAGE URL IS: ' + pic.src)}
        <img
            src={pic.src}
            alt={pic.name}
        />

        <p>
          <b>{pic.name}:</b>
          {' ' + pic.note}
        </p>
      </li>
  );
  return <ul>{listItems}</ul>;

}

function App() {
  return (
    <div className="App">
        <b>HALLOOOOO</b>
        <>
        <List />
        </>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
