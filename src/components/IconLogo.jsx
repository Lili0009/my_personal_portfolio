import '../index.css';

function IconLogo({image, label}) {
  return (
    <>
      <img
      src={image}
      className="hover:animate-bounce transition-transform duration-300"
      alt={label}
      />
    </>
  );
}

export default IconLogo;
