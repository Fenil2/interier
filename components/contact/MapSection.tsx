export default function MapSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24">
      <div className="h-[240px] md:h-[400px] w-full rounded-md overflow-hidden relative shadow-lg">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Chennai city map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-on-primary-fixed/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-6 h-6 bg-tertiary-fixed-dim rounded-full animate-pulse shadow-[0_0_20px_#e6c275]" />
          <div className="mt-4 bg-[#fcf9f4] px-6 py-3 rounded-sm shadow-xl">
            <p
              className="italic"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              The Aurelian Atelier
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
