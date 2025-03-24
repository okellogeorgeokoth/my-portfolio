import { getReviewBySlug } from '@/sanity/lib/sanity.query';
import { ReviewType } from '../../types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default async function ReviewPage({ params }: { params:Promise<{ slug: string }>}) {
  try {
    const { slug } =await params;

    if (!slug) return notFound();

    // Fetch the Review
    const review: ReviewType | null = await getReviewBySlug(slug);

    if (!review) return notFound();

    return (
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Meta tags for SEO */}
          <head>
            <title>{`${review.name}'s Review`}</title>
            <meta name="description" content={review.comment} />
            <meta property="og:title" content={`${review.name}'s Review`} />
            <meta property="og:description" content={review.comment} />
            <meta property="og:image" content={review.avatar.asset.url} />
            <meta property="og:image:alt" content={review.avatar.alt || review.name} />
          </head>

          {/* Review Content */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Review Details */}
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={review.avatar.asset.url}
                    alt={review.avatar.alt || review.name}
                    className="w-16 h-16 rounded-full"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{review.name}&apos;s Review</h1>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-2xl ${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-500 block mt-1">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>

                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg">{review.comment}</p>
                </div>

                <Link href="/reviews" className="inline-block mt-8 text-blue-600 hover:text-blue-800">
                  ← Back to all reviews
                </Link>
              </div>

              {/* Screenshot Evidence */}
              {review.screenshot && (
                <div className="flex-1">
                  <div className="sticky top-8">
                    <div className="border border-gray-200 rounded-lg p-2 bg-gray-50">
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">Evidence of Satisfaction</h2>
                      <Image
                        src={review.screenshot.asset.url}
                        alt={review.screenshot.alt || `${review.name}'s testimonial evidence`}
                        width={600}
                        height={400}
                        className="rounded-md w-full h-auto"
                        priority
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Screenshot provided by {review.name} demonstrating their experience
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );

  } catch (error) {
    console.error("Error fetching review:", error);
    return notFound();
  }
}