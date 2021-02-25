const Pokemon = ({ src, alt, className }) => {
  return (
    <div className={className} title={alt}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Pokemon;
