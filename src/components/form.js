import React from 'react';
import { useForm } from "react-hook-form"

const Form = () => {
    const { register, errors, handleSubmit } = useForm()
    const onSubmit = values => {
      // form is valid
      console.log(values)
    }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        placeholder="Nombre y apellido"
        ref={register({
          required: "Ingrese su nombre",
        })}
      />
      {errors.name && "Ingrese su nombre"}
      <input
        name="email"
        placeholder="E-mail"
        ref={register({
          required: "Ingrese su e-mail",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Ingrese un e-mail válido",
          },
        })}
      />
      {errors.name && "Ingrese su e-mail"}
      <input
        name="message"
        className="form-message"
        placeholder="Mensaje"
        ref={register({
          required: "Ingrese su mensaje",
        })}
      />
      {errors.name && "Ingrese su mensaje"}

      <button type="submit" className="button">
        Enviar
      </button>
    </form>
  )
}

export default Form;
