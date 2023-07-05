interface Props {
    date: string
}

export default function getYearMonthDate(date: string): string {
    const dt = new Date(date);
    const stringDT = dt.toLocaleString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    return stringDT.replace(/\//g, "-");
}
