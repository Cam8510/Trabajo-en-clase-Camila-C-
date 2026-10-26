
import './Header.css';

interface Enlace {
  texto: string;
  href: string;
}

interface HeaderProps {
  nombreSitio?: string;
  enlaces?: Enlace[];
  version?: string;
}

const enlacesPredeterminados: Enlace[] = [
  { texto: 'Inicio', href: '/' },
  { texto: 'Soportes', href: '/soportes' },
  { texto: 'Materias', href: '/materias' },
  { texto: 'Usuarios', href: '/usuarios' },
  { texto: 'Monitorías', href: '/monitorias' },
];

export function Header({
  nombreSitio = 'Saberio',
  enlaces = enlacesPredeterminados,
  version,
}: HeaderProps) {
  return (
    <header className="header">
      <a className="header__marca" href="/" aria-label="Inicio de Saberio">
        <img
          className="header__logo"
          src="src/components/img/loguito.png"
          alt={nombreSitio}
        />
      </a>

      <nav className="header__nav" aria-label="Navegación principal">
        <ul className="header__menu">
          {enlaces.map((enlace, index) => (
            <li key={enlace.href}>
              <a
                className=""
                href={enlace.href}
              >
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__usuario">


        <a
          className="header__notificaciones"
          href="#notificaciones"
          aria-label="Ver notificaciones"
        >
          <svg
            className="header__campana"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>
        </a>



        <a className="header__perfil" href="#perfil">
          <div className="header__datos">
            <strong>Administrador</strong>
            <span>Admin</span>
          </div>

          <div className="header__avatar">
            AD
          </div>

        </a>
      </div>
    </header >
  );
}
