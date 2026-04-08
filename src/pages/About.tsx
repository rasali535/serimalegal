export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Serima Legal Practice</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Committed to providing accessible legal excellence and unwavering advocacy in Botswana.
          </p>
        </div>
      </section>

      {/* Firm Profile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1505664173615-04f1bef93164?auto=format&fit=crop&q=80" 
                alt="Law office" 
                className="rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Serima Legal Practice, our mission is to deliver sophisticated, pragmatic, and highly effective legal solutions to our clients. Based in Gaborone, we understand the nuances of the Botswana legal system and leverage this knowledge to protect our clients' interests.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that excellence in legal representation should be accessible. Whether you are a multinational corporation navigating complex commercial regulations or an individual seeking justice in a civil dispute, we approach every case with the same level of dedication, integrity, and meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Our Leadership</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Partner 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 text-center pb-8">
              <div className="h-64 bg-gray-200 mb-6 relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
                  alt="Founding Partner" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-1">Thabo Serima</h3>
              <p className="text-gold font-medium mb-4">Founding Partner</p>
              <p className="text-gray-600 px-6 text-sm leading-relaxed">
                With over 15 years of experience in Corporate Law and Civil Litigation, Thabo leads the firm with a commitment to strategic excellence and client success in the High Court of Botswana.
              </p>
            </div>

            {/* Partner 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 text-center pb-8">
              <div className="h-64 bg-gray-200 mb-6 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                  alt="Senior Partner" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-1">Lesedi Mokoena</h3>
              <p className="text-gold font-medium mb-4">Senior Partner</p>
              <p className="text-gray-600 px-6 text-sm leading-relaxed">
                An expert in Conveyancing and Property Law, Lesedi ensures seamless real estate transactions, bringing deep knowledge of the Deeds Registry procedures to every client interaction.
              </p>
            </div>

            {/* Associate */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 text-center pb-8">
              <div className="h-64 bg-gray-200 mb-6 relative">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" 
                  alt="Senior Associate" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-1">Kabo Ndlovu</h3>
              <p className="text-gold font-medium mb-4">Senior Associate</p>
              <p className="text-gray-600 px-6 text-sm leading-relaxed">
                Specializing in Labour & Employment Law, Kabo provides robust representation at the Industrial Court, fiercely advocating for fair workplace practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
