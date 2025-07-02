export function WeeksCard() {
  return (
    <div className="relative text-white p-4 sm:p-6 rounded-xl w-48 sm:w-52 h-48 sm:h-52" style={{ backgroundColor: '#1DA6AE' }}>
      {/* Main content */}
      <div className="text-center h-full flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center">
          <div className="card-number mb-2">3</div>
          <div className="card-label mb-4">Weeks</div>
        </div>
        <div className="text-base sm:text-lg" style={{ lineHeight: '18px' }}>
          first working<br />
          version of the app
        </div>
      </div>
      
      {/* Arrow tail */}
      <div className="absolute left-4 sm:left-6 -bottom-3 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px]" style={{ borderTopColor: '#1DA6AE' }}></div>
    </div>
  );
}