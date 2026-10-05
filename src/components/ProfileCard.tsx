import React from 'react';

export const ProfileCard: React.FC = () => {
  const skills = [
    'Tin học văn phòng cơ bản',
    'Tiếng Anh cơ bản',
    'Quản lý thời gian',
    'Giải quyết vấn đề',
  ];

  return (
    <section id="profile" className="w-full max-w-4xl mx-auto mt-16 px-4 z-10 relative animate-fade-rise-delay-2">
      <div className="backdrop-blur-md bg-white/85 border border-black/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-all duration-300 hover:shadow-black/5 hover:border-black/20">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative group">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-black/10 shadow-lg relative bg-[#f9f9f9]">
                <img
                  src="/profile.jpg"
                  onError={(e) => {
                    // Fallback to URL encoded Vietnamese filename if needed
                    const target = e.currentTarget;
                    if (!target.src.includes('ảnh')) {
                      target.src = encodeURI('/ảnh đội.jpg');
                    }
                  }}
                  alt="Nguyễn Thu Uyên - FTU Student"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                FTU Student
              </div>
            </div>

            {/* Quick contact shortcuts */}
            <div className="mt-7 flex flex-col items-center gap-2 text-xs text-[#6F6F6F]">
              <a
                href="tel:0345486934"
                className="flex items-center gap-1.5 hover:text-black transition-colors"
                title="Gọi điện"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0345 486 934</span>
              </a>
              <a
                href="mailto:thuuyen120207@gmail.com"
                className="flex items-center gap-1.5 hover:text-black transition-colors"
                title="Gửi email"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>thuuyen120207@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Profile Details */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-black/[0.04] text-black text-xs font-semibold rounded-md tracking-wider uppercase mb-2">
              Personal Profile
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-[#000000] tracking-tight">
              Nguyễn Thu Uyên
            </h2>
            
            <p className="mt-2 text-sm sm:text-base text-[#6F6F6F] leading-relaxed">
              Sinh viên năm 2, chuyên ngành <span className="text-black font-medium">Tiêu chuẩn Kinh tế quốc tế</span>, 
              trường <span className="text-black font-medium">Đại học Ngoại thương (FTU)</span>
            </p>

            {/* Skills Pills */}
            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-widest text-[#000000] font-semibold mb-3">
                Kỹ năng nổi bật
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/[0.04] text-black border border-black/10 hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Project */}
            <div className="mt-7 p-5 rounded-2xl bg-white/70 border border-black/10 shadow-sm text-left">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-black tracking-wide uppercase">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span>Dự án tiêu biểu</span>
              </div>
              <p className="text-xs sm:text-sm text-[#6F6F6F] leading-relaxed">
                Thành viên của dự án <strong className="text-black font-medium">“Nghiên cứu và phát triển website hỗ trợ sinh viên FTU tích lũy điểm rèn luyện - FTU Campus Connect”</strong> trong môn <em>Tư duy thiết kế - Đổi mới sáng tạo</em>.
              </p>
              <p className="mt-2 text-xs text-[#6F6F6F] leading-relaxed">
                Đây là trang web đa chức năng liên quan đến các sự kiện, chương trình tính điểm rèn luyện tại FTU và cá nhân hóa trải nghiệm sử dụng, tùy theo nhu cầu của sinh viên FTU.
              </p>
            </div>

            {/* Connect action */}
            <div className="mt-7 flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <a
                href="mailto:thuuyen120207@gmail.com"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs sm:text-sm bg-black text-white hover:scale-[1.03] transition-transform duration-200 shadow-sm"
              >
                <span>Gửi lời chào</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="tel:0345486934"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm border border-black/15 text-black hover:bg-black/[0.04] transition-colors"
              >
                <span>Liên hệ: 0345 486 934</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
