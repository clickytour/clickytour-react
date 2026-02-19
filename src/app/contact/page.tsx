export const dynamic = 'force-static';

import { PageShell, SectionTitle } from '@/components/site';

export default function ContactPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          </div>
          <p className="text-cyan-100 text-lg">Start the conversation to established good relationship and business.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Location', value: 'Jln Cempaka Wangi No 22, Jakarta - Indonesia', icon: '📍' },
            { title: 'Contact Us', value: '+(62)21 2002-2012\n+(62)21 2002-2014 (Fax)', icon: '📞' },
            { title: 'Email Us', value: 'hello@yourdomain.tld\nsupport@yourdomain.tld', icon: '✉️' },
            { title: 'Ticket Support', value: "If you have an account, don't hesitate to send us a ticket", icon: '🎫' },
          ].map((item) => (
            <article key={item.title} className="card p-5">
              <p className="text-2xl">{item.icon}</p>
              <h3 className="font-bold mt-2">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-2 whitespace-pre-line">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
          <div className="card p-6 md:p-8">
            <SectionTitle title="Send us message" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <form className="grid md:grid-cols-2 gap-4">
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Name" />
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Company" />
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Phone" />
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Email" type="email" />
              <input className="rounded-xl border border-slate-200 px-4 py-3 md:col-span-2" placeholder="Subject" />
              <textarea className="rounded-xl border border-slate-200 px-4 py-3 md:col-span-2" placeholder="Message" rows={5} />
              <button className="btn-primary md:col-span-2">Submit</button>
            </form>
          </div>

          <div className="card p-6 md:p-8">
            <h3 className="text-2xl font-extrabold text-slate-900">Follow our social media</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Facebook', 'Instagram', 'Dribbble', 'Youtube'].map((item) => (
                <span key={item} className="pill">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card p-0 overflow-hidden">
            <div className="bg-[#0F2B46] text-cyan-50 px-5 py-3 text-sm font-semibold">Map Placeholder</div>
            <div className="h-[320px] grid place-items-center bg-gradient-to-br from-slate-100 to-cyan-50 text-slate-500 text-center px-6">
              London Eye, London, United Kingdom (placeholder)
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
