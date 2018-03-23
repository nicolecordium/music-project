var request = require('request');
var dateService = require('../services/date.service');

exports.getArtistEvents = function(req, res, next){

    var artistId = req.params.artistId;
    var startDate = dateService.convertDateStringToDayNumber(req.query.startDate);
	var endDate = dateService.convertDateStringToDayNumber(req.query.endDate);
	var accessToken = process.env.API_KEY;
	var uri = process.env.BASE_URI + '/events/v1/entity/' + artistId + '?start=' + startDate + '&end=' + endDate + '&access_token=' + accessToken;

	console.log(uri);
    try {		
		request.get(uri, (error, response, body) => {
			var parsedBody = JSON.parse(body);

			// group day event counts by week
			var weekCounts = {};
			for (var dayNumber in parsedBody) {
				var isoWeek = dateService.getIsoWeekFromDayNumber(dayNumber);

				if (!weekCounts[isoWeek]) {
					weekCounts[isoWeek] = {};
				}

				// group event counts by type
				var currentDayEventTypeCounts = mapEventTypes(parsedBody[dayNumber].event_types);
				for (var eventType in currentDayEventTypeCounts) {
					var eventTypeCount = currentDayEventTypeCounts[eventType];
					if (weekCounts[isoWeek][eventType]) {
						weekCounts[isoWeek][eventType] += eventTypeCount;
					} else {
						weekCounts[isoWeek][eventType] = eventTypeCount;
					}
				}
			}

			return res.status(200).json({counts: weekCounts});
		});
        
    } catch(e) {
        return res.status(400).json({status: 400, message: e.message});        
    }
}

function mapEventTypes (eventTypesField) {
	var eventCounts = {};
	for (var eventType in eventTypesField) {
		eventCounts[eventType] = eventTypesField[eventType].events.length;
	}

	return eventCounts;
}


