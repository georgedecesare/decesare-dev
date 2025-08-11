import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TutorPage() {
  return (
    <>
      <div className="mx-[10vw] flex flex-col gap-5 items-center">
        <div className="flex flex-row items-center justify-center gap-10 mt-7">
          <div
            className="aspect-square w-40 rounded-full overflow-hidden
              bg-gray-200 flex items-center justify-center"
          >
            <Image
              src="/me.jpg"
              alt="George Decesare"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="font-extrabold text-5xl">George Decesare</h1>
            <h2 className="font-semibold mt-3">
              Maths and Computer Science Tutor
            </h2>
            <span className="flex flex-row items-center gap-1 mt-2 text-sm">
              <MapPin size={16} strokeWidth={0.75} />
              <p className="font-light"> London, Remote</p>
            </span>
          </div>
        </div>
        <p>
          Master GCSE and A Level Maths and Computer Science with{' '}
          <strong>one-to-one</strong>, tailored tutoring and gain{' '}
          <strong>exam confidence</strong> and passion from someone who knows
          the system well.
          <br />
          In just a few years, GCSE and A-level results shape your entire career
          opportunities — the time to secure your future is now.
        </p>
        <div
          className="bg-blue-800 py-3 px-7 rounded-sm text-sm font-bold
            cursor-pointer"
        >
          <Link href="mailto:tutor@decesare.dev?subject=Tutoring%20Enquiry">
            Contact me for a free taster
          </Link>
        </div>
      </div>
      <div className="mx-10 mt-10">
        <h1 className="text-2xl font-bold">About Me</h1>
        <p>
          I&apos;m a third year undergraduate student reading Computing at{' '}
          <strong>Imperial College London</strong>, recently ranked
          Europe&apos;s<strong> best university</strong> and second best in the
          world. I come from a strongly mathematical academic education, and
          continue to study a very maths-based course.
        </p>
        <h1 className="text-2xl font-bold mt-10">Education</h1>
        <p>
          After obtaining <strong>11 GCSEs at Grade 9</strong>, I went on to
          study <strong>Maths, Further Maths and Chemistry</strong> at A Level,
          proudly achieving an <strong>A* in each</strong>. I&apos;m now
          studying my dream subject at Imperial College London in one of the
          most competitive courses in the country.
        </p>
        <h1 className="text-2xl font-bold mt-10">Experience</h1>
        <p>
          I&apos;ve volunteered to help teach at school and also been paid by my
          university to provide regular assistance over the last year to first
          years in their lab sessions, following a competitive selection process
          within my cohort.
        </p>
        <h1 className="text-2xl font-bold mt-10">My Skills</h1>
        <p>
          Everyone likes to say that they just aren&apos;t good at maths or need
          more help than other people but I have never found that to be true. I
          believe that providing careful explanations to encourage a{' '}
          <strong>deep understanding</strong> - not just surface-level rote
          learning - can have a transformative impact.
          <br />
          <br />
          However, I also know that exams are{' '}
          <strong>incredibly specific</strong>. You need to learn not just your
          subject, but its mark scheme. That&apos;s where my familiarity with
          the system can help: I know what examiners are looking for, because I
          dedicated years of my life to learning it myself.
        </p>
        <h1 className="text-2xl font-bold mt-10">Subjects</h1>
        <p>I offer the following subjects for tutoring for any exam board:</p>
        <ol className="ml-10 list-disc">
          <li>GCSE Maths</li>
          <li>A Level Maths</li>
          <li>GCSE Computer Science</li>
          <li>A Level Computer Science (including programming)</li>
          <li>Mathematics university admissions (STEP, TMUA, MAT)</li>
          <li>
            A Level Further Mathematics (pure, mechanics, statistics, decision)
            with each subject on request
          </li>
        </ol>
        <h1 className="text-2xl font-bold mt-10">Rate</h1>
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
          There is of course an initial <strong>complementary session</strong>{' '}
          which allows both of us to see if we are a good fit.
          <br />
          <br />
          Not everyone is in the position to afford this but I don&apos;t think
          a child who wants to learn should go without. Please do let me know if
          you have provable financial need and I will do my best to accommodate.
        </p>
        <h1 className="text-2xl font-bold mt-10">Contact Me</h1>
        <p>
          If you have any questions I&apos;m happy to answer them via{' '}
          <Link
            href="mailto:tutor@decesare.dev?subject=Tutoring%20Enquiry"
            className="font-bold underline"
          >
            email
          </Link>
          . If you are interested in booking a taster session then please first
          let me know your child&apos;s current level, subject and exam board
          (e.g. Year 11 Edexcel Maths). Additional information about specific
          struggles would also be great.
        </p>
      </div>
      <div className="mb-[150px]"></div>
    </>
  );
}
