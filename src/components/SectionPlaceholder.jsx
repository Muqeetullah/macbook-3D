const SectionPlaceholder = ({ title, minHeight }) => {
    return (
        <section
            aria-hidden="true"
            className="container mx-auto px-5 2xl:px-0 flex items-center justify-center"
            style={{ minHeight }}
        >
            <div className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-dark-100">Loading section</p>
                <h2 className="mt-4 text-2xl font-semibold text-white lg:text-4xl">{title}</h2>
            </div>
        </section>
    );
};

export default SectionPlaceholder;
