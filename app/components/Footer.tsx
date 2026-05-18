import {
  AiFillGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"

const socialLinks = [
  {
    href: "https://github.com/Harshjha002",
    Icon: AiFillGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/harsh-jha-85722b254/",
    Icon: AiOutlineLinkedin,
    label: "LinkedIn",
  },
]

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        pt-24
        pb-10
        max-w-[1200px]
        mx-auto
        px-6
      "
    >
      {/* HERO STYLE GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* BIG NAME */}
      <div className="relative z-10 text-center">

        {/* DESKTOP */}
        <h1
          className="
            hidden
            md:block
            text-[8rem]
            lg:text-[12rem]
            font-extrabold
            leading-none
            tracking-tight
            text-white/[0.05]
            select-none
          "
        >
          HARSH JHA
        </h1>

        {/* MOBILE */}
        <h1
          className="
            md:hidden
            text-7xl
            font-extrabold
            leading-none
            text-white/[0.05]
            select-none
          "
        >
          HARSH
          <br />
          JHA
        </h1>
      </div>

      {/* BOTTOM SECTION */}
      <div
        className="
          relative
          z-10
          -mt-2
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-8
          border-t
          border-white/10
          pt-8
        "
      >
        {/* COPYRIGHT */}
        <p className="text-white/50 text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Harsh Jha. All rights reserved.
        </p>

        {/* SOCIAL LINKS */}
        <ul className="flex items-center gap-5">
          {socialLinks.map(({ href, Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-full
                  border
                  border-white/10
                  bg-[#140B1D]/70
                  backdrop-blur-xl
                  text-white/70
                  hover:text-purple-300
                  hover:border-purple-400/30
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]
                  transition-all
                  duration-300
                "
              >
                <Icon
                  size={24}
                  className="group-hover:scale-110 transition duration-300"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer