import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  TestimonialsSection,
  Title,
  TestimonialCard,
  ClientName,
  Stars,
  Comment,
  CarouselContainer
} from '../styles/Testimonials.styles';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    rating: 5,
    comment: 'Encomendei um bolo para o aniversário da minha filha. Ficou lindo e delicioso! Todos os convidados adoraram.'
  },
  {
    id: 2,
    name: 'João Santos',
    rating: 5,
    comment: 'O red velvet do meu casamento estava perfeito. Atendimento excelente e qualidade impecável.'
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    rating: 5,
    comment: 'Sempre peço meus bolos aqui. O sabor é incrível e o acabamento é muito caprichado. Recomendo!'
  },
  {
    id: 4,
    name: 'Pedro Costa',
    rating: 5,
    comment: 'Fiz uma surpresa para minha esposa. O bolo estava lindo e saboroso. Superou as expectativas.'
  },
  {
    id: 5,
    name: 'Carla Mendes',
    rating: 5,
    comment: 'Os doces são maravilhosos! Sempre que tenho uma ocasião especial, faço questão de pedir aqui.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection id="testimonials">
      <Title>O que nossos clientes dizem</Title>
      <CarouselContainer>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ClientName>{testimonial.name}</ClientName>
                <Stars>
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </Stars>
                <Comment>{testimonial.comment}</Comment>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>
    </TestimonialsSection>
  );
};

export default Testimonials; 