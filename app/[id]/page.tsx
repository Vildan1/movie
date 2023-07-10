import { AiFillLike } from "react-icons/ai";
import { BiSolidHomeHeart } from "react-icons/bi";
import { BsBookmarkStarFill } from "react-icons/bs";
import { HiStar } from "react-icons/hi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 bg-[#96c3ec]">
      <div>
        <div>Film ID: {params.id}</div>
        <div className="flex overflow-x-auto snap-proximity snap-x mb-4">
          <div className="snap-normal snap-center me-2 px-2 bg-gray-500 rounded-full text-white">
            aksiyonzxss
          </div>
          <div className="snap-normal snap-center me-2 px-2 bg-gray-500 rounded-full text-white">
            aksiyon
          </div>
          <div className="snap-normal snap-center me-2 px-2 bg-gray-500 rounded-full text-white">
            aksiyon
          </div>
          <div className="snap-normal snap-center me-2 px-2 bg-gray-500 rounded-full text-white">
            aksiyon
          </div>
          <div className="snap-normal snap-center me-2 px-2 bg-gray-500 rounded-full text-white">
            aksiyon
          </div>
          <div className="snap-normal snap-center me-2 px-2 bg-gray-500 rounded-full text-white">
            macera
          </div>
          <div className="snap-normal snap-center me-2 px-2 bg-gray-500 rounded-full text-white">
            korku
          </div>
        </div>
        <p className="text-white mb-4"> 1- Star Wars 1. Bölüm Yeni Bir Umut</p>

        <div className="flex mb-2">
          <div className="col me-2 text-gray-500">
            <AiFillLike size={35} />
          </div>
          <div className="col text-white mt-2"> 3500</div>
        </div>
        <div className="flex mb-2">
          <div className="col me-2 text-gray-500">
            <RiMoneyDollarBoxFill size={35} />
          </div>
          <div className="col text-white mt-2"> 200000000</div>
        </div>
        <div className="flex mb-2">
          <div className="col me-2 text-gray-500">
            <BsBookmarkStarFill size={35} />
          </div>
          <div className="col text-white me-2 mt-2">9,2 puan</div>
          <div className="col mt-2">
            <div className="flex space-x">
              <div>
                <HiStar className="mt-1 text-white" />
              </div>
              <div>
                <HiStar className="mt-1 text-white" />
              </div>
              <div>
                <HiStar className="mt-1 text-white" />
              </div>
              <div>
                <HiStar className="mt-1 text-white" />
              </div>
              <div>
                <HiStar className="mt-1 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mb-2">
          <div className="col me-2 text-gray-500">
            <BiSolidHomeHeart size={35} />
          </div>
          <div className="col text-white mt-2"> populerlik 358000</div>
        </div>
        <p className="text-white text-justify mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, minus
          dolor! Consectetur, sit possimus earum ex ad voluptates distinctio
          sequi, quod est reiciendis illo laboriosam excepturi voluptatum
          ratione quis? Cupiditate! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci consectetur officia perspiciatis aut quis
          culpa inventore nobis minus.
        </p>
      </div>
    </main>
  );
}
