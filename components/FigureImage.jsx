import Image from 'next/image';
const FigureImage = (props) => {
  const { className, src, width, height, ...others } = props;
  return (
    <figure className={className} {...others}>
      <Image src={src} alt="Kosi Simanchal" width={width} height={height} unoptimized={true} style={{ width: '100%', height: 'auto' }} />
    </figure>
  );
};
export default FigureImage;
