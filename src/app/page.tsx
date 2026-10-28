import Image from "next/image";
import { experiments, facts, projects, site, ventures } from "@/content/site";
import { ArrowDown, ArrowUpRight, GitHub, Instagram, LinkedIn, Mail } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WorkIndex } from "@/components/WorkIndex";

const nav = [
  { href: "#about", label: "About" },
  { href: "#ventures", label: "Ventures" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const socials = [
    { href: site.links.github, label: "GitHub", Icon: GitHub },
    { href: site.links.linkedin, label: "LinkedIn", Icon: LinkedIn },
    { href: site.links.instagram, label: "Instagram", Icon: Instagram },
  ].filter((s) => s.href);

  return (
    <>
      <div className="intro" aria-hidden>
        <div className="intro-panel" />
        <p className="intro-word">
          <span>Siddharth</span>
        </p>
        <p className="intro-sub">
          <span>engineer · co-founder</span>
        </p>
      </div>

      <Reveal />

      <header className="site-header">
        <a href="#top" className="monogram" aria-label="Siddharth Sharma, back to top">
          SS
        </a>
        <nav aria-label="Sections">
          <ul className="nav-list">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-end">
          {site.links.resume && (
            <a href={site.links.resume} className="resume-link">
              Résumé
            </a>
          )}
          <ThemeToggle />
        </div>
      </header>

      <a href={`mailto:${site.email}`} className="side-email">
        {site.email}
      </a>

      <main id="top">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-name">
          <h1 id="hero-name" className="hero-name">
            <span className="mask">
              <span className="rise">siddharth</span>
            </span>
            <span className="mask">
              <span className="rise rise-2">
                <span className="name-dot">.</span>sharma
              </span>
            </span>
          </h1>

          <div className="hero-grid">
            <dl className="facts">
              {facts.map((f) => (
                <div className="fact" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <a href="#work" className="badge" aria-label="See the work">
              <svg viewBox="0 0 120 120" className="badge-ring" aria-hidden>
                <defs>
                  <path id="ring" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
                </defs>
                <text>
                  <textPath href="#ring" startOffset="0" textLength="286" lengthAdjust="spacing">
                    see the work · see the work ·
                  </textPath>
                </text>
              </svg>
              <ArrowDown className="icon badge-arrow" />
            </a>

            <div className="hero-aside">
              <p className="hero-tagline">
                <span className="tag-small">— {site.role.toLowerCase()}</span>
                <span className="tag-big">Builds that</span>
                <span className="tag-italic">hold up.</span>
              </p>
              <figure className="hero-photo">
                <Image
                  src="/images/siddharth-festive.jpg"
                  alt="Siddharth Sharma in an ivory kurta and brocade jacket"
                  width={1350}
                  height={1800}
                  sizes="(max-width: 760px) 44vw, 220px"
                  preload
                />
              </figure>
            </div>
          </div>


        </section>

        {/* About */}
        <section id="about" className="about section" aria-labelledby="about-title">
          <div className="about-copy">
            <h2 id="about-title" className="section-title" data-reveal>
              I build software that keeps up when the business grows.
            </h2>
            <div className="prose" data-reveal>
              <p>
                For over three years I&apos;ve been building scalable applications: interfaces people enjoy using,
                backends on Postgres and Supabase, and the admin tools that keep a business running day to day.
              </p>
              <p>
                As <strong>Technical Head at Shramic Crossgar Private Limited</strong> I own the technology end to
                end. As <strong>co-founder of Everything Fine</strong>, a food &amp; beverage brand, I build the
                product and the company around it. Both jobs teach the same lesson: ship, watch real people use it,
                fix what hurts.
              </p>
            </div>
          </div>
          <figure className="about-photo" data-reveal>
            <Image
              src="/images/siddharth-marathon.jpg"
              alt="Siddharth holding up a half-marathon finisher's medal"
              width={1350}
              height={1800}
              sizes="(max-width: 760px) 92vw, 38vw"
            />
            <figcaption>Half-marathon, finished. Same rule as code: keep showing up.</figcaption>
          </figure>
        </section>

        {/* Ventures */}
        <section id="ventures" className="ventures" aria-labelledby="ventures-title">
          <div className="section">
            <h2 id="ventures-title" className="section-title" data-reveal>
              Two companies, one habit: build it properly.
            </h2>
            <div className="venture-list">
              {ventures.map((v) => (
                <article className="venture" key={v.name} data-reveal>
                  <p className="venture-role">{v.role}</p>
                  <h3 className="venture-name">{v.name}</h3>
                  <div className="venture-body">
                    <p className="venture-summary">{v.summary}</p>
                    <p>{v.detail}</p>
                    {v.href && (
                      <a href={v.href} target="_blank" rel="noreferrer" className="text-link">
                        {v.linkLabel}
                        <ArrowUpRight className="icon" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="work section" aria-labelledby="work-title">
          <div className="work-head">
            <h2 id="work-title" className="section-title" data-reveal>
              Selected work
            </h2>
            <p className="work-note" data-reveal>
              Live sites I designed and built, from booking platforms to brand storefronts. Hover a row to peek.
            </p>
          </div>
          <WorkIndex projects={projects} />

          <div className="lab" data-reveal>
            <h3 className="lab-title">From the lab</h3>
            <p className="lab-note">AI and computer-vision experiments, all open source.</p>
            <ul className="lab-list">
              {experiments.map((x) => (
                <li key={x.slug}>
                  <a href={x.repo} target="_blank" rel="noreferrer" className="lab-item">
                    <span className="lab-name">{x.name}</span>
                    <span className="lab-summary">{x.summary}</span>
                    <span className="lab-stack">{x.stack.join(" · ")}</span>
                    <span className="lab-year">{x.year}</span>
                    <ArrowUpRight className="icon lab-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Off the keyboard */}
        <section className="offline section" aria-labelledby="offline-title">
          <div className="offline-copy">
            <h2 id="offline-title" className="section-title" data-reveal>
              Off the keyboard
            </h2>
            <p className="offline-note" data-reveal>
              Running and lifting. Most of my best fixes show up somewhere around the last set.
            </p>
          </div>
          <div className="offline-photos">
            <figure className="offline-photo tilt-l" data-reveal>
              <Image
                src="/images/siddharth-gym.jpg"
                alt="Siddharth in the gym, mirror selfie with headphones on"
                width={1350}
                height={1800}
                sizes="(max-width: 760px) 46vw, 26vw"
              />
            </figure>
            <figure className="offline-photo tilt-r" data-reveal>
              <Image
                src="/images/siddharth-mirror.jpg"
                alt="Siddharth in a striped shirt, mirror selfie"
                width={1350}
                height={1800}
                sizes="(max-width: 760px) 46vw, 26vw"
              />
            </figure>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="section">
            <h2 id="contact-title" className="contact-title" data-reveal>
              Got something worth <em>building?</em>
            </h2>
            <a href={`mailto:${site.email}`} className="contact-email" data-reveal>
              <Mail className="icon" />
              {site.email}
            </a>
            <ul className="socials" data-reveal>
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon className="icon" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <footer className="site-footer">
            <span>© 2026 {site.name}</span>
            <span>Built in Next.js</span>
            <a href="#top">Back to top</a>
          </footer>
        </section>
      </main>
    </>
  );
}
