let express = require("express"),
  router = express.Router(),
  nodemailer = require("nodemailer"),
  usuario = "ramiro.pezzone.emailer@gmail.com",
  contrasenia = "aiclfwwgpgovmrak",
  enviarA = "ramiro.pezzone@gmail.com",
  //   CONFIGURACIÓN DE FECHA Y HORA
  dateNow = new Date().toLocaleString();
  console.log(dateNow);

router.post("/contacto", async (req, res) => {
  const { nombre, apellido, email, organization, telefono, pais } = req.body;

  const mensajeSaliente = `<h1>Una nueva mensaje fue enviado el día ${dateNow}</h1>
  <hr>
  <h2 style="color: rgb(150, 150, 150)"><u>Los datos de contacto son</u>:</h2>
  <h3 style="color: rgb(150, 150, 150)"><u>Nombre completo</u>:</h3>
  <h3 style="color: #000">${nombre} ${apellido}</h3>
  <h3 style="color: rgb(150, 150, 150)"><u>Nombre de la compañía</u>:</h3>
  <h3 style="color: #000"> ${organization}</h3>
  <h3 style="color: rgb(150, 150, 150)"><u>Teléfono</u>:</h3>
  <h3><a style="text-decoration:none" href=tel:${telefono}>${telefono}</a></h3>
  <h3 style="color: rgb(150, 150, 150)"><u>Correo electrónico</u>:</h3>
  <h3><a href=mailto.${email}>${email}</a></h3>
  <h3 style="color: rgb(150, 150, 150)"><u>País</u>:</h3>
  <h3 style="color: #000">${pais}</h3>`;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: usuario,
      pass: contrasenia,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: '"Solicitud de contacto desde el sitio web de Ramiro Pezzone" <ramiro.pezzone.emailer@gmail.com>',
    to: enviarA,
    subject: `Nueva consulta desde la web`,
    html: mensajeSaliente,
  });

  console.log(
    "El mensaje fue enviado correctamente con el ID" + info.messageId
  );

  res.redirect("/");
});

module.exports = router;
