import imgGroup30388 from "figma:asset/063d68bf8beafa191f4099a3519e6c2ab563513e.png";

function CardBg() {
  return (
    <div
      className="absolute bg-[#1d282f] h-[344px] left-0 top-0 w-[595px]"
      data-name="card bg"
    />
  );
}

function TextBg() {
  return (
    <div
      className="absolute bg-[#26323a] h-[315px] left-[13px] rounded-xl top-[9px] w-[350px]"
      data-name="text bg"
    />
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Open_Sans:Regular',_sans-serif] gap-3.5 h-[306px] items-start justify-start leading-[0] not-italic pb-4 pt-1.5 px-4 relative rounded-lg shrink-0 text-[#ffffff] text-left w-[291px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[20px] w-full">
        <p className="block leading-[normal]">
          Setting up the production environment
        </p>
      </div>
      <div className="h-[230px] relative shrink-0 text-[14px] w-full">
        <p className="block leading-[22px]">
          Developers deploy the application to a live server, configure
          necessary services, and ensure security measures are in place,
          preparing the app for public use. in the standard approach, this phase
          can be significantly time-consuming. This process often involves
          complex infrastructure decisions and implementations that can delay
          the actual launch of the application.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-[309px] items-center justify-start left-[26px] p-0 top-[15px]"
      data-name="content"
    >
      <Text />
      <div
        className="bg-center bg-cover bg-no-repeat h-[229px] shrink-0 w-[230px]"
        style={{ backgroundImage: `url('${imgGroup30388}')` }}
      />
    </div>
  );
}

export default function InfographicTemplateDevops() {
  return (
    <div
      className="bg-[#1d282f] relative size-full"
      data-name="infographic_template_devops"
    >
      <CardBg />
      <TextBg />
      <Content />
    </div>
  );
}