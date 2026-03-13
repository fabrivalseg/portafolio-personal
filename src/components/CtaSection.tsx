import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CalendarDays, MessageCircle } from 'lucide-react';
import { useRef } from 'react';

const CtaSection = () => {
  const meetingUrl = 'https://calendly.com/fabrizioval-seg/30min';
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 90%', 'end 10%'],
  });

  const desktopPageY = useTransform(scrollYProgress, [0, 1], ['0%', '-46%']);
  const mobilePageY = useTransform(scrollYProgress, [0, 1], ['0%', '-72%']);
  const phoneY = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const compactDesktopY = useTransform(scrollYProgress, [0, 1], ['0%', '-16%']);
  const compactMobileY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const compactPhoneY = useTransform(scrollYProgress, [0, 1], [3, -5]);

  return (
    <section ref={sectionRef} className="px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-8 md:p-12 border border-white/10 bg-gradient-to-r from-zinc-900 to-zinc-800"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-teal-300 mb-4">CTA Principal</p>
              <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight max-w-4xl">
                Si tu web no te trae clientes, es momento de construir una que si venda.
              </h2>
              <p className="text-zinc-300 mt-5 max-w-3xl text-lg">
                Te ayudo a transformar tu presencia digital en una herramienta comercial. Sin vueltas,
                sin tecnicismos innecesarios y con foco total en resultados.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5493517169604?text=Hola%20quiero%20una%20web%20que%20me%20genere%20clientes"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold hover:bg-teal-300 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quiero cotizar por WhatsApp
                </a>
                <a
                  href={meetingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white hover:border-teal-300 transition-colors"
                >
                  <CalendarDays className="w-5 h-5" />
                  Agendar reunion estrategica
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/25 text-zinc-200 hover:text-white hover:border-white transition-colors"
                >
                  Completar formulario
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="hidden lg:block relative h-[260px] md:h-[300px] max-w-[360px] mx-auto lg:mx-0 lg:justify-self-end">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[290px] md:w-[330px]">
                <div className="rounded-xl border border-white/15 bg-zinc-950 overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
                  <div className="h-5 bg-zinc-900 border-b border-white/10" />
                  <div className="h-[150px] md:h-[170px] bg-zinc-900 overflow-hidden relative">
                    <motion.div style={{ y: desktopPageY }} className="absolute inset-x-0 top-0">
                      <div className="h-[320px] px-3 py-3 bg-gradient-to-b from-zinc-900 to-zinc-950">
                        <div className="h-1.5 w-16 rounded-full bg-teal-300/80 mb-2" />
                        <p className="text-[10px] text-teal-200 uppercase tracking-[0.16em] mb-1">Hero</p>
                        <div className="rounded-lg border border-teal-300/20 bg-gradient-to-r from-teal-300/15 to-cyan-300/10 p-2 mb-4">
                          <p className="text-[11px] text-white font-medium leading-tight">Webs profesionales que convierten visitas en clientes</p>
                        </div>

                        <p className="text-[10px] text-cyan-200 uppercase tracking-[0.16em] mb-1">Servicios</p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="h-14 rounded-lg bg-white/5 border border-white/10 p-2">
                            <p className="text-[9px] text-zinc-200">Web institucional</p>
                          </div>
                          <div className="h-14 rounded-lg bg-white/5 border border-white/10 p-2">
                            <p className="text-[9px] text-zinc-200">E-commerce</p>
                          </div>
                        </div>

                        <p className="text-[10px] text-blue-200 uppercase tracking-[0.16em] mb-1">Contacto</p>
                        <div className="h-16 rounded-lg bg-white/5 border border-white/10 mb-3 p-2 flex flex-col justify-center gap-1">
                          <div className="h-2 w-24 rounded bg-white/20" />
                          <div className="h-2 w-20 rounded bg-white/20" />
                        </div>
                        <div className="h-8 w-36 rounded-full bg-white text-zinc-900 text-[10px] font-semibold flex items-center justify-center">
                          Cotizar proyecto
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="mx-auto mt-1 h-3 w-[86%] rounded-full bg-zinc-700/80 border border-white/10" />
              </div>

              <motion.div style={{ y: phoneY }} className="absolute right-0 top-12 w-[96px] md:w-[104px]">
                <div className="rounded-[22px] border border-white/20 bg-zinc-900/95 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                  <div className="rounded-[18px] border border-white/10 bg-zinc-950 h-[168px] md:h-[182px] overflow-hidden relative">
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full bg-zinc-700" />
                    <motion.div style={{ y: mobilePageY }} className="absolute inset-x-0 top-4 px-2 pb-2">
                      <div className="h-[520px] rounded-lg bg-gradient-to-b from-zinc-900 to-zinc-950 p-2">
                        <div className="h-1 w-10 rounded-full bg-teal-300/80 mb-2" />
                        <div className="rounded-lg border border-teal-300/25 bg-gradient-to-r from-teal-300/15 to-cyan-300/10 p-1.5 mb-2">
                          <p className="text-[8px] text-white font-medium leading-tight">Cotiza tu web en minutos</p>
                          <p className="text-[7px] text-zinc-300 mt-0.5">Respuesta por WhatsApp</p>
                        </div>
                        <div className="space-y-1.5 mb-2">
                          <div className="h-4 rounded-md border border-white/10 bg-white/5 flex items-center px-1.5 gap-1">
                            <span className="w-1 h-1 rounded-full bg-teal-300" />
                            <span className="h-1.5 w-10 rounded bg-white/35" />
                          </div>
                          <div className="h-4 rounded-md border border-white/10 bg-white/5 flex items-center px-1.5 gap-1">
                            <span className="w-1 h-1 rounded-full bg-cyan-300" />
                            <span className="h-1.5 w-8 rounded bg-white/35" />
                          </div>
                          <div className="h-4 rounded-md border border-white/10 bg-white/5 flex items-center px-1.5 gap-1">
                            <span className="w-1 h-1 rounded-full bg-blue-300" />
                            <span className="h-1.5 w-9 rounded bg-white/35" />
                          </div>
                        </div>
                        <div className="h-7 rounded-full border border-teal-300/35 bg-teal-300/15 text-teal-100 text-[8px] font-medium flex items-center justify-center gap-1 px-2">
                          <span className="w-1 h-1 rounded-full bg-teal-200" />
                          <span>WhatsApp</span>
                        </div>
                        <p className="text-[7px] text-zinc-400 text-center mt-1">
                          Hero · Servicios · Contacto
                        </p>

                        <div className="mt-3 space-y-2">
                          <div className="h-10 rounded-md border border-white/10 bg-white/5 p-1.5">
                            <div className="h-1.5 w-8 rounded bg-white/30 mb-1" />
                            <div className="h-1.5 w-12 rounded bg-white/20" />
                          </div>
                          <div className="h-10 rounded-md border border-white/10 bg-white/5 p-1.5">
                            <div className="h-1.5 w-9 rounded bg-white/30 mb-1" />
                            <div className="h-1.5 w-10 rounded bg-white/20" />
                          </div>
                          <div className="h-10 rounded-md border border-white/10 bg-white/5 p-1.5">
                            <div className="h-1.5 w-7 rounded bg-white/30 mb-1" />
                            <div className="h-1.5 w-11 rounded bg-white/20" />
                          </div>
                          <div className="h-10 rounded-md border border-white/10 bg-white/5 p-1.5">
                            <div className="h-1.5 w-8 rounded bg-white/30 mb-1" />
                            <div className="h-1.5 w-9 rounded bg-white/20" />
                          </div>
                          <div className="h-10 rounded-md border border-white/10 bg-white/5 p-1.5">
                            <div className="h-1.5 w-10 rounded bg-white/30 mb-1" />
                            <div className="h-1.5 w-12 rounded bg-white/20" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:hidden mt-6">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400 text-center mb-3">
              Vista previa compacta
            </p>
            <div className="relative h-[220px] max-w-[300px] mx-auto">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[250px]">
                <div className="rounded-lg border border-white/15 bg-zinc-950 overflow-hidden shadow-[0_10px_28px_rgba(0,0,0,0.4)]">
                  <div className="h-4 bg-zinc-900 border-b border-white/10" />
                  <div className="h-[118px] bg-zinc-900 overflow-hidden relative">
                    <motion.div style={{ y: compactDesktopY }} className="absolute inset-x-0 top-0">
                      <div className="h-[250px] px-2.5 py-2 bg-gradient-to-b from-zinc-900 to-zinc-950">
                        <div className="h-1 w-10 rounded-full bg-teal-300/80 mb-2" />
                        <div className="rounded border border-teal-300/20 bg-teal-300/10 p-1 mb-2">
                          <p className="text-[8px] text-white leading-tight">Web profesional orientada a conversion</p>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 mb-2">
                          <div className="h-9 rounded border border-white/10 bg-white/5 p-1">
                            <div className="h-1.5 w-8 rounded bg-white/35" />
                          </div>
                          <div className="h-9 rounded border border-white/10 bg-white/5 p-1">
                            <div className="h-1.5 w-7 rounded bg-white/35" />
                          </div>
                        </div>
                        <div className="h-6 w-24 rounded-full bg-white text-zinc-900 text-[8px] font-semibold flex items-center justify-center">
                          Cotizar
                        </div>
                        <div className="mt-2 space-y-1.5">
                          <div className="h-3 rounded bg-white/10" />
                          <div className="h-3 rounded bg-white/10" />
                          <div className="h-3 rounded bg-white/10" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="mx-auto mt-1 h-2.5 w-[86%] rounded-full bg-zinc-700/80 border border-white/10" />
              </div>

              <motion.div style={{ y: compactPhoneY }} className="absolute right-0 top-8 w-[78px]">
                <div className="rounded-[18px] border border-white/20 bg-zinc-900/95 p-1 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                  <div className="rounded-[14px] border border-white/10 bg-zinc-950 h-[136px] overflow-hidden relative">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 h-1 w-6 rounded-full bg-zinc-700" />
                    <motion.div style={{ y: compactMobileY }} className="absolute inset-x-0 top-3 px-1.5 pb-1.5">
                      <div className="h-[260px] rounded bg-gradient-to-b from-zinc-900 to-zinc-950 p-1.5">
                        <div className="h-1 w-8 rounded-full bg-teal-300/80 mb-1.5" />
                        <div className="h-5 rounded border border-teal-300/25 bg-teal-300/15 mb-1.5 p-1">
                          <div className="h-1.5 w-7 rounded bg-white/45 mb-0.5" />
                          <div className="h-1 w-5 rounded bg-white/30" />
                        </div>
                        <div className="h-3 rounded bg-white/10 mb-1" />
                        <div className="h-3 rounded bg-white/10 mb-1.5" />
                        <div className="h-5 rounded-full border border-white/20 bg-white text-zinc-900 text-[8px] font-semibold flex items-center justify-center">
                          WhatsApp
                        </div>
                        <div className="mt-1.5 h-3 rounded bg-white/10" />
                        <div className="mt-1 h-3 rounded bg-white/10" />
                        <div className="mt-1 h-3 rounded bg-white/10" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
