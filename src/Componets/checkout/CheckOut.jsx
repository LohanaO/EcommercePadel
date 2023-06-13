import { useState, useContext } from "react";
import { ContextCart } from "../../Context/CartContext";
import { db } from "../../services/Config";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";

const initialValues = {
  nombre: "",
  lastName: "",
  phone: "",
  emal: "",
  emailConfirmation: "",
};
const CheckOut = () => {
  const { cart, emptyCart, total } = useContext(ContextCart);
  const [values, setValues] = useState(initialValues);
  const { nombre, lastName, phone, email, emailConfirmation } = values;
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleInputChange = (event) => {
    const changeValues = {
      ...values,
      [event.target.name]: event.target.value,
    };
    setValues(changeValues);
  };

  const handleForm = (event) => {
    event.preventDefault();
    if(!nombre || !lastName || !phone || !email || !emailConfirmation) {
        setError("Por favor complete todos los campos"); 
        return;
    }

    //Validamos que los campos del email coincidan 
    if(email !== emailConfirmation) {
        setError("Los campos del email no coinciden");
        return;
    }
    const order = {
      item: cart.map((prod) => ({
        id: prod.item.id,
        nombre: prod.item.nombre,
        cantidad: prod.cantidad,
      })),

      total: total,
      nombre,
      lastName,
      phone,
      email,
      fecha:new Date()
    }
    Promise.all(
        order.item.map(async (prodOrder)=>{
            
        const prodRef= doc(db,"productos", prodOrder.id);
        const prodDoc= await getDoc(prodRef);
        
        const stockActual= prodDoc.data().stock
       
        await updateDoc(prodRef,{ stock: stockActual - prodOrder.cantidad,
        })
        
    })
    )
    
    .then(()=>{
        addDoc(collection(db,"ordenes"),order)
        .then((docRef)=>{
            setOrderId(docRef);
            emptyCart();
        })
        .catch((err)=>{
            console.error("Error al crear la orden",err);
            setError("se produjo un error al crear la orden");
        });
    })
    .catch((err)=>{
        console.error("Error al actualizar stock",err);
        setError("se produjo un error al actualizar stock");
});
    
  }

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleForm}>
        {cart.map((prod) => (
          <div key={prod.item.id}>
            <p>
              {prod.item.nombre} x {prod.cantidad}
            </p>
            <p>Precio: $: {prod.item.precio}</p>
            <hr />
          </div>
        ))}
        <p>Total: {total}</p>
        <hr />
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Telefono</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Correo electrónico</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Confirmación correo electrónico</label>
          <input
            type="email"
            value={emailConfirmation}
            name="emailConfirmation"
            onChange={handleInputChange}
          />
        </div>
        {error && <p style={{ color: "red" }}> {error} </p>}
        <button type="submit"> Finalizar Compra </button>
      </form>
      {orderId && (
        <strong style={{ color: "black" }}>
          Gracias por su compra! Su numero de Orden es: {orderId}{" "}
        </strong>
      )}
    </div>
  );
};

export default CheckOut;
