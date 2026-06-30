import { useState } from 'react'

const levels = ['Primary 1–3', 'Primary 4–6', 'Secondary 1–2', 'Secondary 3–4', 'JC / A-Level']
const subjects = ['Mathematics', 'English', 'Science', 'Physics', 'Chemistry', 'Biology']

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="enquiry" className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-20">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* Left side */}
        <div>
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Start Your Child's Journey Today
          </h2>
          <p className="text-gray-500 font-light text-sm mb-8">
            Fill in the form and our team will get back to you within one
            working day to arrange a free trial lesson.
          </p>

          <ul className="space-y-3">
            {[
              'Free trial lesson, no commitment',
              'Personalised learning assessment',
              'Transparent fees, no hidden costs',
              'Dedicated parent communication',
            ].map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side — form */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-7">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✅
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Enquiry Received!</h3>
              <p className="text-sm text-gray-500">
                Our team will reach out within one working day to schedule your
                free trial lesson.
              </p>
            </div>
          ) : (
            <div className="space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Parent's Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Lim"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+65 9123 4567"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane@email.com"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Child's Level
                  </label>
                  <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-400">
                    <option value="">Select level</option>
                    {levels.map((l) => <option key={l}>{l}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-400">
                    <option value="">Select subject</option>
                    {subjects.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Message (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Any specific goals or concerns..."
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-400 resize-none"
                />
              </div>

              <button
                onClick={() => setSubmitted(true)}
                className="w-full bg-blue-600 text-white text-sm font-medium py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Send Enquiry
              </button>

              <p className="text-xs text-gray-400 text-center">
                We respect your privacy. No spam, ever.
              </p>

            </div>
          )}
        </div>

      </div>
    </section>
  )
}