import { ArrowRight, Calendar, User } from 'lucide-react';

export default function Resources() {
  const posts = [
    {
      title: 'Navigating Property Transfers in Botswana',
      excerpt: 'A comprehensive guide to understanding the procedures at the Deeds Registry, the role of a conveyancer, and what to expect during a property transaction.',
      date: 'October 15, 2024',
      author: 'Lesedi Mokoena',
      category: 'Property Law',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80'
    },
    {
      title: 'A Guide to the Botswana Employment Act',
      excerpt: 'Key provisions every employer and employee should know, including termination procedures, severance benefits, and dispute resolution at the Industrial Court.',
      date: 'September 28, 2024',
      author: 'Kabo Ndlovu',
      category: 'Labour Law',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
    },
    {
      title: 'Corporate Governance: Compliance for New Companies',
      excerpt: 'Essential steps for newly registered entities to remain compliant with CIPA regulations and best practices for corporate governance in Botswana.',
      date: 'September 10, 2024',
      author: 'Thabo Serima',
      category: 'Corporate Law',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
    },
    {
      title: 'Understanding Debt Recovery Procedures',
      excerpt: 'From letters of demand to executing judgments: a step-by-step look at how businesses can effectively recover outstanding debts through the legal system.',
      date: 'August 22, 2024',
      author: 'Thabo Serima',
      category: 'Civil Litigation',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">Legal Insights</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest legal updates, practical guides, and expert commentary on Botswana's legal landscape from the team at Serima Legal Practice.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h2 className="font-serif text-2xl font-bold text-navy mb-3 hover:text-gold transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <button className="text-navy hover:text-gold transition-colors" aria-label="Read more">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
