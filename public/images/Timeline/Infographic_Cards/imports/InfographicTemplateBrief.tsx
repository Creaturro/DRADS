import imgImage from "figma:asset/b178ca30eb819960fb0afd0f960a6daca3976d51.png";

function CardBg() {
  return (
    <div
      className="absolute bg-[#25202d] h-[333px] left-0 top-[-9px] w-[595px]"
      data-name="card bg"
    />
  );
}

function TextBg() {
  return (
    <div
      className="absolute bg-[#302a38] h-[210px] left-[13px] rounded-xl top-1/2 -translate-y-1/2 w-[350px]"
      data-name="text bg"
    />
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Open_Sans:Regular',_sans-serif] gap-3.5 h-32 items-start justify-start leading-[0] not-italic p-[16px] relative rounded-lg shrink-0 text-[#ffffff] text-left w-[291px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[20px] w-full">
        <p className="block leading-[normal]">Brief and Research</p>
      </div>
      <div className="h-[134px] relative shrink-0 text-[14px] w-full">
        <p className="block leading-[22px]">
          The initial specs are narrow and highly focused with the goal of
          starting the implementation ASAP.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-[209px] items-center justify-start left-[26px] p-0 top-1/2 -translate-y-1/2"
      data-name="content"
    >
      <Text />
      <div
        className="bg-center bg-cover bg-no-repeat h-[246px] shrink-0 w-[201px]"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
    </div>
  );
}

export default function InfographicTemplateBrief() {
  return (
    <div
      className="bg-[#25202d] relative size-full"
      data-name="infographic_template_brief"
    >
      <CardBg />
      <TextBg />
      <Content />
    </div>
  );
}