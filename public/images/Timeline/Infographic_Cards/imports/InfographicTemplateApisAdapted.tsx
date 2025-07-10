import imgImage from "figma:asset/6234c332709c7347a8858b3897b8f7fb6cad0bec.png";

function CardBg() {
  return (
    <div
      className="absolute left-0 top-0 h-[400px] w-full md:h-[283px] md:w-[595px]"
      data-name="card bg"
    />
  );
}

function TextBg() {
  return (
    <div
      className="absolute bg-[#302a38] rounded-xl h-44 left-[13px] bottom-[13px] right-[13px] z-0 md:h-64 md:left-[13px] md:top-1/2 md:-translate-y-1/2 md:w-[350px] md:right-auto md:bottom-auto md:z-10"
      data-name="text bg"
    />
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Open_Sans:Regular',_sans-serif] gap-3.5 items-start justify-start leading-[0] not-italic p-[16px] relative rounded-lg shrink-0 text-[#ffffff] text-left h-auto w-[calc(100%-32px)] md:h-[202px] md:w-[291px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[20px] w-full">
        <p className="block leading-[normal]">"Glueing" systems through APIs</p>
      </div>
      <div className="relative shrink-0 text-[14px] w-full h-auto md:h-[134px]">
        <p className="block leading-[22px]">
          Developers quickly integrate various services and functionalities
          using pre-built or custom APIs, ensuring seamless data flow and
          communication.
        </p>
      </div>
    </div>
  );
}

function ApisImg() {
  return (
    <div
      className="relative h-48 w-64 overflow-visible md:h-[211px] md:w-[248px] md:overflow-clip"
      data-name="Apis img"
    >
      <div className="absolute flex h-[211px] items-center justify-center w-[248px] left-0 top-0">
        <div
          className="bg-center bg-cover bg-no-repeat h-[211px] w-[248px]"
          data-name="image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
      </div>
    </div>
  );
}

function Content() {
  return (
    <>
      {/* Mobile Layout - Absolute positioning */}
      <div className="absolute box-border content-stretch p-0 left-0 right-0 top-0 bottom-0 md:hidden" data-name="content-mobile">
        {/* Text - positioned at bottom on mobile */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-0">
          <Text />
        </div>
        
        {/* Image - positioned at top on mobile */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <ApisImg />
        </div>
      </div>

      {/* Desktop Layout - Flexbox with gap */}
      <div className="hidden md:flex md:flex-row md:items-center md:gap-1 md:absolute md:left-[26px] md:top-1/2 md:-translate-y-1/2 md:z-20" data-name="content-desktop">
        {/* Text - first on desktop */}
        <div className="w-[291px] flex-shrink-0">
          <Text />
        </div>
        
        {/* Image - second on desktop */}
        <div className="flex-shrink-0">
          <ApisImg />
        </div>
      </div>
    </>
  );
}

export default function InfographicTemplateApisAdapted() {
  return (
    <div
      className="bg-[#25202d] relative size-full min-h-[360px] md:min-h-[283px]"
      data-name="infographic_template_apis"
    >
      <CardBg />
      <TextBg />
      <Content />
    </div>
  );
}