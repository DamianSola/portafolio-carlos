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
        <section>
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
