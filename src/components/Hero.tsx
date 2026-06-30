export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-20 text-center">

      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 sm:mb-8">
        🎓 Trusted by 500+ Families
      </div>

      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4 sm:mb-6">
        Where Students{' '}
        <span className="text-blue-600 italic">Excel</span>{' '}
        Beyond Expectations
      </h1>

      <p className="text-base sm:text-lg text-gray-500 font-light max-w-lg mx-auto mb-8 sm:mb-10">
        Expert-led tuition programmes designed to build confidence, mastery,
        and results from Primary to A-Levels.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        
         <a href="#enquiry"
          className="bg-blue-600 text-white text-sm font-medium px-7 py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          Book a Free Trial
        </a>
        
         <a href="#programs"
          className="border border-gray-200 text-gray-800 text-sm font-medium px-7 py-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          View Programmes →
        </a>
      </div>

      <div className="grid grid-cols-2 sm:flex sm:gap-16 justify-center gap-6 mt-12 sm:mt-16">
        {[
          { number: '97%', label: 'Pass Rate' },
          { number: '12+', label: 'Years Experience' },
          { number: '500+', label: 'Students Enrolled' },
          { number: '30+', label: 'Certified Tutors' },
        ].map(({ number, label }) => (
          <div key={label} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">{number}</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

    </section>
  )
}