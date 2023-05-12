import { LogoFooter } from "./LogoFooter";

const Footer = () => {
  return (
    <footer className="flex items-center self-end w-full p-6 gap-6 bg-gray-900 border-t border-gray-500 lx:flex-col">
      <strong>
        <LogoFooter />
      </strong>

      <div className="flex justify-between flex-1 text-center text-base gap-5 text-gray-300 md:flex-col md:text-center">
        <span>Rocketseat - Todos os direitos reservados</span>

        <a href="#">Políticas de privacidade</a>
      </div>
    </footer>
  );
};

export default Footer;
