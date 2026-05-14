const programs = [
  {
    icon: '📐',
    title: 'Mathematics',
    description:
      'From number sense to advanced calculus — we build strong foundations and exam-ready skills.',
    levels: ['Primary', 'Secondary', 'A-Level'],
  },
  {
    icon: '🔬',
    title: 'Sciences',
    description:
      'Biology, Chemistry, and Physics taught with clarity, experimentation, and exam techniques.',
    levels: ['Secondary', 'A-Level'],
  },
  {
    icon: '📖',
    title: 'English',
    description:
      'Reading comprehension, essay writing, and oral skills developed for every level.',
    levels: ['Primary', 'Secondary'],
  },
]

export default function Programs() {
  return (
    <section id="programs" className="max-w-4xl mx-auto px-8 py-20">

      <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
        What We Offer
      </p>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Programmes for Every Stage
      </h2>
      <p className="text-gray-500 font-light mb-12">
        Structured learning pathways tailored to each student's level and goals.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {programs.map(({ icon, title, description, levels }) => (
          <div
            key={title}
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-sm transition-all cursor-pointer"
          >
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl mb-5">
              {icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {levels.map((level) => (
                <span
                  key={level}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200"
                >
                  {level}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}