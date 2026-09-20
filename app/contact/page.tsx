export default function Contact() {
  return (
    <div className="py-20 px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Get in Touch</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900">Contact Us</h1>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
          Reach out to Frontier Research & Innovation Solutions for multidisciplinary research, collaboration, and training opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Contact Information Side */}
        <div className="bg-slate-900 text-white p-10 md:p-14 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-8">Official Contact Details</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center mr-4 flex-shrink-0">
                📍
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">Registered Address</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Al Mubashir Plaza, First Floor, Office No. 2, <br/>
                  Main Street, Azeem Town, Khan Pur, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center mr-4 flex-shrink-0">
                📞
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">Phone Number</h4>
                <p className="text-slate-300 text-sm">+92 345 0216630</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center mr-4 flex-shrink-0">
                ✉️
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">Email Address</h4>
                <p className="text-slate-300 text-sm">infofrispk@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="p-10 md:p-14">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
          <input type="hidden" name="access_key" value="7d41f0a8-a6d8-436e-9b3c-c587d7f0a1d3" />
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                <input type="text" name="First_Name" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                <input type="text" name="Last_Name" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input type="email" name="Email" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea name="Message" rows={4} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we collaborate?"></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}