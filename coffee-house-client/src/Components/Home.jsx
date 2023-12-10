import { Link } from "react-router-dom";
import hero from "../assets/images/more/6.jpeg";
import background from "../assets/images/more/1.png";
import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";




const Home = () => {



    const [coffees,setCoffees] = useState([])


    useEffect(()=>{
      fetch("http://localhost:5000/coffees")
      .then(res => res.json())
      .then(data => setCoffees(data))
    },[])









  return (
    <div className="space-y-10">
      <div
        className="hero h-[75vh]"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn btn-outline text-white font-light text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-10 bg-cover bg-no-repeat bg-right-bottom " style={{
          backgroundImage: `url(${background})`,
        }} >
        <h2 className="text-2xl text-center divider text-yellow-950">Our Products</h2>
        <div className="text-center">
          <Link
            to={"/add-coffee"}
            className="btn  btn-outline w-32 "
          >
            add coffee
          </Link>
        </div>

        <div className="grid md:grid-cols-2 container mx-auto gap-5">
          {
              coffees.map(coffee => <CoffeeCard coffee={coffee} setCoffees={setCoffees} coffees={coffees} key={coffee._id}></CoffeeCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
