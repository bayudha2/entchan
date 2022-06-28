export function handleQuoteFormat(textData: string | undefined) {
  const anchorPara: RegExp = /^[>]{2}[0-9]*$/;
  // const quotePara: RegExp = /^[>]{1}/;
  const parser: DOMParser = new DOMParser();

  const result = parser.parseFromString(textData as string, 'text/html');
  result.body.childNodes.forEach((item) => {
    const elem = item as HTMLElement;
    if (anchorPara.test(item?.textContent as string)) {
      // return elem.classList.add('text-teal-200 ');
      elem.innerHTML = `<a class="text-teal-200 underline cursor-pointer" href="/">${elem?.textContent}</a>`;
      console.log(elem);
    }
    return elem;
  });
  console.log(result.body);
}
