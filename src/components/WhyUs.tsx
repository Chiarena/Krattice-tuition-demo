const reasons = [
  {
    icon: '👩‍🏫',
    title: 'Experienced Educators',
    description:
      'All tutors are MOE-trained or degree-qualified with a minimum of 5 years teaching experience.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description:
      'Monthly reports and parent-teacher updates keep families in the loop every step of the way.',
  },
  {
    icon: '🧩',
    title: 'Small Class Sizes',
    description:
      'Capped at 8 students per class to ensure every child receives focused, personal attention.',
  },
  {
    icon: '🗓️',
    title: 'Flexible Scheduling',
    description:
      'Weekday and weekend slots available. Online and in-person options to suit any lifestyle.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-gray-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">

        <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
          Why BrightPath
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
          Learning That Actually Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="text-2xl mb-4">{icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}