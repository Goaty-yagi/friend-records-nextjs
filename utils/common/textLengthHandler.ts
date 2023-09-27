
type TLHandlerProps = {
    ref: HTMLElement[] | HTMLElement,
    baseNumber?: number
}

// for a case if the text in ref is folded to second line, it will omit with ..
export default function textLengthHandler({ ref, baseNumber = 16 }: TLHandlerProps) {
    function tlFunc(e: HTMLElement) {
        while (e.clientHeight > baseNumber) {
            e.innerText =
                e.innerText.slice(0, e.innerText.length - 3) + "..";
        }
    }
    if (Array.isArray(ref)) {
        ref.forEach((e: HTMLElement) => {
            if (e) {
                tlFunc(e);
            }
        });
    } else {
        tlFunc(ref);
    }
}