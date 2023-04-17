type DayUnit = "year"
    | "month"
    | "day"
    | "hour"
    | "minute"
    | "second"
    | "millisecond";


export default class Dayjs {
    private date: Date
    constructor(date?: string | number | Date) {
        this.date = date ? new Date(date) : new Date()
    }

    get timestamp() {
        return this.date.getTime()
    }

    get year() {
        return this.date.getFullYear()
    }

    get month() {
        return this.date.getMonth() + 1
    }

    get week() {
        return this.date.getDay()
    }

    get day() {
        return this.date.getDate()
    }

    get hour() {
        return this.date.getHours()
    }

    get minute() {
        return this.date.getMinutes()
    }

    get second() {
        return this.date.getSeconds()
    }

    get millisecond() {
        return this.date.getMilliseconds()
    }

    get raw() {
        return this.date
    }



    public firstDayOfMonth() {
        return new Dayjs(
            new Date(
                this.year,
                this.month,
                1,
                0,
                0,
                0)
        )
    }

    public lastDayOfMonth() {
        return this.firstDayOfMonth().add(-1, 'day')
    }

    public add(amount: number, unit: DayUnit) {
        let date = new Date(this.date.getTime());
        switch (unit) {
            case 'year':
                const currentDate = date.getDate()
                date.setDate(1)
                date.setFullYear(date.getFullYear() + amount)
                const targetDate = new Date(
                    date.getFullYear(),
                    date.getMonth() + 1,
                    0,
                    0,
                    0,
                    0,
                ).getDate()
                date.setDate(Math.min(currentDate, targetDate))
                break;
            case 'month':
                const d = date.getDate()
                date.setDate(1)
                date.setMonth(date.getMonth() + amount);
                const d2 = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0).getDate()
                date.setDate(Math.min(d, d2))
                break;
            case 'day':
                date.setDate(date.getDate() + amount);
                break;
            case 'hour':
                date.setHours(date.getHours() + amount);
                break;
            case 'minute':
                date.setMinutes(date.getMinutes() + amount);
                break;
            case 'second':
                date.setSeconds(date.getSeconds() + amount);
                break;
            case 'millisecond':
                date.setMilliseconds(date.getMilliseconds() + amount);
                break;

            default:
                throw new Error('Time.add: unknown unit');
        }
        return new Dayjs(date)
    }

    public set(amount: number, unit: DayUnit) {
        const date = new Date(this.date.getTime())
        switch (unit) {
            case "year":
                date.setFullYear(amount)
                break
            case "month":
                date.setMonth(amount - 1)
                break
            case "day":
                date.setDate(amount)
                break
            case "hour":
                date.setHours(amount)
                break
            case "second":
                date.setSeconds(amount)
                break
            case "millisecond":
                date.setMilliseconds(amount)
                break
            default:
                throw new Error("Time.add: unknown unit")
        }
        return new Dayjs(date)
    }

    isSameDay(day: Dayjs) {
        return day.year === this.year && day.month === this.month && day.day === this.day
    }

    isSameMonth(day: Dayjs) {
        return day.year === this.year && day.month === this.month
    }

    isSameYear(day: Dayjs) {
        return day.year === this.year
    }
    //@ts-ignore
    format(pattern?: string = 'YYYY-MM-DD') {
        // 目前支持的格式有 YYYY MM DD HH mm ss SSS
        return pattern.replace(/YYYY/g, this.year.toString())
            .replace(/MM/, this.month.toString().padStart(2, '0'))
            .replace(/DD/, this.day.toString().padStart(2, '0'))
            .replace(/HH/, this.hour.toString().padStart(2, '0'))
            .replace(/mm/, this.minute.toString().padStart(2, '0'))
            .replace(/ss/, this.second.toString().padStart(2, '0'))
            .replace(/SSS/, this.millisecond.toString().padStart(3, '0'))
    }
}