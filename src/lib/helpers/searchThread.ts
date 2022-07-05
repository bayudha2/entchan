import { store } from '@/app/store';
import { getThreadDetail, setShown } from '@/app/store/slices/thread';
import isInViewport from '@/lib/helpers/isInViewport';

export async function searchThread(e: any): Promise<void> {
  const getId = e.target.innerText.trim().replace('>>', 't_') as string;
  const whichThread = document.querySelector(`#${getId}`) as HTMLElement;

  console.log('getId', getId);
  console.log('whichThread', whichThread);

  if (!isInViewport(whichThread)) {
    store.dispatch(setShown({ payload: true }));
    store.dispatch(getThreadDetail());
    return;
  }

  whichThread.classList.remove('bg-[#313037]');
  whichThread.classList.add('bg-[#4b2750]');
}

export function searchThreadRemove(e: any): void {
  const getId = e.target.innerText.trim().replace('>>', 't_') as string;
  const whichThread = document.getElementById(getId) as HTMLElement;

  store.dispatch(setShown({ payload: false }));

  if (!whichThread) return;
  whichThread.classList.remove('bg-[#4b2750]');
  whichThread.classList.add('bg-[#313037]');
}
