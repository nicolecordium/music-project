var moment = require('moment');
var dateFormat = 'YYYY-MM-dd';
var startDate = new moment('1970-1-1', dateFormat);

exports.convertDateStringToDayNumber = function (dateString) {
	var parsedDate = new moment(dateString, dateFormat);
	var dayNumber = parsedDate.diff(startDate, 'd', false);

	return dayNumber;
};

exports.getIsoWeekFromDayNumber = function (dayNumber) {
	var parsedDate = moment(startDate).add(dayNumber, 'd');
	var weekYear = parsedDate.isoWeekYear();
	var week = parsedDate.isoWeek();

	return weekYear + '-W' + (week > 9 ? week : '0' + week);
};
