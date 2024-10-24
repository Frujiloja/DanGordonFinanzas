import styles from "./Contacto.module.css";
import React, { useState } from "react";
import logo from "../assets/Logo.png";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from 'emailjs-com';


const Contacto = () => {
  const position = [-34.572766, -58.421053]; // Coordenadas de Buenos Aires (ejemplo)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_fcnnvtf', 'template_bwaptb9', formData, '1sBpeKaGLYovogvqY')
    .then((result) => {
      alert('Correo enviado con éxito!');
      console.log(result.text);
      // Limpia el formulario
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      alert('Hubo un problema al enviar el correo. Intenta de nuevo.');
      console.log(error.text);
    });
    console.log("Formulario enviado", formData);
  };

  return (
    <div id="contact" className={styles.contacto_container}>
      <h1 className={styles.titulo}>Contactame</h1>
      <br />
      <img src={logo} alt="logo" className={styles.logo} />
      <br />
      <div className={styles.div_container}>
        <form onSubmit={handleSubmit} className={styles.contact_form}>
          <div className={styles.form_group}>
            <label>Nombre y Apellido</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>

          <div className={styles.form_group}>
            <label>Teléfono</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>

          <div className={styles.form_group}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>

          <div className={styles.form_group}>
            <label>Comentarios</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>

          <button type="submit" className={styles.form_button}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
