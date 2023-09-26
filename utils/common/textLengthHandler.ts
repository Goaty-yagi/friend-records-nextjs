
type TLHandlerProps = {
    ref: HTMLElement[] | HTMLElement,
    baseNumber?: number
}


export default function textLengthHandler({ ref, baseNumber = 16 }: TLHandlerProps) {
    function textLengthHandler(e: HTMLElement) {
        let init = false;
        while (e.clientHeight > baseNumber) {
            e.innerText =
                e.innerText.slice(0, e.innerText.length - (!init ? 3 : 1)) + "..";
            init = true;
        }
    }
    if (Array.isArray(ref)) {
        ref.forEach((e: HTMLElement) => {
            if (e) {
                textLengthHandler(e);
            }
        });
    } else {
        textLengthHandler(ref);
    }
}