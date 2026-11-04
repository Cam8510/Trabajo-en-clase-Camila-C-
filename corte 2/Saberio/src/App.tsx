import './index.css';

const monitores = [
  { nombre: 'Laura Martínez', materia: 'Cálculo diferencial', horario: 'Lun y mié · 2:00 p. m.', iniciales: 'LM' },
  { nombre: 'Andrés Gómez', materia: 'Programación I', horario: 'Mar y jue · 10:00 a. m.', iniciales: 'AG' },
  { nombre: 'Sofía Rodríguez', materia: 'Estadística', horario: 'Vie · 9:00 a. m.', iniciales: 'SR' },
];

export default function App() {
  return <div className="pagina" id="inicio">
    <header className="header">
      <a className="marca" href="#inicio"><img src="./components/img/Loguito.png" /></a>
      <nav><a className="activo" href="#inicio">Inicio</a><a href="#monitorias">Monitorías</a><a href="#materias">Materias</a><a href="#soporte">Soporte</a></nav>
      <div className="usuario"><a href="#notificaciones" aria-label="Notificaciones">♧</a><a className="perfil" href="#perfil">Admin</a></div>
    </header>

    <main className="contenido">
      <section className="bienvenida">
        <div><small>PLATAFORMA ACADÉMICA</small><h1>Encuentra el monitor que necesitas</h1>
          <p>Conecta con estudiantes que pueden ayudarte a aprender y resolver tus dudas.</p>
          <a className="boton" href="#monitorias">Buscar monitorías</a></div>
        <div className="icono">📚</div>
      </section>

      <section className="resumen">
        <article><span>Monitorías disponibles</span><strong>24</strong></article>
        <article><span>Materias</span><strong>12</strong></article>
        <article><span>Solicitudes activas</span><strong>3</strong></article>
      </section>

      <section id="monitorias">
        <div className="titulo"><div><small>ENCUENTRA AYUDA</small><h2>Monitores destacados</h2></div>
          <input placeholder="Buscar por materia..." /></div>
        <div className="tarjetas">{monitores.map(m => <article className="tarjeta" key={m.nombre}>
          <div className="persona"><div className="avatar">{m.iniciales}</div><div><b>{m.nombre}</b><p>Monitor académico</p></div></div>
          <h3>{m.materia}</h3><p className="horario">◷ {m.horario}</p>
          <span className="modalidad">Presencial / Virtual</span>
          <button type="button">Ver perfil</button>
        </article>)}</div>
      </section>

      <section className="ayuda" id="materias"><div><h2>¿No encuentras tu materia?</h2><p>Explora las materias disponibles o solicita acompañamiento académico.</p></div><a href="#soporte">Más información</a></section>
    </main>

    <footer id="soporte"><span>© {new Date().getFullYear()} Saberio</span><div><a href="#soporte">Soporte</a><a href="#soporte">Preguntas frecuentes</a><a href="#soporte">Términos y condiciones</a></div></footer>
  </div>;
}
