import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-gray-800/50">
      <div className="container mx-auto py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl text-gray-200">
            <span>Movie App</span>
          </div>
        </div>
      </div>
    </header>
  );
}
