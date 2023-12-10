


const Form = ({handleSubmit,intro, des, btnText, name, quantity,supplier,price,category,details,photo}) => {
  return (
    <div className=" bg-[#F4F3F0] shadow-lg rounded-lg p-16 md:w-[70%] mx-auto mt-10 space-y-5">

        <h2 className="text-xl text-center">{intro}</h2>
        <p className="text-gray-500 text-center md:w-[60%] mx-auto text-lg">{des}</p>

      <form className=" space-y-5" onSubmit={handleSubmit}>
        {/* row -1 */}
        <div className="md:flex items-center gap-5 space-y-2 md:space-y-0 ">

          <div className="md:w-1/2">
            <input
              className="input input-bordered join-item w-full"
              placeholder="Name"
              defaultValue={name}
              name="name"
            />
          </div>

          <div className="md:w-1/2">
            <input
              className="input input-bordered join-item w-full"
              placeholder="Quantity"
              defaultValue={quantity}
              name="quantity"
            />
          </div>

        </div>



        {/* row -2 */}
        <div className="md:flex items-center gap-5 space-y-2 md:space-y-0">

          <div className="md:w-1/2">
            <input
              className="input input-bordered join-item w-full"
              placeholder="Supplier"
              defaultValue={supplier}
              name="supplier"
            />
          </div>

          <div className="md:w-1/2 space-y-2">
            <input
              className="input input-bordered join-item w-full"
              placeholder="Price"
              name="price"
              defaultValue={price}
            />
          </div>

        </div>



        {/* row -3 */}
        <div className="md:flex items-center gap-5 space-y-2 md:space-y-0">

          <div className="md:w-1/2">
            <input
              className="input input-bordered join-item w-full"
              placeholder="Category"
              name="category"
              defaultValue={category}
            />
          </div>

          <div className="md:w-1/2">
            <input
              className="input input-bordered join-item w-full"
              placeholder="details"
              name="details"
              defaultValue={details}
            />
          </div>

        </div>



        {/* row -4 */}
        <div className="">

          <div className="w-full">
            <input
              className="input input-bordered join-item w-full"
              placeholder="Photo Url"
              name="photo"
              defaultValue={photo}
            />
          </div>

     
        </div>

        <div>
            <button className="btn btn-outline w-full" >{btnText}</button>
        </div>

      </form>



    </div>
  );
};

export default Form;
