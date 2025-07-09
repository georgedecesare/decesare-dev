import Matter from 'matter-js';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';

const engine = Matter.Engine.create();
const runner = Matter.Runner.create();

export default function matterScript() {
  gsap.registerPlugin(SplitText);
  // Create an engine
  // module aliases
  const //Render = Matter.Render,
    //Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

  // const width = 800;
  const height = document.querySelector('.card')!.clientHeight;
  const card = document.querySelectorAll('.card')[0] as HTMLElement;

  const cardRect = card.getBoundingClientRect();
  const matterRect = (
    document.querySelector('.matter') as HTMLElement
  ).getBoundingClientRect();
  const x = cardRect.left - matterRect.left;
  const wallWidth = 20;
  const wall = Bodies.rectangle(
    x + wallWidth / 2,
    height / 2,
    wallWidth,
    height,
    {
      isStatic: true,
    }
  );
  Composite.add(engine.world, wall);

  // create a renderer
  // const render = Render.create({
  //   element: document.querySelector('.matter')! as HTMLElement,
  //   engine: engine,
  //   options: {
  //     width: width,
  //     height: height,
  //     wireframes: false,
  //     background: 'transparent',
  //   },
  // });

  // create two boxes and a ground
  const ground = Bodies.rectangle(400, height, 810, 60, { isStatic: true });

  const splitText = new SplitText('.projects-title', {
    type: 'chars',
    charsClass: 'border-1 bg-gray-container rounded-lg border-stone-700',
  });
  const objs = splitText.chars.map((char, i) => {
    const rect = char.getBoundingClientRect();
    const body = Bodies.rectangle(
      rect.left -
        matterRect.left +
        rect.width / 2 +
        ((i % 2 === 0 ? -1 : 1) * rect.width) / 8,
      //((Math.random() - 0.5) * rect.width) / 2,
      rect.top - matterRect.top + rect.height / 2,
      rect.width,
      rect.height,
      {
        isStatic: false,
        friction: 0.5,
        restitution: 0.1,
        render: {
          fillStyle: 'transparent',
        },
      }
    );
    Composite.add(engine.world, body);
    const render = () => {
      const x = body.position.x + matterRect.left - rect.left - rect.width / 2;
      const y = body.position.y + matterRect.top - rect.top - rect.height / 2;
      gsap.set(char, {
        x: x,
        y: y,
        rotate: body.angle,
      });
    };

    render();
    return {
      render: render,
    };
  });

  // add all of the bodies to the world
  Composite.add(engine.world, ground);

  // run the renderer (for debug)
  //Render.run(render);

  // run the engine
  //Runner.run(runner, engine);

  Matter.Events.on(engine, 'beforeUpdate', () => {
    const newX =
      card.getBoundingClientRect().left - matterRect.left + wallWidth / 2;
    Matter.Body.setPosition(wall, { x: newX, y: wall.position.y });
    objs.forEach((obj) => {
      obj.render();
    });
  });

  gsap.from(splitText.chars, {
    autoAlpha: 0,
    scale: 0.5,
    ease: 'power1.out',
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.projects-title',
      start: 'bottom 95%',
      scrub: false,
    },
  });
}

const startPhysics = () => {
  Matter.Runner.run(runner, engine);
};

export { startPhysics };
