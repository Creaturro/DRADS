import imgGroup30434 from "figma:asset/adc7cde0226772d6e7eda75f2103776d7fc8005e.png";

function CardBg() {
  return (
    <div
      className="absolute bg-[#1d282f] h-[324px] left-0 top-0 w-[595px]"
      data-name="card bg"
    />
  );
}

function TextBg() {
  return (
    <div
      className="absolute bg-[#26323a] h-[293px] left-[13px] rounded-xl top-[9px] w-[350px]"
      data-name="text bg"
    />
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Open_Sans:Regular',_sans-serif] gap-3.5 h-[271px] items-start justify-start leading-[0] not-italic pb-4 pt-1.5 px-4 relative rounded-lg shrink-0 text-[#ffffff] text-left w-[291px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[20px] w-full">
        <p className="block leading-[normal]">Testing</p>
      </div>
      <div className="h-[230px] relative shrink-0 text-[14px] w-full">
        <p className="block leading-[22px]">
          The application undergoes rigorous testing, including unit,
          integration, and user acceptance tests, to identify and fix bugs. In
          classical development, testing is typically done on larger chunks of
          work. This approach means that when changes occur, the retesting
          process becomes lengthy and cumbersome, potentially slowing down the
          entire development cycle.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-[271px] items-center justify-start left-[26px] p-0 top-[15px]"
      data-name="content"
    >
      <Text />
      <div
        className="bg-center bg-cover bg-no-repeat h-[259px] shrink-0 w-[225px]"
        style={{ backgroundImage: `url('${imgGroup30434}')` }}
      />
    </div>
  );
}

export default function InfographicTemplateTesting() {
  return (
    <div
      className="bg-[#1d282f] relative size-full"
      data-name="infographic_template_Testing"
    >
      <CardBg />
      <TextBg />
      <Content />
    </div>
  );
}