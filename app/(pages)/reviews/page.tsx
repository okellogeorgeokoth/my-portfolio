import { getReviews } from '@/sanity/lib/sanity.query';
import Image from 'next/image';
import Link from 'next/link';

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto"> {/* Increased max-width to accommodate screenshots */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Client Testimonials
        </h2>
        <div className="space-y-8">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Review content (left side) */}
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={review.avatar.asset.url}
                      alt={review.avatar.alt || review.name}
                      className="w-12 h-12 rounded-full"
                      width={50}
                      height={50}
                    />
                    <div>
                      {review.slug ? (
                        <Link href={`/reviews/${review.slug}`}>
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                            {review.name}
                          </h3>
                        </Link>
                      ) : (
                        <h3 className="text-lg font-semibold text-gray-900">
                          {review.name}
                        </h3>
                      )}
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xl ${
                              i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{review.comment}</p>
                </div>

                {/* Screenshot evidence (right side) - only shown if screenshot exists */}
                {review.screenshot && (
                  <div className="flex-1">
                    <div className="border border-gray-200 rounded-lg p-2 bg-gray-50">
                      <Image
                        src={review.screenshot.asset.url}
                        alt={review.screenshot.alt || `${review.name}'s testimonial evidence`}
                        width={200}
                        height={100}
                        className="rounded-md object-contain w-full h-auto"
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center">
                        Evidence of {review.name}&apos;s satisfaction
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}