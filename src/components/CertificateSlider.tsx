import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Download } from 'lucide-react';

const certificates = [
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1470&auto=format&fit=crop',
    downloadUrl: '#',
  },
    {
    title: 'Core Java (Basic)',
    issuer: 'HackerRank Certificates',
    date: '2024',
    image: 'https://drive.google.com/file/d/1rzUPbPqalZ-I95az56hzPJ0qaxHJWWIO/view',
    downloadUrl: '#',
  },

  // Add more certificates
];




export const CertificateSlider = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="w-full py-12"
    >
      {certificates.map((cert) => (
        <SwiperSlide
          key={cert.title}
          className="max-w-md bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {cert.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1">{cert.issuer}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {cert.date}
            </p>
            <a
              href={cert.downloadUrl}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Certificate
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};