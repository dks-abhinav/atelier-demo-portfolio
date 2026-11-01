import React from 'react';

export const HowOrderingWorks: React.FC = () => {
  const steps = [
    {
      num: '1',
      stepTag: 'STEP 01',
      title: 'Choose an Artwork Style or Service',
      description:
        'Select your desired medium: pencil portrait, colour-pencil, blood art, spiral line, watercolor, devotional relief, paper-cut, or live painting & gift essentials.',
    },
    {
      num: '2',
      stepTag: 'STEP 02',
      title: 'Specify Requirements & Details',
      description:
        'Select preferred dimensions, framing preferences, medium options, or sample reference requirements using our interactive commission inquiry form.',
    },
    {
      num: '3',
      stepTag: 'STEP 03',
      title: 'Simulate Commission Summary',
      description:
        'Generate a structured commission summary detailing medium, size, occasion, and custom requirements in the local client-side demonstration interface.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F0] dark:bg-[#0E221C] border-t border-b border-[#E5DDD0] dark:border-[#204437] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#BD805B] dark:text-[#D4956F] block mb-2">
            Simulated Workflow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] dark:text-[#FAF6EF] font-normal tracking-tight">
            How Commission Inquiries Work
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#3E5248] dark:text-[#C2D1BF] font-light">
            From initial concept to completed keepsake, exploring custom art studies with Atelier Demo is straightforward.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#FFFFFF] dark:bg-[#15362C] rounded-lg p-7 border border-[#DDD5C7] dark:border-[#265041] shadow-[0_2px_12px_rgba(23,61,50,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-[#BD805B] dark:hover:border-[#D4956F] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#173D32] dark:bg-[#1E483C] text-[#FAF6EF] flex items-center justify-center font-serif text-lg font-medium transition-colors shadow-2xs border border-[#173D32] dark:border-[#356B5A]">
                    {step.num}
                  </div>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-[#BD805B] dark:text-[#D4956F] font-semibold">
                    {step.stepTag}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#173D32] dark:text-[#FAF6EF] mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#243B32] dark:text-[#E8E2D8] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
