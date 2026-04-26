export function EducationSection() {
  return (
    <section id="education" className="px-6 py-10 lg:px-8 lg:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl rounded-[1.5rem] border border-black/6 bg-white/70 px-6 py-6 shadow-[0_10px_28px_rgba(17,17,17,0.03)] md:px-7">
          <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground mb-4">
            Education
          </p>
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
              University of Southampton
            </h3>
            <p className="text-base text-muted-foreground leading-7">
              MEng Structural Engineering, First-Class Honours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
