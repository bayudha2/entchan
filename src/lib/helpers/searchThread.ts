import { store } from '@/app/store';
import { setShown } from '@/app/store/slices/thread';
import isInViewport from '@/lib/helpers/isInViewport';

export function searchThread(e: any): void {
  const getId = e.target.innerText.replace('>>', '') as string;
  const whichThread = document.getElementById(getId) as HTMLElement;

  if (!whichThread) return;
  if (!!whichThread && !isInViewport(whichThread)) {
    store.dispatch(setShown({ payload: true }));
    return;
  }

  whichThread.classList.remove('bg-[#313037]');
  whichThread.classList.add('bg-[#4b2750]');
}

export function searchThreadRemove(e: any): void {
  const getId = e.target.innerText.replace('>>', '') as string;
  const whichThread = document.getElementById(getId) as HTMLElement;

  if (!whichThread) return;
  if (!!whichThread && !isInViewport(whichThread)) {
    store.dispatch(setShown({ payload: false }));
    return;
  }

  whichThread.classList.remove('bg-[#4b2750]');
  whichThread.classList.add('bg-[#313037]');
}
