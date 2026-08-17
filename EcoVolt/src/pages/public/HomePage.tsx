

function HomePage() {
    return (
        <main className="min-h-screen bg-[#F4FFF8] text-[#0B3D2E]">
            <section className="mx-auto max-w-6xl px-6 py-20 text-center">
                    <h1 className="mb-4 text-5xl font-extrabold text-green-600 md:text-7xl">EcoVolt</h1>
                    <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
                        Transformando açoes sustentáveis em real.
                    </h2>
                    <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-600">
                        Uma solução gamificada integrada à SoulUp para incentivar usuários a
                        praticarem ações sustentáveis, acumularem pontos, subirem em rankings
                        e concorrerem a recompensas reais.
                    </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/login"
            className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Entrar na Plataforma
          </a>

          <a
            href="/sobre"
            className="rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50"
          >
            Conhecer o Projeto
          </a>
        </div>
      </section>
    </main>
  )
}

export default HomePage