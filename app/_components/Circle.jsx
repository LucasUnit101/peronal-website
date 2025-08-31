export default function Circle({height, width, outlineGlow, imgUrl}) {
  return (
    <div className="rounded-full flex items-center justify-center" style={{ height: height, width: width, boxShadow: `0 0 15px 1px ${outlineGlow}` }}>
      <img src={imgUrl} alt="Circle Image" className="rounded-full h-full w-full object-cover" />
    </div>
  );
}