import imgGroup30385 from "figma:asset/46045581569a4f4b0944af42a9cafcd72ef4e546.png";

function CardBg() {
  return (
    <div
      className="absolute left-0 top-0 h-[384px] w-full md:h-[283px] md:w-[595px]"
      data-name="card bg"
    />
  );
}

function TextBg() {
  return (
    <div
      className="absolute bg-[#26323a] rounded-xl h-44 left-[13px] bottom-[13px] right-[13px] z-0 md:h-64 md:left-[13px] md:top-1/2 md:-translate-y-1/2 md:w-[350px] md:right-auto md:bottom-auto md:z-10"
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
        <p className="block leading-[normal]">UI/UX Design</p>
      </div>
      <div className="relative shrink-0 text-[14px] w-full h-auto md:h-[134px]">
        <p className="block leading-[22px]">
          Designers create wireframes and prototypes to map out the user journey
          and visual layout. However, without rapid real-world validation, these
          initial mockups may lead to designs that look great but perform poorly
          in practice.
        </p>
      </div>
    </div>
  );
}

function DesignImg() {
  return (
    <div
      className="relative h-48 w-64 overflow-visible md:h-[226px] md:w-[212px] md:overflow-clip"
      data-name="Design img"
    >
      <div className="absolute flex h-[226px] items-center justify-center w-[212px] left-0 top-0">
        <div
          className="bg-center bg-cover bg-no-repeat h-[226px] w-[212px]"
          data-name="image"
          style={{ backgroundImage: `url('${imgGroup30385}')` }}
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
          <DesignImg />
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
          <DesignImg />
        </div>
      </div>
    </>
  );
}

export default function InfographicTemplateDesign925Adapted() {
  return (
    <div
      className="bg-[#1d282f] relative size-full min-h-[360px] md:min-h-[283px]"
      data-name="infographic_template_design"
    >
      <CardBg />
      <TextBg />
      <Content />
    </div>
  );
}