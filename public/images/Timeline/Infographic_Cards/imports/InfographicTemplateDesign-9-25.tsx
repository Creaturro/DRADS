import imgGroup30385 from "figma:asset/46045581569a4f4b0944af42a9cafcd72ef4e546.png";

function CardBg() {
  return (
    <div
      className="absolute bg-[#1d282f] h-[345px] left-0 top-0 w-[595px]"
      data-name="card bg"
    />
  );
}

function TextBg() {
  return (
    <div
      className="absolute bg-[#26323a] h-[291px] left-[13px] rounded-xl top-[23px] w-[350px]"
      data-name="text bg"
    />
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Open_Sans:Regular',_sans-serif] gap-3.5 h-72 items-start justify-start leading-[0] not-italic p-[16px] relative rounded-lg shrink-0 text-[#ffffff] text-left w-[291px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[20px] w-full">
        <p className="block leading-[normal]">UI/UX Design</p>
      </div>
      <div className="h-[134px] relative shrink-0 text-[14px] w-full">
        <p className="block leading-[22px]">
          Designers create wireframes and prototypes to map out the user journey
          and visual layout. However, without rapid real-world validation, these
          initial mockups may lead to designs that look great but perform poorly
          in practice. This can result in significant rework later, as actual
          user interactions often reveal usability issues that weren’t apparent
          in static designs.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-[26px] p-0 top-5"
      data-name="content"
    >
      <Text />
      <div
        className="bg-center bg-cover bg-no-repeat h-[226px] shrink-0 w-[212px]"
        style={{ backgroundImage: `url('${imgGroup30385}')` }}
      />
    </div>
  );
}

export default function InfographicTemplateDesign() {
  return (
    <div
      className="bg-[#1d282f] relative size-full"
      data-name="infographic_template_design"
    >
      <CardBg />
      <TextBg />
      <Content />
    </div>
  );
}