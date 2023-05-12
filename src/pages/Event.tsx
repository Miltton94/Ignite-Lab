import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

import { useParams } from "react-router-dom";

const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col relative min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className=" flex flex-1 flex-col">
            <div className="flex flex-1 text-center items-center justify-center">
              <strong className="text-2xl">Clique em alguma aula</strong>
            </div>
            <Footer />
          </div>
        )}

        <div className="flex flex1 lg:hidden">
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Event;
