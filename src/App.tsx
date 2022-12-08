import { createServer, Model } from "miragejs";

import { Router } from "./routes";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {

  createServer({
    models: {
      indication: Model,
      user: Model,
    },

    serializers: {
      
    },

    seeds(server) {
      server.db.loadData({
        indications: [
          {
            id: 1,
            name: "John Doe",
            email: "johndoe@gmail.com",
            phone: "3199999-9999",
            company: "Empresa",
            segment: "Administradora",
            product: "Acesso Cloud",
            interest: "Muito interessado",
            channel: "whatsapp",
            source: "Indicacao interna",
            stage: "MQL",
            ambassador: {
              id: 1,
              name: "José Luiz",
              email: "jose.luiz@email.com",
              department: "Desenvolvimento",
            },
            createdAt: new Date("02-10-2022 10:00:00")
          },
          {
            id: 2,
            name: "Mike Mendes",
            email: "Mike@gmail.com",
            phone: "3199999-9999",
            company: "Empresa",
            segment: "Imobiliaria",
            product: "Imob21",
            interest: "Medio",
            channel: "email",
            source: "Indicacao interna",
            stage: "MQL",
            ambassador: {
              id: 2,
              name: "Luis Roberto",
              email: "luis.roberto@email.com",
              department: "Comercial",
            },
            createdAt: new Date("10-10-2022 12:00:00")
          },
          {
            id: 3,
            name: "Rich Morty",
            email: "morty@gmail.com",
            phone: "3199999-9999",
            company: "Empresa",
            segment: "Shopping",
            product: "Group Shopping",
            interest: "Muito interessado",
            channel: "email",
            source: "Indicacao interna",
            stage: "OPP",
            ambassador: {
              id: 2,
              name: "Luis Roberto",
              email: "luis.roberto@email.com",
              department: "Comercial",
            },
            createdAt: new Date("11-02-2022 15:00:00")
          },
          {
            id: 4,
            name: "Carlos Eduardo",
            email: "carlos@gmail.com",
            phone: "3199999-9999",
            company: "Empresa",
            segment: "Shopping",
            product: "Group Shopping",
            interest: "Medio",
            channel: "email",
            source: "Indicacao interna",
            stage: "Aprovado Financeiro",
            ambassador: {
              id: 3,
              name: "João Cesar",
              email: "joao.cesar@email.com",
              department: "Marketing",
            },
            createdAt: new Date("11-04-2022 15:00:00")
          },
        ],
        users: [
          {
            id: 1,
            name: "Carlos Mendes",
            username: "carlos.mendes",
            email: "carlos.mendes@email.com.br",
            password: "12345",
            department: "Desenvolvimento",
            role: "admin",
            createdAt: new Intl.DateTimeFormat("pt-BR").format(new Date("02-10-2022 10:00:00"))
          },
          {
            id: 2,
            name: "John Doe",
            username: "john.doe",
            email: "john.doe@email.com.br",
            password: "12345",
            department: "Sales",
            role: "user",
            createdAt: new Intl.DateTimeFormat("pt-BR").format(new Date("10-22-2022 16:00:00"))
          },
        ]
      })
    },

    routes() {
      this.namespace = "api";

      // this.timing = 2000;

      // GET ALL INDICATIONS
      this.get("indications", (schema) => {
        return this.schema.all("indication");
      });

      // GET INDICATION BY ID
      this.get("indications/:id", (schema, request) => {
        let { id } = request.params;

        return this.schema.find("indication", id);
      });

      // GET ALL USERS
      this.get("users", (schema) => {
        return this.schema.all("user");
      });

      // GET USER BY ID
      this.get("users/:id", (schema, request) => {
        let { id } = request.params;

        return this.schema.find("user", id);
      });

      // EDIT USER
      this.put("users/:id", (schema, request) => {
        const { id } = request.params;
        const newAttr = JSON.parse(request.requestBody);

        return this.schema.find("user", id)?.update(newAttr) as any;
      }, {timing: 2000});

      // DELETE USER
      this.del("users/:id", (schema, request) => {
        const { id } = request.params;

        return this.schema.find("user", id)?.destroy() as any;
      }, {timing: 2000});
    },
  })

  return (
    <>
      <Router />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}