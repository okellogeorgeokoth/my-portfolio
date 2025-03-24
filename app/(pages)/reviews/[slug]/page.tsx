import { getReviewBySlug } from '@/sanity/lib/sanity.query';
import { ReviewType } from '../../types';
import { notFound } from 'next/navigation';

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;

    if (!slug) return notFound();

    console.log("Slug:", slug);

    // Fetch the Review
    const review: ReviewType | null = await getReviewBySlug(slug);

    if (!review) return notFound();

    return {
      title: `${review.name}'s Review`,
      description: review.comment,
      openGraph: {
        title: `${review.name}'s Review`,
        description: review.comment,
        images: [
          {
            url: review.avatar.asset.url,
            alt: review.avatar.alt || review.name,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching review:", error);
    return notFound();
  }
}