export const calculateDiffDividedBy100 = (num1: number, num2: number) => {
    return Math.abs(num2 - num1) / 100
}

/**
 *
 * Calculates the percentage between 0% and 100% based on fromScroll toScroll and scrollTop value
 * @param fromScroll (fromScroll = 0%)
 * @param toScroll (toScroll = 100%)
 * @param scrollTop (current scrollTop value)
 */

export const calculatePercentageOfTheCurrentScrollTopValue = (
    fromScroll: number,
    toScroll: number,
    scrollTop: number
) =>
    100 -
    (toScroll - scrollTop) / calculateDiffDividedBy100(toScroll, fromScroll)

export const isInScrollArea = (
    fromScroll: number,
    toScroll: number,
    scrollTop: number
) => {
    return fromScroll <= scrollTop && scrollTop <= toScroll
}

export const exceededScrollArea = (toScroll: number, scrollTop: number) => {
    return scrollTop > toScroll
}
