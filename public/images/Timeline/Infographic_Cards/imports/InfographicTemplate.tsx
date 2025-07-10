import imgLiveTesting1 from "figma:asset/5a2a015794362a7649889834520ce8888e164429.png";

function CardBg() {
  return (
    <div
      className="absolute bg-[#25202d] h-[283px] left-0 top-[-21px] w-[595px]"
      data-name="card bg"
    />
  );
}

function TextBg() {
  return (
    <div
      className="absolute bg-[#302a38] h-[223px] left-[13px] rounded-xl top-5 w-[350px]"
      data-name="text bg"
    />
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3.5 h-48 items-start justify-start leading-[0] not-italic p-[16px] relative rounded-lg shrink-0 text-[#ffffff] text-left w-[291px]"
      data-name="text"
    >
      <div className="font-['Open_Sans:Regular',_sans-serif] relative shrink-0 text-[20px] w-full">
        <p className="block leading-[normal]">Live Testing</p>
      </div>
      <div className="font-['Open_Sans:Regular',_'Noto_Sans:Regular',_sans-serif] h-[134px] relative shrink-0 text-[14px] w-full">
        <p className="block leading-[22px] whitespace-pre-wrap">{`The application is swiftly deployed using pre-configured environments, allowing immediate testing and validation to ensure the app meets the desired specifications and functions  correctly.`}</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-[232px] items-center justify-start left-[26px] p-0 top-[17px]"
      data-name="content"
    >
      <Text />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-center bg-cover bg-no-repeat h-[262px] w-[277px]"
            data-name="Live Testing 1"
            style={{ backgroundImage: `url('${imgLiveTesting1}')` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function InfographicTemplate() {
  return (
    <div
      className="bg-[#25202d] relative size-full"
      data-name="infographic_template"
    >
      <CardBg />
      <TextBg />
      <Content />
    </div>
  );
}