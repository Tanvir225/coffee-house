
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Form from "./Form";

const UpdateCoffee = () => {
  const navigate = useNavigate();

  const loadedCoffee = useLoaderData()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const price = form.price.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      price,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Coffee updated successfully");
          form.reset();
        }
      });

    navigate("/");
  };

  return (
    <div>
      <div className="text-center mt-5">
        <Link to={"/"} className="btn-link text-lg ">
          {" "}
          Back to home
        </Link>
      </div>
      <Form
        handleSubmit={handleSubmit}
        intro={"Update Existing Coffee Details"}
        des={
          "It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
        }
        btnText={"Update Coffee"} name={loadedCoffee.name} quantity={loadedCoffee.quantity}
        supplier={loadedCoffee.supplier} price={loadedCoffee.price}
        category={loadedCoffee.category}
        details={loadedCoffee.details}
        photo={loadedCoffee.photo}
      ></Form>
    </div>
  );
};

export default UpdateCoffee;
