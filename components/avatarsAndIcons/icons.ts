

export const eventSvgArray = [
  "beer.svg",
  "car.svg",
  "coffee.svg",
  "heart.svg",
  "movie.svg",
  "gift.svg",
  "cutlery.svg",
  "shopping.svg",
  "cog.svg",
];

export const eventIcons = eventSvgArray.map((a) => {
    const obj = {
      name: a,
      svg: `/svgs/events/${a}`,
    };
    return obj;
});

export default function getIconObj(name:string){
  const eventIcon = eventIcons.find((e) => e.name === name);
  return eventIcon?eventIcon.svg:''
}