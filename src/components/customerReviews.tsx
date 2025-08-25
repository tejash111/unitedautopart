'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
  id: number;
  title: string;
  content: string;
  author: string;
  rating: number;
}

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      title: "MUCH SATISFIED",
      content: "I have recently acquired a used engine from United Auto parts, and I am delighted with my purchase. The personnel, who possessed a wealth of experience, provided me with expert guidance in selecting the ideal option for my vehicle. The quality of the product is exceptional, and the pricing was unexpectedly budget-friendly. Given the inclusion of a 5-year warranty, I am assured in my decision to make this purchase. This experience comes highly recommended.",
      author: "JAMES R",
      rating: 5
    },
    {
      id: 2,
      title: "FIRST-CLASS SERVICE",
      content: "As an individual interested in automobiles, I have discovered United Auto parts as an indispensable asset. The extensive range of both imported and indigenous components has proven to be quite advantageous. The used transmissions provided by the company exhibit exceptional quality, while their customer service sets a benchmark in terms of excellence. Approval or admiration is typically conveyed by raising one's thumb upward.",
      author: "SARAH L",
      rating: 5
    },
    {
      id: 3,
      title: "HIGHLY RECOMMENDED",
      content: "As a modest service station owner, I consistently rely on United Auto parts as my preferred supplier for dependable engines and transmissions. The range of products in their inventory sufficiently caters to all my requirements, while their guarantee policy ensures a sense of security and tranquility. Without a doubt, they have gained my confidence and patronage.",
      author: "MIKE D",
      rating: 5
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  const visibleReviews = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      result.push(reviews[index]);
    }
    return result;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent">
              CUSTOMER REVIEWS{' '}
              <span className="text-white">FOR OUR USED AUTO PARTS SERVICE</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
              We would like you to please take a look at our customer reviews to see how much our customers are satisfied with our Used auto parts service.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={prevReview}
              className="w-14 h-14 border-2 border-white/[0.2] bg-transparent rounded-lg flex items-center justify-center text-gray hover:bg-white/[0.1] hover:text-white transition-all duration-300 hover:-translate-y-1 "
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              className="w-14 h-14 border-2 border-white/[0.2] bg-transparent rounded-lg flex items-center justify-center text-gray hover:bg-white/[0.1] hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {visibleReviews().map((review, index) => (
            <div
              key={`${review.id}-${currentIndex}`}
              className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-8 shadow-2xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-500 hover:-translate-y-2  relative overflow-hidden group"
            >
             
              
            
              <div className="mb-6">
                <div className="w-8 h-8 text-gray-500 text-4xl font-bold leading-none">"</div>
              </div>

              <h3 className="text-gray-500 font-bold text-lg mb-4 tracking-wide">
                {review.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                {review.content}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-medium tracking-wide">
                  - {review.author}
                </span>
                <div className="flex gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>


              
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gray-600 scale-125'
                  : 'bg-gray-700 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;