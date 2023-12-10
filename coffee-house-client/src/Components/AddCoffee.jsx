import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import toast from "react-hot-toast";

const AddCoffee = () => {

    const navigate = useNavigate()

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const price = form.price.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = {name,quantity,supplier,price,category,details,photo}
        console.log(newCoffee);

        fetch("http://localhost:5000/coffees",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newCoffee)
        })
        .then(response => response.json())
        .then(data => {
          if (data.insertedId) {
            toast.success('Coffee added successfully')
            form.reset()
          }
        })

      navigate("/")
    }



  return (
    <div>
      <div className="text-center mt-5">
        <Link to={"/"} className="btn-link text-lg ">
          {" "}
          Back to home
        </Link>
      </div>
      <Form handleSubmit={handleSubmit} intro={"Add Coffee"} des={"It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."} btnText={"Add Coffee"}></Form>
    </div>
  );
};

export default AddCoffee;
