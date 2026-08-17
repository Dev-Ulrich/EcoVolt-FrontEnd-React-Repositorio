import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="text-2xl font-extrabold text-green-600"
        >
          EcoVolt
        </NavLink>

        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <NavLink to="/" className="font-medium text-slate-700 hover:text-green-600">
              Início
            </NavLink>
          </li>

          <li>
            <NavLink to="/quem-somos" className="font-medium text-slate-700 hover:text-green-600">
              Quem Somos
            </NavLink>
          </li>

          <li>
            <NavLink to="/sobre" className="font-medium text-slate-700 hover:text-green-600">
              Sobre
            </NavLink>
          </li>

          <li>
            <NavLink to="/faq" className="font-medium text-slate-700 hover:text-green-600">
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink to="/contato" className="font-medium text-slate-700 hover:text-green-600">
              Contato
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className="rounded-lg bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header