import {Header} from './components/Header';
import {Footer} from './components/Footer';

const NOMBRE_SITIO = 'Saberio';
const ANIO_ACTUAL = new Date().getFullYear(); // se calcula una vez, fuera del componente

/**
 * COMPONENTE RAÍZ: define el layout general (encabezado, página y pie)
 * y envía a cada componente sus datos por props.
 */
function App() {
  return (
    // Fragmento <> </>: agrupa varios elementos sin agregar un <div> extra
    <>
      <Header
        nombreSitio={NOMBRE_SITIO}
        version="2.0"
        enlaces={[
          { texto: 'Inicio', href: '#inicio' },
          { texto: 'Soportes', href: '#soportes' },
          { texto: 'Materias', href: '#Materias' },
          { texto: 'Usuarios', href: '#Usuarios' },
          { texto: 'Monitorías', href: '#Monitorias' }
        ]}
      />
    <Footer
        version="2.0"
        enlaces={[
          { texto: 'FAQ', href: '#faq' },
          { texto: 'Terminos y condiciones', href: '#terminos' },
        ]}
      />
    </>
  );
}

export default App;

