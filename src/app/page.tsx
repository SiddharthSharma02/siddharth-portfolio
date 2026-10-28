import Image from "next/image";
import { experiments, facts, featured, mochi, products, projects, site, ventures } from "@/content/site";
import { Cursor } from "@/components/Cursor";
import { IntroCount } from "@/components/IntroCount";
import { HeroVideo } from "@/components/HeroVideo";
import { ArrowDown, ArrowUpRight, GitHub, Instagram, LinkedIn, Mail, Phone, WhatsApp, XLogo } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WorkIndex } from "@/components/WorkIndex";


export default function Home() {
  const socials = [
    { href: site.links.github, label: "GitHub", Icon: GitHub },
    { href: site.links.linkedin, label: "LinkedIn", Icon: LinkedIn },
    { href: site.links.instagram, label: "Instagram", Icon: Instagram },
    { href: site.links.x, label: "X", Icon: XLogo },
    { href: site.links.resume, label: "Résumé", Icon: ArrowUpRight },
  ].filter((s) => s.href);

  return (
    <>
      <div className="intro" aria-hidden>
        <div className="intro-stack">
          <p className="intro-line intro-line-1">
            Engineer <IntroCount />
          </p>
          <p className="intro-line intro-line-2">Founder</p>
          <p className="intro-credit">Siddharth Sharma · made in Next.js</p>
        </div>
      </div>

      <Reveal />
      <Cursor />

      <header className="site-header">
        <a href="#top" className="monogram" aria-label="Siddharth Sharma, back to top">
          SS
        </a>
        <div className="header-handle">
          <a href={site.links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram @siduism">
            <Instagram className="icon" />
          </a>
          <a href={site.links.x} target="_blank" rel="noreferrer" aria-label="X @siduism">
            <XLogo className="icon" />
          </a>
          <span className="handle-text">{site.social}</span>
        </div>
        <div className="header-end">
          <a href="#contact" className="contact-pill">
            Contact me
          </a>
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
                <span className="tag-big">Builds that</span>
                <span className="tag-italic">hold up.</span>
              </p>
              <figure className="hero-photo">
                <HeroVideo />
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
                As <strong>Technical Head at Shramik Rojgar Private Limited</strong> I own the technology end to
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
                  <h3 className="venture-name">{v.name}</h3>
                  <p className="venture-role">{v.role}</p>
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

        {/* Products */}
        <section id="products" className="products section" aria-labelledby="products-title">
          <div className="products-head">
            <h2 id="products-title" className="section-title" data-reveal>
              On the shelf
            </h2>
            <p className="products-note" data-reveal>
              Two products I designed for Everything Fine, down to the pouch you hold. Both are sweetened with
              monk fruit, not sugar.
            </p>
          </div>
          <div className="product-grid">
            {products.map((p, i) => (
              <article className={`product product-${p.tone}`} key={p.name} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <div className="product-stage">
                  <Image
                    src={p.image}
                    alt={`${p.name} pouch, ${p.size}`}
                    width={p.width}
                    height={p.height}
                    sizes="(max-width: 760px) 70vw, 30vw"
                    className="product-pouch"
                  />
                </div>
                <div className="product-copy">
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-kind">{p.kind}</p>
                  <ul className="product-claims">
                    {p.claims.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Mochi */}
        <section id="mochi" className="mochi-band" aria-labelledby="mochi-title">
          <div className="section mochi">
            <div className="mochi-copy">
              <h2 id="mochi-title" className="section-title" data-reveal>
                Meet Mochi.
              </h2>
              <p className="mochi-note" data-reveal>
                I created Mochi, the pixel mascot of Everything Fine. Mochi lifts, runs, cartwheels and never says
                no to a sugar-free coffee. Mochi pops up around this page too, so keep an eye out.
              </p>
            </div>
            <ul className="mochi-poses">
              {mochi.map((m, i) => (
                <li key={m.label} className="mochi-pose" data-reveal style={{ "--i": i } as React.CSSProperties}>
                  <Image src={m.src} alt={m.alt} width={m.w} height={m.h} sizes="(max-width: 760px) 40vw, 18vw" />
                  <span className="mochi-label">{m.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="work section" aria-labelledby="work-title">
          <div className="work-head">
            <h2 id="work-title" className="section-title" data-reveal>
              Selected work
            </h2>
            <p className="work-note" data-reveal>
              Live sites I designed and built, from medical devices to mountain stays.
            </p>
          </div>
          <article className="feature" data-reveal>
            <div className="feature-copy">
              <h3 className="feature-name">
                <a href={featured.live} target="_blank" rel="noreferrer">
                  {featured.name}
                  <ArrowUpRight className="icon" />
                </a>
              </h3>
              <p className="feature-tagline">{featured.tagline}</p>
              <p className="feature-summary">{featured.summary}</p>
              <ul className="feature-points">
                {featured.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="feature-links">
                <a href={featured.live} target="_blank" rel="noreferrer" className="pill-link pill-solid">
                  Visit the site
                  <ArrowUpRight className="icon" />
                </a>
                <a href={featured.repo} target="_blank" rel="noreferrer" className="pill-link">
                  <GitHub className="icon" />
                  Source
                </a>
              </div>
            </div>
            <div className="deck" aria-label="UnivLabs pages">
              <p className="deck-sticker">
                biggest
                <br />
                build yet
              </p>
              {featured.shots.map((sh, k) => (
                <figure className="deck-shot" key={sh.src} style={{ "--k": k } as React.CSSProperties}>
                  <Image src={sh.src} alt={sh.alt} width={1200} height={750} sizes="(max-width: 760px) 92vw, 52vw" />
                </figure>
              ))}
            </div>
          </article>

          <h3 className="more-title" data-reveal>More client work</h3>
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
            <figure className="offline-photo" data-reveal>
              <Image
                src="/images/siddharth-gym.jpg"
                alt="Siddharth in the gym, mirror selfie with headphones on"
                width={1350}
                height={1800}
                sizes="(max-width: 760px) 46vw, 26vw"
              />
            </figure>
            <figure className="offline-photo offset" data-reveal>
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
          <div className="section contact-inner">
            <Image
              src="/mochi/coffee.png"
              alt="Mochi raising a cup of coffee"
              width={640}
              height={626}
              sizes="(max-width: 760px) 40vw, 22vw"
              className="contact-mochi"
            />
            <h2 id="contact-title" className="contact-title" data-reveal>
              Got something worth <em>building?</em>
            </h2>
            <a href={`mailto:${site.email}`} className="contact-email" data-reveal>
              <Mail className="icon" />
              {site.email}
            </a>
            <ul className="reach" data-reveal>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noreferrer" className="reach-link">
                  <WhatsApp className="icon" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={site.tel} className="reach-link">
                  <Phone className="icon" />
                  {site.phone}
                </a>
              </li>
            </ul>
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
            <span>Built in Next.js · Mochi says hi</span>
            <a href="#top">Back to top</a>
          </footer>
        </section>
      </main>
    </>
  );
}
