import { toast } from "react-toastify";

const Card = ({ carts,setCarts }) => {
 const totalPrice = carts.reduce((sum, item) => sum + item.price,0);
 const handlePayment = () =>{
    setCarts([]);
    toast.success('Payment Successful')
 }
 const handleDelete = (item) =>{
    const filterArray = carts.filter(c => c.id !== item.id);
    setCarts(filterArray)
    toast.success('Item deleted!')
 }
  return (
    <div className=" p-10 ">
      <h1 className="text-3xl font-bold text-center">Your Cart</h1>
      {carts.map((item) => (
        <div className="flex justify-between items-center border rounded-lg p-3 mt-5">
          <div className="flex items-center gap-2">
            <div>
              <img
                className="h-20 w-20 object-contain"
                src={item.image}
                alt=""
              />
            </div>
            <div className="text-xl font-bold">{item.title}</div>
          </div>
          <div className=" flex gap-5">
            <p className="font-bold text-3xl">${item.price}/month</p>
          <button onClick={() => handleDelete(item)} className="btn rounded-full btn-error" >X</button>
          </div>
        </div>
      ))}
      <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-3xl font-bold">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>

      <button className="btn w-full mt-5 bg-red-500 text-white text-2xl h-15 rounded-lg" onClick={handlePayment}>Proceed to Checkout</button>
    </div>

  );
};

export default Card;






