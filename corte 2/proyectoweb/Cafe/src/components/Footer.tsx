import './Footer.css';

/** Un enlace del menú de navegación. */
interface Enlace {
  texto: string;
  href: string;
}

// PROPS TIPADAS: la interfaz describe qué recibe el componente.
interface FooterProps {
  enlaces: Enlace[];
  version?: string; // el "?" la hace OPCIONAL: se puede enviar o no
}

export function Footer({enlaces}: FooterProps) {
  return (
    <footer className="footer">
      <nav aria-label="Navegación principal">
        <ul className="footer__menu">
          {/* map() crea un <li> por cada enlace; key debe ser única */}
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a href={enlace.href}>{enlace.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}


