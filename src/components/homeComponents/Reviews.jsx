import { Star } from 'lucide-react'
import React from 'react'

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

const Reviews = () => {
  return (
    <section className='bg-orange-50 px-20 py-24'>
      <h2 className='mb-20 text-center text-5xl font-bold'>What Our Users Say</h2>

      <div className='grid grid-cols-3 gap-6'>
        {reviews.map((review) => (
          <article key={review.name} className='rounded border border-gray-300 bg-white px-6 py-8'>
            <div className='mb-6 flex items-center justify-between'>
              <h3 className='text-xl font-semibold'>{review.name}</h3>
              <time className='text-sm text-gray-500'>{review.date}</time>
            </div>

            <div className='mb-6 flex gap-1' aria-label={`${review.rating} out of 5 stars`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  className={star <= review.rating ? 'fill-orange-500 text-orange-500' : 'text-gray-300'}
                />
              ))}
            </div>

            <p className='leading-7 text-gray-600'>{review.review}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews
