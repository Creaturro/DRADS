import imgGroup30680 from "figma:asset/e187e4ed5263e725bc395ae5194adb94abf167a2.png";

function CardBg() {
  return (
    <div
      className="absolute bg-[#1d282f] h-[349px] left-0 top-0 w-[595px]"
      data-name="card bg"
    />
  );
}

function TextBg() {
  return (
    <div
      className="absolute bg-[#26323a] h-[317px] left-[13px] rounded-xl top-[15px] w-[350px]"
      data-name="text bg"
    />
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Open_Sans:Regular',_sans-serif] gap-3.5 h-[312px] items-start justify-start leading-[0] not-italic p-[16px] relative rounded-lg shrink-0 text-[#ffffff] text-left w-[291px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[20px] w-full">
        <p className="block leading-[normal]">Brief and Research</p>
      </div>
      <div className="h-[134px] relative shrink-0 text-[14px] w-full">
        <p className="block leading-[22px]">
          This initial phase involves understanding the project requirements,
          target audience, and goals, followed by researching the market and
          competitors. However, in classical development, this stage often
          results in overly broad or imprecise scopes. Without rapid
          prototyping, there’s a risk of committing to features that may not
          align with actual user needs or market demands.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start left-[26px] p-0 top-3"
      data-name="content"
    >
      <Text />
      <div
        className="bg-center bg-cover bg-no-repeat h-[246px] shrink-0 w-[201px]"
        style={{ backgroundImage: `url('${imgGroup30680}')` }}
      />
    </div>
  );
}

export default function InfographicTemplateResearch() {
  return (
    <div
      className="bg-[#1d282f] relative size-full"
      data-name="infographic_template_research"
    >
      <CardBg />
      <TextBg />
      <Content />
    </div>
  );
}