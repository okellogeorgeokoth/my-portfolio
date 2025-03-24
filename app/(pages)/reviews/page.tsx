import Image from 'next/image';
import React from 'react';

export default function Reviews() {
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Great product! Highly recommended.',
      date: '2023-10-01',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      comment: 'Very good quality, but delivery was a bit slow.',
      date: '2023-09-25',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      rating: 5,
      comment: 'Excellent service and product. Will buy again!',
      date: '2023-09-20',
      avatar: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Customer Reviews
        </h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {review.name}
                  </h3>
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
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}