import Image from 'next/image';

export default function CastCard({ name, character, image }) {
  return (
    <div className="col-span-1 sm:col-span-1">
      <div className="block w-full h-full rounded-lg bg-gray-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          {image === null ? (
            <Image
              src={`https://via.placeholder.com/138x175`}
              alt=""
              width={138}
              height={175}
              className="rounded-t-lg w-full"
            />
          ) : (
            <Image
              src={`https://image.tmdb.org/t/p/w138_and_h175_face${image}`}
              alt=""
              width={138}
              height={175}
              className="rounded-t-lg w-full"
            />
          )}
        </div>
        <div className="flex flex-col p-2 text-sm">
          <span>{name}</span>
          <span className="text-gray-400">{character}</span>
        </div>
      </div>
    </div>
  );
}
