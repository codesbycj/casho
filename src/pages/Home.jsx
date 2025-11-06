export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-[#121212]">
      {/* Navbar - dark translucent like the original site */}
      <header className="w-full sticky top-0 z-40 bg-black/55 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/67767a979f253af570e6c60b_white-main-logo.svg" alt="Casho" className="h-7 w-auto" />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Services</a>
              <a href="#case" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Case Study</a>
              <a href="#blogs" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Blogs</a>
              <a href="#reviews" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Team</a>
              <a href="#contact" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Review</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[14px] font-semibold text-white hover:bg-white/20 transition-colors">Contact Us</a>
            </div>
            <button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white" aria-label="Open menu">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z" clipRule="evenodd"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero - full-bleed background image with left content and bottom-right stat cards */}
      <section className="relative w-full">
        <div className="relative h-[640px] sm:h-[720px] lg:h-[760px] w-full overflow-hidden">
          <img src="https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/6777ab34929de4901f8027f3_hero-image.jpg" alt="Hero bg" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-[720px]">
              <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] leading-[0.95] font-extrabold text-white">INNOVATING<br/>SOLUTIONS, DRIVING<br/>SUCCESS</h1>
              <p className="mt-6 text-[16px] leading-[26px] text-white/90 max-w-[540px]">We empower businesses with strategic insights, digital transformation, and operational excellence to unlock growth and measurable results.</p>
              <div className="mt-8 flex gap-3">
                <a href="#about" className="inline-flex items-center justify-center rounded-full bg-[#0b0b0b] px-5 py-3 text-[14px] font-semibold text-white hover:opacity-90 transition-opacity">Read More</a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-[14px] font-semibold text-white hover:bg-white/20 transition-colors">Our Services</a>
              </div>
            </div>
          </div>

          {/* <div className="absolute left-6 bottom-6 md:left-12 md:bottom-12 text-white/80 max-w-[420px]">
            <div className="text-[14px] font-medium">Helping businesses thrive with strategy & digital excellence</div>
          </div> */}

          <div className="absolute right-6 bottom-6 md:right-12 md:bottom-12 flex flex-col sm:flex-row gap-4 items-end">
            <div className="w-[220px] sm:w-[260px] rounded-2xl bg-white p-5 shadow-lg">
              <div className="text-[28px] font-extrabold text-[#121212]">500+</div>
              <div className="pt-1 text-[13px] font-medium text-[#5c5c5c]">Clients successfully partnered with businesses worldwide.</div>
            </div>
            <div className="w-[220px] sm:w-[260px] rounded-2xl bg-[#d7ddcb] p-5 shadow-lg">
              <div className="text-[28px] font-extrabold text-[#121212]">100+</div>
              <div className="pt-1 text-[13px] font-medium text-[#5c5c5c]">Industries: Expertise across diverse sectors.</div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* About */}
        <section id="about" className="w-full bg-white">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="inline-flex items-center rounded-full border border-[#e5e5e5] bg-white px-3 py-1 text-[12px] font-medium text-[#5c5c5c] w-fit">About Us</div>
                <h2 className="pt-4 text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.3px] font-extrabold text-[#121212]">Unlock success with professional business solutions</h2>
                <p className="pt-4 text-[16px] leading-[26px] text-[#5c5c5c] max-w-[560px]">At Casho, we are committed to delivering exceptional services that help our clients thrive in a dynamic and ever-changing world.</p>
                <div className="pt-6 flex flex-col gap-4">
                  <div className="w-full">
                    <div className="flex items-center justify-between text-[14px] font-semibold text-[#121212]"><span>Business Analysis</span><span>80%</span></div>
                    <div className="mt-2 h-2 w-full rounded-full bg-[#e9ecef]">
                      <div className="h-2 rounded-full bg-[#121212]" style={{ width: "80%" }} />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between text-[14px] font-semibold text-[#121212]"><span>Achievement</span><span>90%</span></div>
                    <div className="mt-2 h-2 w-full rounded-full bg-[#e9ecef]">
                      <div className="h-2 rounded-full bg-[#121212]" style={{ width: "90%" }} />
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <a href="#services" className="inline-flex items-center justify-center rounded-full bg-[#121212] px-6 py-3 text-[14px] font-semibold text-white hover:opacity-90 transition-opacity">About Us</a>
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#e5e5e5] bg-[#d7ddcb]">
                  <img src="https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/67809e50c855c90c2961641f_about-image.jpg" alt="About" className="absolute inset-0 h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="w-full bg-[#f1f6f6]">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center rounded-full border border-[#cdd8d8] bg-white px-3 py-1 text-[12px] font-medium text-[#5c5c5c] w-fit">What We Do</div>
                <h2 className="pt-3 text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.3px] font-extrabold text-[#121212]">Our Services</h2>
                <p className="pt-2 text-[16px] leading-[26px] text-[#5c5c5c] max-w-[650px]">Our range of services is crafted to deliver strategic insights and foster sustainable growth for businesses across various industries.</p>
              </div>
              <div>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-[#121212] bg-white px-6 py-3 text-[14px] font-semibold text-[#121212] hover:bg-[#121212] hover:text-white transition-colors">View All Services</a>
              </div>
            </div>
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Business Strategy Development", icon: "https://cdn.prod.website-files.com/677b76832f1f0b7cc69655d9/677e673e6a9e02e31e9bea6d_service-icon-01.svg", desc: "Achieve clarity and direction with our custom-designed strategies. We analyze your goals, market trends, and competition to create a roadmap for sustained growth." },
                { title: "Operational Excellence", icon: "https://cdn.prod.website-files.com/677b76832f1f0b7cc69655d9/677e67442e54b5d00615d7d9_service-icon-02.svg", desc: "Streamline your processes, improve efficiency, and reduce costs. Our team helps you implement systems that drive seamless operations and measurable results." },
                { title: "Financial Advisory", icon: "https://cdn.prod.website-files.com/677b76832f1f0b7cc69655d9/677e67898ffbaa5852b0796a_service-icon-03.svg", desc: "Optimize your financial performance with expert insights and planning. From budgeting to investment strategies, we ensure your business remains financially healthy." },
                { title: "Market Expansion", icon: "https://cdn.prod.website-files.com/677b76832f1f0b7cc69655d9/677e67936e2560173ca4db83_service-icon-04.svg", desc: "Unlock new markets and opportunities with our in-depth market research and expansion strategies. We help you scale while minimizing risks." },
                { title: "Digital Transformation", icon: "https://cdn.prod.website-files.com/677b76832f1f0b7cc69655d9/677e67995713dc0cccd7be5a_service-icon-05.svg", desc: "Modernize your business with cutting-edge digital solutions. We help you integrate technology to stay competitive and enhance customer experiences." },
              ].map((item, i) => (
                <div key={i} className="flex h-full flex-col rounded-2xl border border-[#d9e6e6] bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f6f6]">
                    <img src={item.icon} alt="Service icon" className="h-6 w-6" />
                  </div>
                  <h3 className="pt-5 text-[20px] font-extrabold leading-[1.2] text-[#121212]">{item.title}</h3>
                  <p className="pt-2 text-[14px] leading-[22px] text-[#5c5c5c]">{item.desc}</p>
                  <div className="pt-4 mt-auto">
                    <button className="inline-flex items-center justify-center rounded-full border border-[#121212] bg-white px-5 py-2 text-[13px] font-semibold text-[#121212] hover:bg-[#121212] hover:text-white transition-colors">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section id="case" className="w-full bg-white">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#e5e5e5] bg-[#f1f6f6]">
                  <img src="https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/6780b29e367735661873f743_challange-image.jpg" alt="Case study" className="absolute inset-0 h-full w-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="inline-flex items-center rounded-full border border-[#e5e5e5] bg-white px-3 py-1 text-[12px] font-medium text-[#5c5c5c] w-fit">Case Study</div>
                <h2 className="pt-4 text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.3px] font-extrabold text-[#121212]">Transforming Challenges into Opportunities</h2>
                <p className="pt-3 text-[16px] leading-[26px] text-[#5c5c5c] max-w-[560px]">Our case studies showcase the real-world impact of our expertise. From startups to global enterprises, we’ve partnered with businesses to overcome challenges and achieve extraordinary results.</p>
                <ul className="pt-5 space-y-3">
                  {[
                    "100+ success stories across industries",
                    "25% average cost savings achieved for clients",
                    "98% client satisfaction rate",
                  ].map((txt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <img src="https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677fb36770cfa52b6355da60_tick-icon.svg" alt="Tick" className="mt-[2px] h-5 w-5" />
                      <span className="text-[14px] leading-[22px] text-[#121212]">{txt}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <a href="#" className="inline-flex items-center justify-center rounded-full border border-[#121212] bg-white px-6 py-3 text-[14px] font-semibold text-[#121212] hover:bg-[#121212] hover:text-white transition-colors">Explore All Case Studies</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="w-full bg-white">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center rounded-full border border-[#e5e5e5] bg-white px-3 py-1 text-[12px] font-medium text-[#5c5c5c] w-fit">Client</div>
                <h2 className="pt-3 text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.3px] font-extrabold text-[#121212]">Those Who Trusted Us</h2>
              </div>
              <div>
                <a href="#" className="inline-flex items-center justify-center rounded-full border border-[#121212] bg-white px-6 py-3 text-[14px] font-semibold text-[#121212] hover:bg-[#121212] hover:text-white transition-colors">View All</a>
              </div>
            </div>
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                "https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677fba84f2ebea3ff2e008c9_logo-01.svg",
                "https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677fba84cf140f70b2cc3e62_logo-02.svg",
                "https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677fba84f8f858a838856d18_logo-03.svg",
                "https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677fba84416bd14478853d73_logo-04.svg",
                "https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677fba845883d61a620fed5e_logo-05.svg",
              ].map((src, i) => (
                <div key={i} className="flex items-center justify-center rounded-xl border border-[#e5e5e5] bg-white p-6"><img src={src} alt="Client logo" className="h-6 w-auto"/></div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="w-full bg-[#f8f8f8]">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center rounded-full border border-[#e5e5e5] bg-white px-3 py-1 text-[12px] font-medium text-[#5c5c5c] w-fit">Review</div>
                <h2 className="pt-3 text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.3px] font-extrabold text-[#121212]">What our Customer Say ?</h2>
                <p className="pt-2 text-[16px] leading-[26px] text-[#5c5c5c]">More than 99% customer satisfaction is our success.</p>
                <div className="pt-6 relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#e5e5e5] bg-[#e9ecef]">
                  <img src="https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677df7303175761c2bfd1181_review-img.jpg" alt="Review collage" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      text: "The expertise and dedication of this team have been game-changers for our business. Outstanding service! Their innovative approach helped us achieve measurable success in record time.",
                      name: "Courtney Henry",
                      role: "CEO, Alex Co.",
                      img: "https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677dfb954282e685688e8543_review-main01.jpg",
                    },
                    {
                      text: "Truly professional and insightful. The strategies provided were practical and results-driven. We noticed improvements within weeks.",
                      name: "Wade Warren",
                      role: "COO, Spring Studio",
                      img: "https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677dfb950d834993931f0e39_review-main02.jpg",
                    },
                    {
                      text: "Their team helped streamline our operations and cut costs significantly while maintaining quality. Highly recommended!",
                      name: "Esther Howard",
                      role: "Founder, New Era",
                      img: "https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677dfb956c8038d85b7a0293_review-main03.jpg",
                    },
                    {
                      text: "From strategy to execution, they delivered beyond expectations. Communication was clear and timely throughout.",
                      name: "Floyd Miles",
                      role: "VP, Northwind",
                      img: "https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677dfb95eeb47b638679baa6_review-main04.jpg",
                    },
                  ].map((r, i) => (
                    <div key={i} className="flex h-full flex-col rounded-2xl border border-[#e5e5e5] bg-white p-6">
                      <div className="flex items-center gap-2">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <img key={s} src="https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677dfaf6469617f3d4d1fc14_star-icon.svg" alt="Star" className="h-4 w-4" />
                        ))}
                      </div>
                      <p className="pt-3 text-[14px] leading-[22px] text-[#121212]">{r.text}</p>
                      <div className="pt-5 flex items-center gap-3 mt-auto">
                        <img src={r.img} alt={r.name} className="h-10 w-10 rounded-full object-cover" />
                        <div className="flex flex-col">
                          <span className="text-[14px] font-semibold text-[#121212]">{r.name}</span>
                          <span className="text-[12px] text-[#5c5c5c]">{r.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blogs" className="w-full bg-white">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center rounded-full border border-[#e5e5e5] bg-white px-3 py-1 text-[12px] font-medium text-[#5c5c5c] w-fit">Blog</div>
                <h2 className="pt-3 text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.3px] font-extrabold text-[#121212]">Insights & Resources</h2>
              </div>
              <div>
                <a href="#" className="inline-flex items-center justify-center rounded-full border border-[#121212] bg-white px-6 py-3 text-[14px] font-semibold text-[#121212] hover:bg-[#121212] hover:text-white transition-colors">View All</a>
              </div>
            </div>
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Effective Change Management: Guiding Your Team Through Transition",
                  date: "January 10, 2025",
                  category: "Organizational Development",
                  img: "https://cdn.prod.website-files.com/677b76832f1f0b7cc69655d9/677cd14d52a609f0775a9b3b_blog-thumb-01.jpg",
                },
                {
                  title: "Financial Health: Key Indicators Every Business Should Monitor",
                  date: "January 10, 2025",
                  category: "Financial Management",
                  img: "https://cdn.prod.website-files.com/677b76832f1f0b7cc69655d9/677cd14603fcb2f27e40b653_blog-thumb-02.jpg",
                },
                {
                  title: "Tech-Driven Growth: How Digital Transformation Can Revolutionize Your Business",
                  date: "January 9, 2025",
                  category: "Technology & Innovation",
                  img: "https://cdn.prod.website-files.com/677b76832f1f0b7cc69655d9/677cd11476b268356ece91d1_blog-thumb-03.jpg",
                },
              ].map((b, i) => (
                <article key={i} className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white">
                  <div className="relative aspect-[16/10] w-full bg-[#e9ecef]">
                    <img src={b.img} alt="Blog" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium text-[#121212]">{b.date}</div>
                  </div>
                  <div className="p-6">
                    <div className="text-[12px] font-semibold text-[#5c5c5c]">{b.category}</div>
                    <h3 className="pt-2 text-[18px] font-extrabold leading-[1.25] text-[#121212]">{b.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="w-full bg-[#d7ddcb]">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center rounded-full border border-[#bfc7b3] bg-white px-3 py-1 text-[12px] font-medium text-[#5c5c5c] w-fit">CTA</div>
                <h2 className="pt-4 text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.3px] font-extrabold text-[#121212]">Let’s Build Something Great Together</h2>
                <p className="pt-2 text-[16px] leading-[26px] text-[#5c5c5c] max-w-[560px]">From strategy to execution, our team is ready to support your goals and accelerate your growth journey.</p>
                <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#121212] px-6 py-3 text-[14px] font-semibold text-white hover:opacity-90 transition-opacity">Get Started</a>
                  <a href="#services" className="inline-flex items-center justify-center rounded-full border border-[#121212] bg-white px-6 py-3 text-[14px] font-semibold text-[#121212] hover:bg-[#121212] hover:text-white transition-colors">Our Services</a>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#bfc7b3] bg-[#e9ecef]">
                  <img src="https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677e0a7b6776d67bb5ca3696_cta-image.jpg" alt="Team work" className="absolute inset-0 h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-[#121212] text-white">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">
              <div className="space-y-4">
                <img src="https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/67767a979f253af570e6c60b_white-main-logo.svg" alt="Casho" className="h-7 w-auto" />
                <p className="text-[14px] leading-[22px] text-[#d1d1d1] max-w-[320px]">Subscribe to our newsletter to get the latest insights, strategies, and updates directly to your inbox.</p>
                <form className="mt-4 flex items-stretch gap-3" role="form" aria-label="Subscribe to newsletter" onSubmit={(e)=>{e.preventDefault(); alert('Thanks for subscribing!');}}>
                  <label className="sr-only">Email</label>
                  <input aria-label="Email address" type="email" required placeholder="Enter your email" className="w-full rounded-full border border-white/12 bg-white/8 px-4 py-3 text-[14px] text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
                  <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#d7ddcb] to-[#bcd9a8] px-6 py-3 text-[14px] font-semibold text-[#0b0b0b] shadow-md hover:opacity-95 transition-all focus:outline-none focus:ring-4 focus:ring-[#d7ddcb]/40">Subscribe</button>
                </form>
              </div>
              <div className="grid grid-cols-2 gap-10 lg:col-span-3">
                <div className="space-y-3">
                  <h4 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/80">Pages</h4>
                  <a href="#about" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">About Us</a>
                  <a href="#services" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">Services</a>
                  <a href="#case" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">Case Study</a>
                  <a href="#reviews" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">Reviews</a>
                  <a href="#blogs" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">Blogs</a>
                  <a href="#contact" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">Contact</a>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/80">Resources</h4>
                  <a href="#" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">Changelog</a>
                  <a href="#" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">Licensing</a>
                  <a href="#" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">Terms & Conditions</a>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/80">Contact</h4>
                  <div className="text-[14px] text-[#d1d1d1]">123 Business Street, Suite 456, New York, NY 10001, USA</div>
                  <a href="tel:+14065550120" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">+1 (406) 555-0120</a>
                  <a href="mailto:hello@example.com" className="block text-[14px] text-[#d1d1d1] hover:text-white transition-colors">hello@example.com</a>
                  <div className="flex items-center gap-3 pt-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.2 10.44 22v-6.99H7.9v-2.95h2.54V9.86c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.95h-2.34V22C18.34 21.2 22 17.08 22 12.06z"/></svg></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 100 10 5 5 0 000-10z"/></svg></a>
                    <a href="https://t.me/" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9.2 16.8l-.4 4.2c.6 0 .9-.3 1.2-.6l2.9-2.8 6 4.4c1.1.6 1.8.3 2.1-1.1l3.8-17.8h0c.3-1.4-.5-2-1.6-1.6L1.3 9.8c-1.4.6-1.3 1.4-.2 1.8l4.7 1.5 10.9-6.9c.5-.3 1-.1.6.2l-8.7 7.4z"/></svg></a>
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3.5A10.5 10.5 0 005.6 18.7L3 21l2.5-.6A10.5 10.5 0 1020 3.5zM7.1 18.1l.2.1 1.2.4c1.5.5 3.2.2 4.5-.6 1.3-.8 2.4-2 3-3.4.6-1.5.7-3.2.2-4.7a8 8 0 00-11.6-3.7A8 8 0 007.1 18.1z"/></svg></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-[13px] text-white/70">© 2025 Casho. All rights reserved.</div>

            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
