import { Home, Briefcase, Scale, FileText, Users } from 'lucide-react';

export default function PracticeAreas() {
  const practices = [
    {
      title: 'Conveyancing & Property Law',
      icon: Home,
      description: 'Navigating property transactions with precision.',
      details: 'We assist clients with all aspects of property law in Botswana. From drafting sale agreements to registering transfers and mortgage bonds at the Deeds Registry, we ensure your real estate transactions are seamless, secure, and legally sound.',
    },
    {
      title: 'Corporate & Commercial Law',
      icon: Briefcase,
      description: 'Strategic counsel for your business.',
      details: 'Our firm provides comprehensive corporate legal services, including company registration with CIPA, drafting commercial contracts, mergers and acquisitions, and advising on corporate governance to ensure your business operates smoothly within Botswana\'s regulatory framework.',
    },
    {
      title: 'Civil Litigation',
      icon: Scale,
      description: 'Fierce advocacy in the courtroom.',
      details: 'When disputes arise, our experienced litigators represent clients across all courts in Botswana, including the Magistrate Court, High Court, and Court of Appeal. We handle a wide range of civil matters with a focus on achieving favorable resolutions efficiently.',
    },
    {
      title: 'Debt Recovery',
      icon: FileText,
      description: 'Efficient collection of outstanding debts.',
      details: 'We offer robust debt recovery services for businesses and individuals. Our approach ranges from issuing letters of demand to pursuing formal legal action and executing judgments, ensuring you recover what is rightfully owed to you.',
    },
    {
      title: 'Labour & Employment Law',
      icon: Users,
      description: 'Protecting workplace rights and ensuring compliance.',
      details: 'We advise both employers and employees on matters governed by the Botswana Employment Act. Whether it involves drafting employment contracts, handling disciplinary hearings, or representing clients at the Industrial Court, we provide expert guidance on all labour relations.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">Practice Areas</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Serima Legal Practice offers specialized legal services tailored to the unique landscape of Botswana. Our dedicated attorneys provide expert counsel across a diverse range of practice areas.
          </p>
        </div>

        {/* Practice Areas List */}
        <div className="space-y-12">
          {practices.map((practice, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/3 bg-navy p-8 flex flex-col items-center justify-center text-center">
                <practice.icon className="h-16 w-16 text-gold mb-4" />
                <h2 className="font-serif text-2xl font-bold text-white">{practice.title}</h2>
              </div>
              <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-navy mb-4">{practice.description}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {practice.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
