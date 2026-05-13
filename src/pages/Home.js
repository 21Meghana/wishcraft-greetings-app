import GreetingCard from "../components/GreetingCard";

import templates from "../data/templates";

import "../styles/home.css";

function Home(){

  return(

    <div className="home-container">

      <h1 className="home-title">
        Greeting Templates
      </h1>

      <div className="cards-container">

        {templates.map((item)=>(

          <GreetingCard
            key={item.id}
            template={item}
          />

        ))}

      </div>

    </div>
  );
}

export default Home;