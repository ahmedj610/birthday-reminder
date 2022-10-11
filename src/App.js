import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  function isHelping() {
    true ?
      console.log(true) :
      console.log(false)
  }

  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container" onClick={isHelping}>
        <h3>{people.length} Birthdays Today</h3>
        <List
          people={people}
        />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App;
