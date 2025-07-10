import Card from './card';

export default function Projects() {
  return (
    <div className="relative mr-auto mt-10 md:mt-50 md:aspect-square">
      <div className="relative h-min max-w-full">
        <div className="matter absolute left-0 top-0 h-full hidden md:block"></div>
        <div
          className="md:inline-block md:w-20 md:absolute md:left-0 md:top-0
            h-full font-terminal text-5xl font-black text-white md:ml-[30vw]"
        >
          <h1
            className="text-center md:text-current projects-title capitalize
              md:[text-orientation:upright] md:[writing-mode:vertical-lr]"
          >
            Projects
          </h1>
        </div>
        <div
          className="flex flex-col mt-5 md:mt-0 md:flex-row gap-10 md:pl-30
            projects items-center md:items-start md:justify-start w-screen
            md:w-min"
        >
          <Card title="Card Title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, erat in efficitur facilisis, enim ligula facilisis
            enim, nec tincidunt enim erat in enim. Sed consectetur, erat in
            efficitur facilisis, enim ligula facilisis enim, nec tincidunt enim
            erat in enim.
          </Card>
          <Card title="Card Title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, erat in efficitur facilisis, enim ligula facilisis
            enim, nec tincidunt enim erat in enim. Sed consectetur, erat in
            efficitur facilisis, enim ligula facilisis enim, nec tincidunt enim
            erat in enim.
          </Card>
          <Card title="Card Title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, erat in efficitur facilisis, enim ligula facilisis
            enim, nec tincidunt enim erat in enim. Sed consectetur, erat in
            efficitur facilisis, enim ligula facilisis enim, nec tincidunt enim
            erat in enim.
          </Card>
          <Card title="Card Title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, erat in efficitur facilisis, enim ligula facilisis
            enim, nec tincidunt enim erat in enim. Sed consectetur, erat in
            efficitur facilisis, enim ligula facilisis enim, nec tincidunt enim
            erat in enim.
          </Card>
        </div>
      </div>
    </div>
  );
}
