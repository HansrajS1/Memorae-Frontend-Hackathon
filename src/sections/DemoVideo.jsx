import React from 'react';

const DemoVideo = () => {
  return (
    <section 
      className="w-full px-8 py-16 mt-5 md:px-8 md:py-32 rounded-3xl md:min-h-[400px] flex justify-center items-center bg-center bg-cover bg-no-repeat" 
      style={{ backgroundImage: "url('https://cdn.memorae.ai/l3/Video-bg.webp')" }}
    >
      <div 
        className="w-full max-w-5xl aspect-video rounded-2xl relative bg-gradient-to-br from-[#f5f7fa] to-[#dbeafe] border-4 border-white overflow-hidden" 
        style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 32px 0px" }}
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/5gmwUDC3RHU"
          title="Memorae Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default DemoVideo;
