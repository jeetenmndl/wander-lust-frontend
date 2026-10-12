import { Quote, Star } from 'lucide-react'
import { Marquee } from '../ui/marquee'

const reviews = [
  {
    name: 'Aarav Sharma',
    rating: 5,
    date: 'September 18, 2026',
    review: 'The service was clear, reliable, and easy to use. The team made the whole experience feel effortless.',
  },
  {
    name: 'Maya Thompson',
    rating: 5,
    date: 'September 6, 2026',
    review: 'Excellent support from start to finish. I especially appreciated the quick answers and thoughtful guidance.',
  },
  {
    name: 'Liam Wilson',
    rating: 4,
    date: 'August 29, 2026',
    review: 'A polished experience with useful features and a friendly team. It has made collaborating much simpler.',
  },
  {
    name: 'Sofia Martinez',
    rating: 5,
    date: 'August 15, 2026',
    review: 'I love how intuitive everything is. It saved our team time and gave us exactly what we needed.',
  },
  {
    name: 'Noah Patel',
    rating: 4,
    date: 'August 3, 2026',
    review: 'Dependable, secure, and straightforward. The detailed reports have been particularly valuable for us.',
  },
  {
    name: 'Emma Brown',
    rating: 5,
    date: 'July 22, 2026',
    review: 'A genuinely pleasant experience. The platform is well designed and the customer support is outstanding.',
  },
]

const reviewColumns = [reviews.slice(0, 2), reviews.slice(2, 4), reviews.slice(4, 6)]

const ReviewCard = ({ review }) => (
  <article className='w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md'>
    <div className='mb-5 flex items-start justify-between gap-4'>
      <div className='flex items-center gap-3'>
        <div className='flex size-11 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600'>
          {review.name.split(' ').map((name) => name[0]).join('')}
        </div>
        <div>
          <h3 className='font-semibold text-slate-900'>{review.name}</h3>
          <time className='text-xs text-slate-500'>{review.date}</time>
        </div>
      </div>
      <Quote size={21} className='text-orange-300' aria-hidden='true' />
    </div>

    <div className='mb-4 flex gap-1' aria-label={`${review.rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} size={17} className={star <= review.rating ? 'fill-orange-500 text-orange-500' : 'text-slate-200'} />
      ))}
    </div>

    <blockquote className='text-[15px] leading-7 text-slate-600'>“{review.review}”</blockquote>
  </article>
)

const Reviews = () => (
  <section className='bg-[#fffdf9] px-20 py-24'>
    <div className='mx-auto max-w-3xl text-center'>
      <p className='mb-3 text-sm font-bold tracking-[0.2em] text-orange-500 uppercase'>Testimonials</p>
      <h2 className='text-5xl font-bold text-slate-900'>Loved by our users</h2>
      <p className='mt-5 text-lg text-slate-600'>Real feedback from people who use our service every day.</p>
    </div>

    <div className='relative mx-auto mt-14 h-[520px] max-w-6xl overflow-hidden'>
      <div className='grid h-full grid-cols-3 gap-6'>
        {reviewColumns.map((column, index) => (
          <Marquee key={index} pauseOnHover reverse={index === 1} className={index === 1 ? '[--marquee-duration:30s]' : '[--marquee-duration:26s]'}>
            {column.map((review) => <ReviewCard key={review.name} review={review} />)}
          </Marquee>
        ))}
      </div>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#fffdf9] to-transparent' />
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fffdf9] to-transparent' />
    </div>
  </section>
)

export default Reviews
