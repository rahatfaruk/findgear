function SectionHeader({title}) {
  return (  
    <div className="max-w-lg mx-auto mt-8 text-center">
      <h2 className="text-3xl md:text-4xl">
        <span className="inline-block border-t-4 border-primary">{title}</span>
      </h2>
    </div>
  );
}

export default SectionHeader;