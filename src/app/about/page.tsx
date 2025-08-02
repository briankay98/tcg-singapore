import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ShieldCheckIcon, TruckIcon, TrendingUpIcon, UsersIcon, StarIcon, HeartIcon } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Active Users', value: '50,000+', icon: UsersIcon },
    { label: 'Cards Sold', value: '2.5M+', icon: TrendingUpIcon },
    { label: 'Average Rating', value: '4.8/5', icon: StarIcon },
    { label: 'Years Operating', value: '5+', icon: HeartIcon },
  ];

  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Buyer Protection',
      description: 'Every purchase is protected by our comprehensive buyer protection program. If your item doesn\'t match the description or arrives damaged, we\'ll make it right.',
    },
    {
      icon: TruckIcon,
      title: 'Fast Local Shipping',
      description: 'Enjoy fast and secure delivery across Singapore with same-day delivery options in some areas. All shipments include tracking and insurance.',
    },
    {
      icon: TrendingUpIcon,
      title: 'Market Insights',
      description: 'Stay informed with real-time market prices, trends, and analytics. Our price tracking helps you make informed buying and selling decisions.',
    },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      description: 'Passionate TCG collector with 15+ years experience. Former software engineer who saw the need for a better marketplace.',
      image: '/placeholder-avatar.jpg',
    },
    {
      name: 'Sarah Lim',
      role: 'Head of Operations',
      description: 'Expert in logistics and customer service. Ensures every transaction runs smoothly from listing to delivery.',
      image: '/placeholder-avatar.jpg',
    },
    {
      name: 'Marcus Wong',
      role: 'Lead Developer',
      description: 'Full-stack developer building the technology that powers our platform. Always working on new features to improve user experience.',
      image: '/placeholder-avatar.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About TCG Singapore
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Singapore&apos;s most trusted marketplace for trading card games, connecting collectors 
              and players across the island nation since 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  TCG Singapore was born from a simple frustration: why was it so hard to buy and sell 
                  trading cards in Singapore? As passionate collectors ourselves, we knew there had to 
                  be a better way.
                </p>
                <p>
                  In 2019, we launched with a mission to create Singapore&apos;s premier marketplace for 
                  trading card games. We wanted to build a platform that prioritized trust, security, 
                  and community above all else.
                </p>
                <p>
                  Today, we&apos;re proud to serve over 50,000 collectors, traders, and players across 
                  Singapore and Southeast Asia. From casual players looking for their first deck to 
                  serious collectors hunting for vintage cards, we&apos;re here to help.
                </p>
                <p>
                  Our commitment remains the same: to provide the safest, most reliable, and most 
                  enjoyable trading card marketplace experience possible.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-6">
                To make trading card collecting accessible, safe, and enjoyable for everyone in Singapore 
                and beyond.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Build trust between buyers and sellers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Provide fair market pricing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Foster a passionate community</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Support local game stores</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TCG Singapore?</h2>
            <p className="text-gray-600 text-lg">We&apos;ve built our platform with collectors in mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">The passionate collectors behind TCG Singapore</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Connect with fellow collectors, share your latest finds, and stay updated on the latest 
              trends in the TCG world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join Discord
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Follow on Instagram
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 text-lg">Have questions? We&apos;d love to hear from you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">📧</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600">help@tcgsingapore.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">📞</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600">+65 8888 8888</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">🏢</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">Singapore</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}