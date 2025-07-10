import imgGroup30484 from "figma:asset/69bb061e06a0d0cec38352363461f028914ca7fd.png";

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
      className="absolute bg-[#26323a] h-[257px] left-[13px] rounded-xl top-[45px] w-[350px]"
      data-name="text bg"
    />
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Open_Sans:Regular',_sans-serif] gap-3.5 h-[226px] items-start justify-start leading-[0] not-italic p-[16px] relative rounded-lg shrink-0 text-[#ffffff] text-left w-[291px]"
      data-name="text"
    >
      <div className="relative shrink-0 text-[20px] w-full">
        <p className="block leading-[normal]">Frontend Coding</p>
      </div>
      <div className="h-[165px] relative shrink-0 text-[14px] w-full">
        <p className="block leading-[22px]">
          Developers build the client-side of the application, translating
          designs into functional code using HTML, CSS, and JavaScript. Without
          iterative development, larger redesigns may be needed as user needs
          evolve or initial assumptions prove incorrect.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-[296px] items-center justify-start left-[26px] p-0 top-5"
      data-name="content"
    >
      <Text />
      <div
        className="bg-center bg-cover bg-no-repeat h-[316px] shrink-0 w-[281px]"
        style={{ backgroundImage: `url('${imgGroup30484}')` }}
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