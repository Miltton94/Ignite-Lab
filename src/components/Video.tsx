import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  CaretRight,
  Image,
} from "phosphor-react";

import ReactPlayer from "react-player";

import Footer from "./Footer";

import { gql, useQuery } from "@apollo/client";

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonsBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;

interface LessonProps {
  lessonSlug: string;
}

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;

    teacher: {
      name: string;
      bio: string;
      avatarURL: string;
    };
  };
}

const Video = ({ lessonSlug }: LessonProps) => {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug,
    },
  });

  console.log(data);

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 sm:w-[340px]">
      <div className="bg-black justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          {data && (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${data.lesson.videoId}`}
              width="100%"
              height="100%"
              controls={true}
            
            />
          )}
        </div>
      </div>

      <div className="px-8 pt-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16 lx:flex-col">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200">{data.lesson.description}</p>

            <div className="flex items-center gap-4 mt-6">
              <img
                src={data.lesson.teacher.avatarURL}
                alt="Professor"
                className="w-16 h-16 rounded-full border-blue-500 border-2"
              />

              <div className="flex flex-col leading-relaxed">
                <strong className="text-2xl font-bold">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-sm text-gray-200">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:self-center lg:w-full">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 rounded flex items-center font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade no discord
            </a>
            <a
              href="#"
              className="p-4 border border-blue-500 text-blue-500 rounded flex items-center font-bold uppercase gap-2 justify-center hover:bg-blue-500 transition-colors hover:text-gray-900">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 flex mb-20 lx:flex-col">
          <a
            href="#"
            className="bg-gray-700 max-h-[160px] rounded overflow-hidden flex items-center gap-3 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-screen p-6 flex items-center sm:p-4">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="font-bold text-2xl sm:text-xl ">
                Wallpapers exclusivos
              </strong>
              <p className="text-sm text-gray-200 mt-2 sm:text-xs">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className="bg-gray-700 max-h-[160px] rounded overflow-hidden flex items-center gap-4 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-screen p-6 flex items-center sm:p-4">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="font-bold text-2xl sm:text-xl">
                Material complementar
              </strong>
              <p className="text-sm text-gray-200 mt-2 sm:text-xs">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Video;
