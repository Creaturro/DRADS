export function SpeedCard() {
  return (
    <div className="relative text-white p-4 sm:p-6 rounded-xl w-48 sm:w-52 h-48 sm:h-52" style={{ backgroundColor: '#1DA6AE' }}>
      {/* Pink accent triangle */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-pink-400 rounded-tr-xl"></div>
      
      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-between text-center">
        <div className="card-number mb-3">3-4x</div>
        <div className="text-base sm:text-lg" style={{ lineHeight: '18px' }}>
          faster completion<br />
          vs classical<br />
          development
        </div>
      </div>
      
      {/* Arrow tail */}
      <div className="absolute left-4 sm:left-6 -bottom-3 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px]" style={{ borderTopColor: '#1DA6AE' }}></div>
    </div>
  );
}