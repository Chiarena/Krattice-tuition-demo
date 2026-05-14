export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <span className="text-blue-600 text-xl font-bold tracking-tight">
        BrightPath
      </span>

      <ul className="flex gap-8 list-none">
        <li><a href="#programs" className="text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors">Programs</a></li>
        <li><a href="#why-us" className="text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors">Why Us</a></li>
        <li><a href="#enquiry" className="text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors">Contact</a></li>
      </ul>

      
        <a href="#enquiry"
        className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
        Enquire Now
      </a>
    </nav>
  )
}