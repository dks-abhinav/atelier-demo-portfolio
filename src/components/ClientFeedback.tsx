import React from 'react';
import { CLIENT_REVIEWS } from '../data/businessData';
import { Star, Info } from 'lucide-react';

export const ClientFeedback: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F0E6] dark:bg-[#10251F] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#BD805B] dark:text-[#D4956F] block mb-2">
              Portfolio Component Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] dark:text-[#FAF6EF] font-normal tracking-tight">
              Sample Feedback Layout
            </h2>
            <p className="mt-2 text-sm text-[#3E5248] dark:text-[#C2D1BF] font-light max-w-xl">
              Demonstration feedback cards illustrating client testimonial layouts, star rating components, and responsive grid behavior.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#DDD5C7] dark:border-[#285546] bg-[#FFFFFF] dark:bg-[#16382E] text-xs font-semibold uppercase tracking-wider text-[#BD805B] dark:text-[#D4956F] shadow-2xs">
            <span>Demonstration Testimonial Grid</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FFFFFF] dark:bg-[#16382E] rounded-lg p-6 border border-[#DDD5C7] dark:border-[#285546] shadow-[0_2px_12px_rgba(23,61,50,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] flex flex-col justify-between transition-colors duration-200"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#BD805B] dark:text-[#D4956F]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xs sm:text-sm text-[#243B32] dark:text-[#E8E2D8] italic leading-relaxed font-light">
                  "{review.review}"
                </blockquote>
              </div>

              {/* Author & Source */}
              <div className="mt-6 pt-4 border-t border-[#DDD5C7]/70 dark:border-[#285546] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-medium text-[#173D32] dark:text-[#FAF6EF]">
                    {review.author}
                  </h4>
                  <span className="text-[11px] text-[#5E7268] dark:text-[#A9B9A2]">
                    {review.location}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#173D32] dark:text-[#FAF6EF] px-2 py-0.5 rounded bg-[#F4EFE6] dark:bg-[#0E231C] border border-[#DDD5C7]/70 dark:border-[#1E4236]">
                  <span>{review.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demonstration Notice Banner */}
        <div className="mt-8 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#16382E] border border-[#DDD5C7] dark:border-[#285546] flex items-center gap-3 text-xs text-[#3E5248] dark:text-[#C2D1BF] shadow-xs transition-colors duration-200">
          <Info className="w-4 h-4 text-[#BD805B] dark:text-[#D4956F] shrink-0" />
          <span>
            Demonstration Disclosure: The feedback items above are sample placeholders created for demonstration purposes only. No real customer testimonials or fictional claims are presented.
          </span>
        </div>

      </div>
    </section>
  );
};
