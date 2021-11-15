import React from "react";
import "./styles.scss";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <h2 className="contact-form__title">ESCRIBINOS</h2>
      <p className="contact-form__description">
        ¡Tus opiniones nos hacen crecer día a día!
        <br /> Ya sea por consultas, pedidos o recomendaciones estamos a tu
        disposición.
      </p>
      <label for="name" className="contact-form__info">
        Nombre
      </label>
      <br />
      <input type="text" id="name" placeholder="Sofia"></input>
      <br />
      <label for="surname" className="contact-form__info">
        Apellido
      </label>
      <br />
      <input type="text" id="surname" placeholder="Terragno"></input>
      <br />
      <label for="mail" className="contact-form__info">
        Mail
      </label>
      <br />
      <input type="mail" id="mail" placeholder="sofiterragno@gmail.com"></input>
      <br />
      <label for="celphone" className="contact-form__info">
        Telefono
      </label>
      <br />
      <input type="number" id="celphone" placeholder="(+549)1122334455"></input>
      <br />
      <input type="checkbox" value="Revendedor" id="revendedor"></input>
      <label for="revendedor" id="revendedor">
        Revendedor
      </label>
      <input type="checkbox" value="Consumidor Final" id="consumidor"></input>
      <label for="consumidor" id="consumidor">
        Cons. Final
      </label>

      <br />
      <textarea
        id="mensaje"
        placeholder="Dejanos tu consulta y te responderemos a la brevedad posible"
      ></textarea>
      <br />
      <input type="submit" value="Enviar mensaje" id="boton"></input>
    </form>
  );
};

export default ContactForm;
