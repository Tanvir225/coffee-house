import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {

    const loadedCoffee = useLoaderData()

    const {
        name,
        quantity,
        supplier,
        price,
        category,
        details,
        photo,
    } = loadedCoffee || {}

    return (
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center h-[60vh]">
            <Link to={"/"} className="btn-link text-lg ">
                {" "}
                Back to home
            </Link>
            <div className="card card-side p-10 bg-base-100 shadow-xl w-full h-[30vh]">
                <figure><img src={photo} alt={`${name} image`} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>{category} || {supplier}</p>
                    <p>{quantity}  || {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;