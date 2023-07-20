function caculateDaysBetweenDates(begin, day) {
    const beginDate = new Date(begin);
    const endDate = new Date(day);
    const days = (endDate - beginDate) / (1000 * 60 * 60 * 24);
    return days;
}