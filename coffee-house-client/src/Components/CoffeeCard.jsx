import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, supplier, price, category, details, photo } =
    coffee || {};

  //delete operation
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Coffee !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Your Coffee has been deleted!", {
                icon: "success",
              });
            }
          });

        const remainCoffee = coffees.filter((cof) => cof._id !== _id);
        setCoffees(remainCoffee);
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt={`${name} photo`} />
      </figure>
      <div className="flex items-center px-5">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <p>
            {category} || {supplier}
          </p>
          <p>
            {quantity} || {price}
          </p>
        </div>
        <div className="">
          <div className="join join-vertical ">
            <button className="btn join-item mb-2 text-lg bg-yellow-400">
              <AiOutlineEye></AiOutlineEye>
            </button>
            <Link to={`/update-coffee/${_id}`}>
              <button className="btn join-item mb-2 text-lg bg-green-400">
                <AiOutlineEdit></AiOutlineEdit>
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item text-lg bg-red-600"
            >
              <AiOutlineDelete></AiOutlineDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
