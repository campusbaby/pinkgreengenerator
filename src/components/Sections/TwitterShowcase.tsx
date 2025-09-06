'use client';

export default function TwitterShowcase() {
  const twitterCards = [
    {
      id: 1,
      username: '@oetaricinthya',
      avatar: '/avatars/image1.jpg',
      content: '"Brave Pink adalah warna jilbab Ibu Ana yang berani berdiri di depan para aparat.Hero Green terinspirasi dari helm Affan, harapan dan kekuatan yang tumbuh dari kehilangan[🩷💚]We are taking part in online movement to make ourselves heard.Be part of this"'
    },
    {
      id: 2,
      username: '@watchdoc_ID', 
      avatar: '/avatars/image2.jpg',
      content: '"Resistance Blue. Brave Pink. Hero Green.Dari simbol darurat demokrasi, keberanian seorang ibu yang melawan barikade aparat pada aksi unjuk rasa, hingga nyawa yang melayang akibat kekerasan polisi.Semua menyatu dalam perlawanan rakyat."'
    },
    {
      id: 3,
      username: '@pikiran_rakyat',
      avatar: '/avatars/image3.jpg',
      content: '"🌸💚 Brave Pink Hero Green.Simbol keberanian & solidaritas dari rakyat untuk rakyat.Gerakan 17+8 Tuntutan Rakyat kini menyuarakan aspirasi panjang & pendek bagi masa depan yang lebih adil.Tunjukkan dukunganmu, Kini giliranmu!#BravePinkHeroGreen #17plus8TuntutanRakyat"'
    }
  ];

  return (
    <section className="relative py-16 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
            Community Showcase
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            See how creators around the world are using Pink Green Generator to transform their photos and express their support for social movements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {twitterCards.map((card) => (
            <div key={card.id} className="card-glass p-8 rounded-3xl group hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src={card.avatar} 
                    alt={`${card.username} avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-bold text-foreground">{card.username}</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {card.content}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}