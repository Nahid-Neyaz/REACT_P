import List from './List.jsx';

function App() {

  const fruits=[{id: 1, name: "apple", calories: 95},
                {id: 2, name: "banana", calories: 45},
                {id: 3, name: "mango", calories: 105}, 
                {id: 4, name: "orange", calories:45}];

  const veg=[{id: 5, name: "aaa", calories: 9},
             {id: 6, name: "bbb", calories: 5},
             {id: 7, name: "ccc", calories: 1}, 
             {id: 8, name: "ddd", calories: 4}];

  return (
    <>
    {fruits.length>0 ? <List  items={fruits} category="Fruits"/> : <h3>No fruits</h3>}
    {veg.length>0 ? <List  items={veg} category="Veg"/> : <h3>No veg</h3>}
    </>       
  );
  }

export default App
