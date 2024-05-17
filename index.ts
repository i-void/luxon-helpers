import { DateTime, DurationLike, Settings } from "luxon"

export function setDefaultZone(zone: string) {
  Settings.defaultZone = zone
}

export function diff(date1: Date, date2: Date) {
  const aLux = DateTime.fromJSDate(date1)
  const bLux = DateTime.fromJSDate(date2)
  return bLux.diff(aLux)
}

// curried version
export function cDiff(date2: Date) {
  return (date: Date) => diff(date, date2);
}

export function minus(date: Date, dur: DurationLike) {
  const aLux = DateTime.fromJSDate(date)
  return aLux.minus(dur).toJSDate()
}

// curried version
export function cMinus(dur: DurationLike) {
  return (date: Date) => minus(date, dur);
}

export function plus(date: Date, dur: DurationLike) {
  const aLux = DateTime.fromJSDate(date)
  return aLux.plus(dur).toJSDate()
}

// curried version
export function cPlus(dur: DurationLike) {
  return (date: Date) => plus(date, dur);
}

export function toIso(date: Date) {
  const aLux = DateTime.fromJSDate(date)
  const res = aLux.toUTC().toISO()
  if (!res) throw new Error('Invalid date')
  return res
}

export function toLocalIso(date: Date) {
  const aLux = DateTime.fromJSDate(date).toLocal()
  const res = aLux.toISO()
  if (!res) throw new Error('Invalid date')
  return res
}

export function fromIso(date: string) {
  return DateTime.fromISO(date).toJSDate()
}

export function now() {
  return DateTime.now().toJSDate()
}

export function toTimestamp(date: Date) {
  return date.getTime()
}

export function findNextNthMinute(dateTime: Date, n: number) {
  const luxonDateTime = DateTime.fromJSDate(dateTime)
  const nextTensMinute = Math.ceil(luxonDateTime.minute / n) * n;
  let result = luxonDateTime.set({ minute: nextTensMinute % 60, second: 0, millisecond: 0 });
  if (nextTensMinute >= 60) {
    result = result.plus({ hours: 1 });
  }
  return result.toJSDate()
}

// curried version
export function cFindNextNthMinute(n: number) {
  return (dateTime: Date) => findNextNthMinute(dateTime, n);
}

export function startOfDay(date: Date) {
  return DateTime.fromJSDate(date).startOf('day').toJSDate()
}

export function endOfDay(date: Date) {
  return DateTime.fromJSDate(date).endOf('day').toJSDate()
}

export function startOfMonth(date: Date) {
  return DateTime.fromJSDate(date).startOf('month').toJSDate()
}

export function endOfMonth(date: Date) {
  return DateTime.fromJSDate(date).endOf('month').toJSDate()
}

export function startOfYear(date: Date) {
  return DateTime.fromJSDate(date).startOf('year').toJSDate()
}

export function endOfYear(date: Date) {
  return DateTime.fromJSDate(date).endOf('year').toJSDate()
}

export function startOfHour(date: Date) {
  return DateTime.fromJSDate(date).startOf('hour').toJSDate()
}

export function endOfHour(date: Date) {
  return DateTime.fromJSDate(date).endOf('hour').toJSDate()
}

export function gt(date1: Date, date2: Date) {
  return DateTime.fromJSDate(date1) > DateTime.fromJSDate(date2)
}

export function gte(date1: Date, date2: Date) {
  return DateTime.fromJSDate(date1) >= DateTime.fromJSDate(date2)
}

export function lt(date1: Date, date2: Date) {
  return DateTime.fromJSDate(date1) < DateTime.fromJSDate(date2)
}

export function lte(date1: Date, date2: Date) {
  return DateTime.fromJSDate(date1) <= DateTime.fromJSDate(date2)
}

export function eq(date1: Date, date2: Date) {
  return DateTime.fromJSDate(date1) === DateTime.fromJSDate(date2)
}

