import { EnvelopeIcon } from "../icons/envelope-icon";
import { EnviarIcon } from "../icons/enviar-icon";
import { GithubIcon } from "../icons/github-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { LocationIcon } from "../icons/location-icon";
import { PhoneIcon } from "../icons/phone-icon";

export const Contato = () => {
  const contatos = [
    {
      icon: <EnvelopeIcon />,
      label: "Email",
      value: (
        <div className="text-sm text-[#6C6F7A]">lauranarcisop12@gmail.com</div>
      ),
    },
    {
      icon: <PhoneIcon />,
      label: "Telefone",
      value: <div className="text-sm text-[#6C6F7A]">(51) 99523-3180</div>,
    },
    {
      icon: <LocationIcon />,
      label: "Localização",
      value: <div className="text-sm text-[#6C6F7A]">Gravataí, RS</div>,
    },
  ];

  return (
    <div id="contato" className="pb-24 px-8">
      <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="text-(--primary) font-bold lg:text-5xl text-4xl">
          Entre em contato
        </h2>
        <p className="text-[#6C6F7A] lg:text-2xl text-lg lg:w-[60ch]">
          Tem algum projeto em mente? Vamos conversar sobre como posso ajudar!
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row gap-20 justify-center">
        <div className="flex flex-col max-w-md gap-6 flex-1">
          <h3 className="text-2xl font-semibold text-[#21242C]">
            Vamos trabalhar juntos!
          </h3>
          <p className="text-[#6C6F7A] text-lg">
            Estou sempre aberta a novas oportunidades e colaborações. Se você
            tem um projeto interessante ou gostaria de conversar sobre
            desenvolvimento, não hesite em entrar em contato.
          </p>

          <div className="flex flex-col gap-4">
            {contatos.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border border-[#d4d1d1] rounded-lg p-4 transform transition-transform duration-300 hover:scale-105"
              >
                {item.icon}
                <div>
                  <span className="font-semibold">{item.label}</span>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold">Me encontre nas redes:</span>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lauranarciso_/"
                target="_blank"
                className="p-2 rounded-lg bg-white hover:bg-[#E5E7EB] border border-[#d4d1d1]"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/laura-narciso-peixoto-3b9701332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="p-2 rounded-lg bg-white hover:bg-[#E5E7EB] border border-[#d4d1d1]"
              >
                <LinkedinIcon />
              </a>

              <a
                href="https://github.com/lauranarciso"
                target="_blank"
                className="p-2 rounded-lg bg-white hover:bg-[#E5E7EB] border border-[#d4d1d1]"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
        <form className="flex flex-col max-w-lg bg-white rounded-xl p-8 shadow-2xl gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-medium">Nome *</label>
              <input
                type="text"
                className="w-full p-2 rounded border border-[#d4d1d1] bg-[#EAECF0] focus:outline-none"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium">Email *</label>
              <input
                type="text"
                className="w-full p-2 rounded border border-[#d4d1d1] bg-[#EAECF0] focus:outline-none"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">Assunto *</label>
            <input
              type="text"
              className="w-full p-2 rounded border border-[#d4d1d1] bg-[#EAECF0] focus:outline-none"
              placeholder="Assunto da mensagem"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">Mensagem *</label>
            <textarea
              className="w-full p-2 rounded border border-[#d4d1d1] bg-[#EAECF0] focus:outline-none"
              rows={4}
              placeholder="Descreva seu projeto ou como posso ajudar..."
            />
          </div>
          <div className="flex ">
            <button
              type="submit"
              className="w-full py-3 rounded bg-(--primary) text-white font-semibold flex items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-105"
            >
              <EnviarIcon />
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
