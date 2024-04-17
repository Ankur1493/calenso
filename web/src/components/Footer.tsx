const LINKS = [
  {
    title: "Github",
    items: [
      { name: "Ankur", link: "https://github.com/ankur1493" },
      { name: "Udit", link: "https://github.com/udit063" },
    ],
  },
  {
    title: "LinkedIn",
    items: [
      { name: "Ankur", link: "https://www.linkedin.com/in/ankursharma14/" },
      { name: "Udit", link: "https://www.linkedin.com/in/uditkapoor06/" },
    ],
  },
  {
    title: "Contact Us",
    items: [
      { name: "Ankur", link: "https://www.linkedin.com/in/ankursharma14/" },
      { name: "Udit", link: "https://www.linkedin.com/in/uditkapoor06/" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full bg-home">
      <div className="mx-auto w-full max-w-7xl px-8 py-2 text-mainText">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <h5 className="text-3xl font-secondHeading">Calenso.live</h5>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <div className="font-medium font-heading text-gray font-heading">
                  {title}
                </div>
                {items.map(({ name, link }) => (
                  <li key={name}>
                    <a
                      href={link}
                      target="_blank"
                      className="font-normal font-heading transition-colors opacity-40 text-blue-gray hover:text-blue-gray-900"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
