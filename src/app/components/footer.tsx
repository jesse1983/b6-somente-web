"use client";
import Image from "next/image";

export default function Footer() {
  const medias = ["Facebook", "Linkedin", "Instagram"];
  const openMedia = (ev: React.MouseEvent<HTMLDivElement>, media: string) => {
    ev.preventDefault();
    console.log(ev, media);
  };
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-3 p-10 align-middle justify-center gap-10">
        <div className="flex align-middle justify-center m-auto">
          <Image
            src="/logos-color.svg"
            width={188}
            height={161}
            alt="C6 Somente"
            className="max-w-auto"
          />
        </div>
        <div className="flex align-middle justify-center">
          <div>
            <p className="mb-5 font-bold">Contato</p>
            <p className="mb-5">
              (11) 2078-0220 <br />
              (11) 3801-1521 <br />
              (11) 3865-3013 <br />
              (11) 4935-9010
            </p>
            <p>
              Alameda Xingu, 350 <br />
              Alphaville Industrial <br />
              Barueri - SP
            </p>
          </div>
        </div>
        <div className="flex align-middle justify-center flex-col gap-10">
          {medias.map((media) => (
            <div className="flex gap-4 cursor-pointer font-bold w-36 m-auto" key={media}>
              <div
                className="flex-none"
                onClick={(ev) => openMedia(ev, "FACEBOOK")}
              >
                <Image
                  src={`/${media.toLowerCase()}.svg`}
                  width={24}
                  height={24}
                  alt="Facebook"
                  className="max-w-auto"
                />
              </div>
              <div className="flex-1">{media}</div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
