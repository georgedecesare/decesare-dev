import {
  COriginal,
  DartOriginal,
  DockerOriginal,
  FlutterOriginal,
  GithubactionsOriginal,
  GitlabOriginal,
  GitOriginal,
  HaskellOriginal,
  JavascriptOriginal,
  NeovimOriginal,
  NextjsOriginal,
  NodejsOriginal,
  NuxtOriginal,
  ReactOriginal,
  ScalaOriginal,
  TypescriptOriginal,
  VuejsOriginal,
} from 'devicons-react';
import { BookOpenText } from 'lucide-react';
import { JSX } from 'react';

const IconMap: Record<string, JSX.Element> = {
  Haskell: <HaskellOriginal size={50} width={50} height={50} />,
  JavaScript: <JavascriptOriginal size={50} width={50} height={50} />,
  TypeScript: <TypescriptOriginal size={50} width={50} height={50} />,
  React: <ReactOriginal size={50} width={50} height={50} />,
  Prisma: (
    <svg
      width="50px"
      height="50px"
      viewBox="-27 0 310 310"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M254.312882,235.518775 L148.000961,9.74987264 C145.309805,4.08935083 139.731924,0.359884549 133.472618,0.0359753113 C127.198908,-0.384374336 121.212054,2.71925839 117.939655,8.08838662 L2.63252565,194.847143 C-0.947129465,200.604248 -0.871814894,207.912774 2.8257217,213.594888 L59.2003287,300.896318 C63.5805009,307.626626 71.8662281,310.673635 79.5631922,308.384597 L243.161606,259.992851 C248.145475,258.535702 252.252801,254.989363 254.421072,250.271225 C256.559881,245.57581 256.523135,240.176915 254.32061,235.511047 L254.312882,235.518775 Z M230.511129,245.201761 L91.6881763,286.252058 C87.4533189,287.511696 83.388474,283.840971 84.269448,279.567474 L133.866738,42.0831633 C134.794079,37.6396542 140.929985,36.9364206 142.869673,41.0476325 L234.684164,236.021085 C235.505704,237.779423 235.515611,239.809427 234.711272,241.575701 C233.906934,243.341974 232.369115,244.667163 230.503401,245.201761 L230.511129,245.201761 Z"
          fill="#ffffff"
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  ),
  'Node.js': <NodejsOriginal size={50} width={50} height={50} />,
  Nuxt: <NuxtOriginal size={50} width={50} height={50} />,
  Vue: <VuejsOriginal size={50} width={50} height={50} />,
  'Next.js': <NextjsOriginal size={50} width={50} height={50} />,
  Flutter: <FlutterOriginal size={50} width={50} height={50} />,
  'GitHub Actions': <GithubactionsOriginal size={50} width={50} height={50} />,
  'GitLab CI': <GitlabOriginal size={50} width={50} height={50} />,
  C: <COriginal size={50} width={50} height={50} />,
  Dart: <DartOriginal size={50} width={50} height={50} />,
  Docker: <DockerOriginal size={50} width={50} height={50} />,
  git: <GitOriginal size={50} width={50} height={50} />,
  NeoVim: <NeovimOriginal size={50} width={50} height={50} />,
  Scala: <ScalaOriginal size={50} width={50} height={50} />,
};

export default function getIcon(icon: string): JSX.Element {
  return IconMap[icon] ?? <BookOpenText size={50} />;
}
