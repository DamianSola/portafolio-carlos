import Image from "next/image";
import ThemeSwitcher from "./components/ThemeSwitcher";
import RendersGallery from "./components/RendersGallery";

export default function Home() {
  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <ThemeSwitcher />

      <main className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
        {/* Hero */}
        <header className="mb-20 border-b pb-16" style={{ borderColor: "var(--border)" }}>
          <h1
            className="font-serif text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--text-primary)",
            }}
          >
            CARLOS SOLÁ
            <br />
            <span style={{ color: "var(--accent)" }}>ZAMBRANO</span>
          </h1>
          <p
            className="mt-4 text-sm uppercase tracking-[0.2em]"
            style={{ color: "var(--text-muted)" }}
          >
            Arquitectura · Visualización · Diseño
          </p>
        </header>

        {/* Perfil */}
        <section className="mb-20">
          <h2
            className="font-serif text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--accent)" }}
          >
            Perfil
          </h2>
          <div className="section-divider" />
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            <div
              className="relative h-48 w-48 shrink-0 overflow-hidden rounded-lg md:h-56 md:w-56"
              style={{ borderColor: "var(--border)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
            >
              <Image
                src="/carlos-profile.png"
                alt="Carlos Solá Zambrano"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 224px"
                priority
              />
            </div>
            <p
              className="max-w-2xl text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Estudiante avanzado de arquitectura con sólido dominio de herramientas de dibujo,
              renders y visualizaciones arquitectónicas, así como el uso de inteligencias
              artificiales orientadas a la optimización de planos y presentaciones.
            </p>
          </div>
        </section>

        {/* Mis renders */}
        <section className="mb-20">
          <h2
            className="font-serif text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--accent)" }}
          >
            Mis renders
          </h2>
          <div className="section-divider" />
          <RendersGallery />
        </section>

        {/* Formación Académica */}
        <section className="mb-20">
          <h2
            className="font-serif text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--accent)" }}
          >
            Formación académica
          </h2>
          <div className="section-divider" />
          <ul className="space-y-6">
            <li>
              <div
                className="rounded-lg border p-6 transition-colors"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card-bg)" }}
              >
                <h3
                  className="font-serif text-lg font-medium"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--text-primary)" }}
                >
                  Facultad de Arquitectura y Urbanismo
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Universidad Católica de Salta · 4° año en curso
                </p>
              </div>
            </li>
            <li>
              <div
                className="rounded-lg border p-6 transition-colors"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card-bg)" }}
              >
                <h3
                  className="font-serif text-lg font-medium"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--text-primary)" }}
                >
                  Full Stack Web Developer
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Henry Bootcamp —{" "}
                  <a
                    href="https://www.soyhenry.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-colors hover:opacity-80"
                    style={{ color: "var(--accent)" }}
                  >
                    www.soyhenry.com
                  </a>
                  <br />
                  <span style={{ color: "var(--text-muted)" }}>
                    Tecnologías de Front-End y Back-End
                  </span>
                </p>
              </div>
            </li>
            <li>
              <div
                className="rounded-lg border p-6 transition-colors"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card-bg)" }}
              >
                <h3
                  className="font-serif text-lg font-medium"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--text-primary)" }}
                >
                  Educación secundaria
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Bachiller humanista — Ntra. Sra. de la Merced, Salta
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Habilidades técnicas */}
        <section className="mb-20">
          <h2
            className="font-serif text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--accent)" }}
          >
            Habilidades técnicas
          </h2>
          <div className="section-divider" />
          <div className="grid gap-6 md:grid-cols-2">
            <div
              className="rounded-lg border p-6 transition-colors"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--card-bg)" }}
            >
              <h3
                className="mb-3 font-serif text-sm font-medium uppercase tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                Dibujo y render
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                AutoCAD 2D y 3D, SketchUp, Lumion, D5 Render, Revit, Adobe Photoshop
              </p>
            </div>
            <div
              className="rounded-lg border p-6 transition-colors"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--card-bg)" }}
            >
              <h3
                className="mb-3 font-serif text-sm font-medium uppercase tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                Herramientas informáticas
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Word, Excel, PowerPoint
              </p>
            </div>
          </div>
        </section>

        {/* Habilidades blandas */}
        <section className="mb-20">
          <h2
            className="font-serif text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--accent)" }}
          >
            Habilidades blandas
          </h2>
          <div className="section-divider" />
          <div
            className="flex flex-wrap gap-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {[
              "Trabajo en equipo",
              "Comunicación clara y receptiva al feedback",
              "Organización y responsabilidad",
              "Adaptabilidad a nuevas metodologías y herramientas",
              "Resolución de problemas en contextos dinámicos",
              "Responsabilidad y compromiso profesional",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border px-4 py-2 text-sm"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card-bg)" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Idiomas */}
        <section className="mb-20">
          <h2
            className="font-serif text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--accent)" }}
          >
            Idiomas
          </h2>
          <div className="section-divider" />
          <p style={{ color: "var(--text-secondary)" }}>
            <span className="font-medium" style={{ color: "var(--text-primary)" }}>
              Inglés
            </span>{" "}
            — Nivel intermedio
          </p>
        </section>

        {/* Contacto */}
        <section className="mb-20">
          <h2
            className="font-serif text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--accent)" }}
          >
            Contacto
          </h2>
          <div className="section-divider" />
          <p
            className="mb-8 max-w-xl text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            ¿Interesado en colaborar o tener más información? Contactame por cualquiera de estos medios.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <a
              href="https://wa.me/543875679512"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--card-bg)",
                color: "var(--text-secondary)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:scale-110"
                style={{ backgroundColor: "var(--accent)", color: "var(--bg-primary)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <div>
                <span
                  className="block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  WhatsApp
                </span>
                <span className="font-medium" style={{ color: "var(--text-primary)" }}>
                  +54 387 567 9512
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-auto opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:carlos.sola.z.95@mail.com"
              className="group flex items-center gap-4 rounded-xl border px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--card-bg)",
                color: "var(--text-secondary)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:scale-110"
                style={{ backgroundColor: "var(--accent)", color: "var(--bg-primary)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div>
                <span
                  className="block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Mail
                </span>
                <span className="font-medium" style={{ color: "var(--text-primary)" }}>
                  carlos.sola.z.95@mail.com
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-auto opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="mt-24 border-t pt-12 text-center text-sm"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          Carlos Solá Zambrano · Portafolio de Arquitectura
        </footer>
      </main>
    </div>
  );
}
