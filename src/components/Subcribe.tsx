import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import Mask from "../assets/Mask.png";

import { gql, useMutation } from "@apollo/client";

import Footer from "./Footer";
import { Logo } from "./Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

const Subcribe = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(name, email);

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    navigate("/event");
  };

  return (
    <>
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="w-full max-w-[1140px] flex items-center justify-between gap-6 px-5 mt-20 mx-auto md:flex-col md:p-0">
          <div className=" max-w-[640px] md:p-5 flex flex-col md:items-center md:text-center">
            <Logo />

            <h1 className="mt-8 text-[2.5rem] leading-tight">
              Construa uma
              <strong className="text-blue-500"> aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React</strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <div className="p-8 bg-gray-700 border border-gray-500 rounded md:w-full">
            <strong className="text-axl mb-6 block">
              Inscreva-se gratuitamente
            </strong>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 w-full">
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="e-mail"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img
          src={Mask}
          alt="Banner"
        />
        <Footer />
      </div>
    </>
  );
};

export default Subcribe;
