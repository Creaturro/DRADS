import imgImage from "figma:asset/b106c9ec789dd0de33817c3567174b14972c8b9a.png";

function CardBg() {
  return (
    <div
      className="absolute bg-[#25202d] h-[333px] left-0 top-[-21px] w-[595px]"
      data-name="card bg"
    />
  );
}

function TextBg() {
  return (
    <div
      className="absolute bg-[#302a38] h-[205px] left-[13px] rounded-xl top-5 w-[350px]"
      data-name="text bg"
    />
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Open_Sans:Regular',_sans-serif] gap-3.5 h-[148px] items-start justify-start leading-[0] not-italic p-[16px] relative rounded-lg shrink-0 text-[#ffffff] text-left w-[291px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[20px] w-full">
        <p className="block leading-[normal]">Asynchronous Design Work</p>
      </div>
      <div className="h-[134px] relative shrink-0 text-[14px] w-full">
        <p className="block leading-[22px]">
          Design is happening along side the app development. The interface
          elements are added into the app directly and are instantly connected
          to the app code.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-[26px] p-0 top-1/2 -translate-y-1/2"
      data-name="content"
    >
      <Text />
      <div
        className="bg-center bg-cover bg-no-repeat h-[226px] shrink-0 w-[195px]"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
    </div>
  );
}

export default function InfographicTemplateDesign() {
  return (
    <div
      className="bg-[#25202d] relative size-full"
      data-name="infographic_template_design"
    >
      <CardBg />
      <TextBg />
      <Content />
    </div>
  );
}