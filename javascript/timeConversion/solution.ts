function timeConversion(s: string): string {
  const matchResult: RegExpMatchArray | null = s.match(/[A-Z]+/);
  if (matchResult === null) {
    throw new Error("Invalid input string: missing AM/PM");
  }
  const dayTime = matchResult[0] as "AM" | "PM";

  let strippedTime: string = s.split(/[A-Z]+/)[0]
  let splitTime: string[] = strippedTime.split(":")
  const hour: number = parseInt(splitTime[0], 10)

  const convertObject: Record<"AM" | "PM", () => string> = {
    "AM": function(): string {
      if (hour === 12) {
        splitTime[0] = "00"
        return splitTime.join(":")
      } else {
        return strippedTime;
      }
    },
    "PM": function(): string {
      if (hour === 12) {
        return strippedTime
      } else {
        splitTime[0] = (hour + 12).toString()
      }
      return splitTime.join(":")
    }
  }
  return convertObject[dayTime]();
}

console.log(timeConversion("07:05:45PM"))
console.log(timeConversion("12:05:45AM"))
console.log(timeConversion("12:45:54PM"))