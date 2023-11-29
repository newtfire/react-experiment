import { useState } from 'react';
import './App.css';
import puffin from './assets/puffin1.jpg';
import {galleryData} from "./data";

function List({formAction}) {
/*Apparently all I needed to do was bundle formAction into curly braces */
    console.log('what is sent to list?' + {formAction} )
    // const kinds = galleryData.kind
    const choice = galleryData.filter(pic =>
        pic.kind === formAction
    );
    console.log('what is choice?' + choice)
    /*const electrics = galleryData.filter(pic =>
        pic.kind === 'electric art'
    );*/
    const listItems = choice.map(pic =>
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

function Selector() {
    /* Get distinct values of the kinds of pictures from galleryData */
    const pictureKinds =
        galleryData.map(obj => obj['kind']);
    const uniqueKinds =
        new Set(pictureKinds);
    const arrayKinds =
        Array.from(uniqueKinds);
    /*arrayKinds is a new array of distinct values */
    console.log(arrayKinds);

    const [kind, setKind] = useState('')
    const onOptionChange = (e) => {
        setKind(e.target.value);
    };


    const radioButtons = arrayKinds.map(value =>
        <>
         <input type="radio" id={value} name="choosePic" value={value}
                checked={kind === value} onChange={onOptionChange} />
            <label htmlFor={value}>{value}</label>

        </>
            );


/*    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Wbat is submitted?' + kind);
        List(kind)

    }*/


    return (
                <>
                <form>{radioButtons}</form>
                   <List formAction={kind}/>

                    <p>
                        Selection <strong>{kind}</strong>
                    </p>





                </>

            )
            }



function App() {
  return (
    <div className="App">
        <b>HALLOOOOO</b>
            <>
            <Selector />


            </>
        <>

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
