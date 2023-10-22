import React, {useState} from "react";

const Checkout = () => {
    const[user,setUser]=useState({})
    const[validateEmail, setValidateEmail]= useState('')

    const datosComprador = (e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
    
    }
    return (
        <div>
            <h2>Terminar compra</h2>
            <h5>Por favor llenar con sus datos</h5>
            <form onSubmit={finalizarCompra}>
                <div className="">
                    <label className="">Nombre Completo:</label>
                    <input onChange={datosComprador} className="" type="text" placeholder="Nombre y apellido" name="name" />
                </div>
                <div className="">
                    <label className="">Telefono:</label>
                    <input onChange={datosComprador} className="" type="number" placeholder="Nombre y apellido" name="phone" />
                </div>
                <div className="">
                    <label className="">Email</label>
                    <input onChange={datosComprador} className="" type="email" placeholder="email@email.com" name="mail"/>
                </div>
                <div className="">
                    <label className="">Repita su Email</label>
                    <input className="" type="email" placeholder="email@email.com" name="mail" onChange={((e)=>setValidateEmail(e.target.value))} />
                </div>
            </form>
            <button className="" type="submit" disabled={validateEmail !== user.mail}>Generar orden</button>
        </div>

    )
}

export default Checkout