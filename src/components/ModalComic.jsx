import { useEffect, useState } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useGame } from '../context/GameProvider';
import comicsData from '../data/comics';
import cn from '../lib/tailwindMerge';
import CharDanHead from '../assets/CharDanHead';
import CharXiaHead from '../assets/CharXiaHead';
import Badge from '../assets/badge';

export default function ModalComic() {
  const navUpdate = useNavigationUpdate();
  const { level, name } = useGame();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const comicData = comicsData.find((comicData) => comicData.level === level);
  if (!comicData) return <h1>Not Found</h1>;

  const handleContinue = () => navUpdate('levelup');

  return (
    <div className='flex flex-col gap-10'>
      {/* TITLE */}
      <div className='flex flex-col items-center mb-10'>
        <Badge color={'#7E7E7E'} />
        <span
          style={{ color: '#7E7E7E' }}
          className='bg-black/70 uppercase text-lg text-center font-semibold tracking-[8px] px-6 py-1 pl-10 -mt-[46px] rounded-full drop-shadow-md'
        >
          {comicData.heading}
        </span>
      </div>

      {/* DIALOG */}
      <div className='flex flex-col gap-1 w-full items-center'>
        {comicData.comic.map((comic, index) => (
          <div
            key={index}
            className={cn(
              'flex flex-col w-2/3',
              index % 2 ? 'items-end origin-top-right' : 'items-start origin-top-left'
            )}
          >
            <div
              className={cn(
                index < 2 ? 'flex' : 'hidden',
                index % 2 ? 'translate-x-[105px]' : '-translate-x-[105px]',
                comic.character === 'Daniel' ? 'bg-blue-800/20' : 'bg-red-800/20',
                'absolute rounded-full w-24 h-24 items-center justify-center -translate-y-10 text-4xl'
              )}
            >
              {comic.character === 'Daniel' ? <CharDanHead /> : <CharXiaHead />}
            </div>
            <div
              className={cn(
                'z-10 bg-black/80 pl-6 pr-6 py-2 -mb-4 rounded-full text-[10px] uppercase tracking-widest',
                index % 2 ? 'rounded-br-none' : 'rounded-bl-none'
              )}
            >
              {comic.character}
            </div>
            <div
              className={cn(
                'rounded-xl backdrop-blur-sm bg-black/40 px-6 py-5 flex flex-col w-4/5 text-sm',
                index % 2 ? 'text-right rounded-tr-none' : 'text-left rounded-tl-none'
              )}
            >
              {comic.dialog}
            </div>
          </div>
        ))}
      </div>

      {/* CONTINUE BUTTON */}
      <div onClick={handleContinue} className='flex items-center justify-center cursor-pointer'>
        <span className='backdrop-blur-sm bg-black/70 px-8 py-4 pr-16 tracking-[0.3em] rounded-full'>CONTINUE</span>
        <div
          className={cn(
            'z-10 w-10 aspect-square flex items-center justify-center rounded-full -ml-12',
            'bg-white/60 hover:bg-white/80'
          )}
        >
          <PiPlayFill className='text-black/70 scale-110' />
        </div>
      </div>
    </div>
  );
}
