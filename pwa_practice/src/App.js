import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [data, setData] = useState([])

    useEffect (()=> {
        const fetchData = async() =>{
            const result = await fetch("http://orangevalleycaa.org/api/videos").then(response => response.json());
    
    setData(result);
};
    fetchData();

    });
    return ( 
    
    <div className = "App" >
        <header>
            <h1>Videos</h1> 
        </header>
    </div>
    );
}

export default App;