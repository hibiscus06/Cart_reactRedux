import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDs1kDmWZ2K4CXfIlHKN0IXTsK4SoijiJt7g&usqp=CAU"
function Home() {

    const productList = [
        {
            name:'Camera',
            price:15000,
            imgSrc:img1,
            id:"jngkjkhgkl",
        },
        {
            name:'Shoes',
            price:5000,
            imgSrc:img2,
            id:"ruyityuolkhgkl",
        }
    ];

    const dispatch = useDispatch();
    
    const addToCartHandler = (options) => {
      dispatch({ type: "addToCart", payload: options });
      dispatch({ type: "calculatePrice" });
      toast.success("Added To Cart");
    };


  return (
    <div className='Home'>
        {
            productList.map( (i) => (
                <ProductCard
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        /> 
            ))
        }
        </div>
  );
    };

    

  const ProductCard = ({ imgSrc,name,price,id,handler }) => (
    <div className="productCard">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add to Cart
      </button>
    </div>
  );
  


export default Home