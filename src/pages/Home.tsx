import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Scale, Briefcase, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
            alt="High Court"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Precision in Legal Advocacy.<br />
            <span className="text-gold">Integrity in Service.</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Serima Legal Practice provides sophisticated, accessible, and authoritative legal solutions in the heart of Gaborone, Botswana.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-gold hover:bg-yellow-600 text-navy font-bold py-3 px-8 rounded text-lg transition-colors w-full sm:w-auto text-center"
            >
              Consult an Expert
            </Link>
            <Link
              to="/practice-areas"
              className="bg-transparent border-2 border-white hover:border-gold hover:text-gold text-white font-bold py-3 px-8 rounded text-lg transition-colors w-full sm:w-auto text-center"
            >
              Our Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition: Why Serima? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Why Choose Serima?</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We combine deep local expertise with a client-centric approach to deliver exceptional legal outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-navy w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Deeply rooted in Botswana's legal landscape, we navigate the complexities of local regulations, from the Deeds Registry to the High Court, with unmatched precision.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-navy w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Client-Centric Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Your goals are our priority. We offer tailored legal strategies designed to protect your interests and achieve the best possible resolution for your unique situation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-navy w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Scale className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">Unwavering Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We uphold the highest ethical standards in every case. Transparent communication and honest counsel form the foundation of our practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Practice Areas Overview */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
              <div className="w-24 h-1 bg-gold mb-6 md:mb-0"></div>
            </div>
            <Link to="/practice-areas" className="flex items-center text-gold hover:text-yellow-400 font-medium transition-colors">
              View All Practice Areas <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Conveyancing & Property', icon: Briefcase },
              { title: 'Corporate & Commercial', icon: Shield },
              { title: 'Civil Litigation', icon: Scale },
              { title: 'Labour & Employment', icon: Users },
            ].map((area, index) => (
              <Link key={index} to="/practice-areas" className="group block bg-navy-light p-6 rounded border border-gray-700 hover:border-gold transition-colors">
                <area.icon className="h-8 w-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-lg font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm">Expert representation in Botswana.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
