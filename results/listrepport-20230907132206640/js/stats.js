var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "12704",
        "ok": "255",
        "ko": "12449"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "495",
        "ko": "30"
    },
    "maxResponseTime": {
        "total": "21421",
        "ok": "20576",
        "ko": "21421"
    },
    "meanResponseTime": {
        "total": "1174",
        "ok": "11419",
        "ko": "964"
    },
    "standardDeviation": {
        "total": "3249",
        "ok": "5812",
        "ko": "2808"
    },
    "percentiles1": {
        "total": "253",
        "ok": "11780",
        "ko": "248"
    },
    "percentiles2": {
        "total": "653",
        "ok": "17589",
        "ko": "615"
    },
    "percentiles3": {
        "total": "4568",
        "ok": "19017",
        "ko": "2235"
    },
    "percentiles4": {
        "total": "19162",
        "ok": "19960",
        "ko": "17298"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 245,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 12449,
    "percentage": 98
},
    "meanNumberOfRequestsPerSecond": {
        "total": "362.971",
        "ok": "7.286",
        "ko": "355.686"
    }
},
contents: {
"req_testingreport-e1cd4": {
        type: "REQUEST",
        name: "testingReport",
path: "testingReport",
pathFormatted: "req_testingreport-e1cd4",
stats: {
    "name": "testingReport",
    "numberOfRequests": {
        "total": "12704",
        "ok": "255",
        "ko": "12449"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "495",
        "ko": "30"
    },
    "maxResponseTime": {
        "total": "21421",
        "ok": "20576",
        "ko": "21421"
    },
    "meanResponseTime": {
        "total": "1174",
        "ok": "11419",
        "ko": "964"
    },
    "standardDeviation": {
        "total": "3249",
        "ok": "5812",
        "ko": "2808"
    },
    "percentiles1": {
        "total": "253",
        "ok": "11780",
        "ko": "248"
    },
    "percentiles2": {
        "total": "653",
        "ok": "17589",
        "ko": "615"
    },
    "percentiles3": {
        "total": "4568",
        "ok": "19017",
        "ko": "2235"
    },
    "percentiles4": {
        "total": "19162",
        "ok": "19960",
        "ko": "17298"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 245,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 12449,
    "percentage": 98
},
    "meanNumberOfRequestsPerSecond": {
        "total": "362.971",
        "ok": "7.286",
        "ko": "355.686"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
