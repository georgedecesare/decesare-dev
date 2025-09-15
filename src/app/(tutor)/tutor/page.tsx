import { GraduationCap, LibraryBig, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TutorPage() {
  return (
    <>
      <div
        className="w-screen px-10 md:px-[15vw] pb-10 flex flex-col gap-5
          items-center bg-darkblue"
      >
        <div className="flex flex-row items-center justify-center gap-10 mt-7">
          <div
            className="aspect-square w-full max-w-25 md:max-w-40 rounded-full
              overflow-hidden bg-gray-200 flex items-center justify-center"
          >
            <Image
              src="/me.jpg"
              alt="George Decesare"
              width={1024}
              height={1395}
              className="object-cover pt-7"
            />
          </div>
          <div>
            <h1 className="font-extrabold text-3xl font-modern">
              George Decesare
            </h1>
            <div className="hidden md:block">
              <h2 className="font-semibold mt-3 text-sm">
                Maths and Computer Science Tutor
              </h2>
              <span className="flex flex-row items-center gap-1 mt-2 text-xs">
                <MapPin size={16} strokeWidth={0.75} />
                <p className="font-light"> London (in person), Remote</p>
              </span>
            </div>
          </div>
        </div>
        <div className="md:hidden mt-[-10] mb-5">
          <h2 className="font-semibold mt-3 text-sm">
            Maths and Computer Science Tutor
          </h2>
          <span className="flex flex-row items-center gap-1 mt-2 text-xs">
            <MapPin size={16} strokeWidth={0.75} />
            <p className="font-light"> London (in person), Remote</p>
          </span>
        </div>
        <p className="italic text-sm font-light">
          Boost exam confidence, deepen understanding, and master the mark
          scheme.
          <br />
          Secure your future with <strong>
            tailored one-to-one tutoring
          </strong>{' '}
          in GCSE and A Level Maths and Computer Science with someone who knows
          what it&apos;s like to be on the other side of the whiteboard.
        </p>
        <div className="bg-darkerblue py-3 px-7 text-sm font-bold
          cursor-pointer">
          <Link
            className="font-modern uppercase"
            href="mailto:tutor@decesare.dev?subject=Tutoring%20Enquiry"
          >
            Contact me for a free first session
          </Link>
        </div>
      </div>
      <div
        className="text-sm font-normal text-darkblue [&_h1]:font-modern
          [&_h1]:text-lg [&_h1]:font-semibold [&_h1]:mt-5"
      >
        <div
          className="w-full px-10 md:px-[15vw] mt-10 grid grid-cols-1
            lg:grid-cols-2 md:gap-20"
        >
          <div>
            <h1 className="">About Me</h1>
            <p>
              I&apos;m a third year undergraduate student reading Computing at{' '}
              <strong>Imperial College London</strong>, recently ranked
              Europe&apos;s<strong> best university</strong> and second best in
              the world. I come from a strongly mathematical academic education,
              and continue to study a very maths-based course.
              <br />I offer personal tutoring sessions in GCSE and A Level Maths
              and Computer Science to coach those who need more confidence or
              want to be stretched to their full potential.
            </p>
            <ul className="ml-2 mt-5 font-semibold">
              <li className="flex flex-row items-center gap-3">
                <LibraryBig size={32} strokeWidth={1} />
                11 GCSEs at Grade 9
              </li>
              <li className="flex flex-row items-center gap-3">
                <Star size={32} strokeWidth={1} /> Straight A*s in Maths,
                Further Maths, Chemistry
              </li>
              <li className="flex flex-row items-center gap-3">
                <GraduationCap size={32} strokeWidth={1} /> Forecast a first at
                an elite university
              </li>
            </ul>
          </div>
          <div className="text-sm font-light">
            <h1>My Approach</h1>
            <p>
              There is a popular myth that mathematical proficiency is a talent
              that cannot be learnt but this is{' '}
              <strong>absolutely not true</strong>.
              <br />I believe that providing careful explanations to encourage a{' '}
              <strong>deep understanding</strong> - not just surface-level rote
              learning - can have a transformative impact.
              <br />
              <br />
              However, I also know that exams are{' '}
              <strong>incredibly specific</strong>. You need to learn not just
              your subject, but its <strong>mark scheme</strong>. That&apos;s
              where my familiarity with the system can help: I know what
              examiners are looking for, because I dedicated years of my life to
              learning it myself.
            </p>
          </div>
        </div>
        <p className="italic underline text-center">
          <br />
          <Link href="mailto:tutor@decesare.dev?subject=Tutoring%20Enquiry">
            Let&apos;s chat further about how I can help
          </Link>
        </p>
        <div
          className="mx-10 md:mx-[15vw] grid grid-cols-1 lg:grid-cols-2
            md:gap-20"
        >
          <div>
            <h1>Subjects</h1>
            <p>
              I offer the following subjects for tutoring for any exam board:
            </p>
            <ol className="ml-10 list-disc">
              <li>GCSE Maths</li>
              <li>A Level Maths</li>
              <li>GCSE Computer Science</li>
              <li>A Level Computer Science (including programming)</li>
              <li>Mathematics university admissions (STEP, TMUA, MAT)</li>
              <li>
                A Level Further Mathematics (pure, mechanics, statistics,
                decision) with each subject on request
              </li>
            </ol>
          </div>
          <div>
            <h1>Rate</h1>
            <p>I offer a competitive rate of</p>
            <ul className="list-disc ml-10">
              <li>
                GCSE - <strong>£30/hour</strong>
              </li>
              <li>
                A Level - <strong>£40/hour</strong>
              </li>
            </ul>
            <p>
              There is of course an initial{' '}
              <strong>complementary session</strong> which allows both of us to
              see if we are a good fit.
            </p>
            <h1 className="text-lg font-semiboldmt-10">Contact Me</h1>
            <p>
              If you have any questions I&apos;m happy to answer them via{' '}
              <Link
                href="mailto:tutor@decesare.dev?subject=Tutoring%20Enquiry"
                className="font-bold underline"
              >
                email
              </Link>
              . If you are interested in booking a taster session then
              don&apos;t hesitate to let me know and we can begin further
              discussions.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-[150px]"></div>
    </>
  );
}
