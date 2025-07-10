import imgDevelopment from "figma:asset/6f2ed35332ba46e6d6402bd80cd2d818319e9136.png";

function CardBg() {
  return (
    <div
      className="absolute bg-[#1d282f] h-[307px] left-0 top-0 w-[595px]"
      data-name="card bg"
    />
  );
}

function TextBg() {
  return (
    <div
      className="absolute bg-[#26323a] h-[273px] left-[13px] rounded-xl top-[19px] w-[350px]"
      data-name="text bg"
    />
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Open_Sans:Regular',_sans-serif] gap-3.5 h-[262px] items-start justify-start leading-[0] not-italic p-[16px] relative rounded-lg shrink-0 text-[#ffffff] text-left w-[291px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[20px] w-full">
        <p className="block leading-[normal]">Backend Coding</p>
      </div>
      <div className="h-[198px] relative shrink-0 text-[14px] w-full">
        <p className="block leading-[22px]">
          This stage involves developing the server-side logic, databases,
          handling of data processing, With classic development approaches and
          without leveraging existing external systems via APIs, this phase can
          become extremely time-consuming, often leading to reinventing the
          wheel and delaying overall project timelines.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-[296px] items-center justify-start left-[26px] p-0 top-0.5"
      data-name="content"
    >
      <Text />
      <div
        className="bg-center bg-cover bg-no-repeat h-[251px] shrink-0 w-[237px]"
        data-name="Development"
        style={{ backgroundImage: `url('${imgDevelopment}')` }}
      />
    </div>
  );
}

export default function InfographicTemplateFrontend() {
  return (
    <div
      className="bg-[#1d282f] relative size-full"
      data-name="infographic_template_frontend"
    >
      <CardBg />
      <TextBg />
      <Content />
    </div>
  );
}