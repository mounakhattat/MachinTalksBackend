var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "286",
        "ok": "286",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4540",
        "ok": "4540",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1521",
        "ok": "1521",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1374",
        "ok": "1374",
        "ko": "-"
    },
    "percentiles1": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2920",
        "ok": "2920",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3579",
        "ok": "3579",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4295",
        "ok": "4295",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 21,
    "percentage": 53
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 18,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    }
},
contents: {
"req_20-98f13": {
        type: "REQUEST",
        name: "20",
path: "20",
pathFormatted: "req_20-98f13",
stats: {
    "name": "20",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "286",
        "ok": "286",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "339",
        "ok": "339",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles1": {
        "total": "330",
        "ok": "330",
        "ko": "-"
    },
    "percentiles2": {
        "total": "357",
        "ok": "357",
        "ko": "-"
    },
    "percentiles3": {
        "total": "442",
        "ok": "442",
        "ko": "-"
    },
    "percentiles4": {
        "total": "449",
        "ok": "449",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    }
}
    },"req_20-redirect-1-70e09": {
        type: "REQUEST",
        name: "20 Redirect 1",
path: "20 Redirect 1",
pathFormatted: "req_20-redirect-1-70e09",
stats: {
    "name": "20 Redirect 1",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "693",
        "ok": "693",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4540",
        "ok": "4540",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2702",
        "ok": "2702",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "993",
        "ok": "993",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2939",
        "ok": "2939",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3370",
        "ok": "3370",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3943",
        "ok": "3943",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4421",
        "ok": "4421",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 5
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 18,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "4",
        "ko": "-"
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
