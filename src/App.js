import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
  };

  return (
    <section className="section-center">
      <h3>Tired of Lorem Ipsum?</h3>
      <form onClick={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate text
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          nisi dignissimos quaerat distinctio natus aspernatur accusantium
          consequuntur tenetur dolor sint.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          nisi dignissimos quaerat distinctio natus aspernatur accusantium
          consequuntur tenetur dolor sint.
        </p>
      </article>
    </section>
  );
}

export default App;
