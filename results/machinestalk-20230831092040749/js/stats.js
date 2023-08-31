var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "559",
        "ok": "559",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "161",
        "ok": "161",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "percentiles1": {
        "total": "132",
        "ok": "132",
        "ko": "-"
    },
    "percentiles2": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "percentiles3": {
        "total": "413",
        "ok": "413",
        "ko": "-"
    },
    "percentiles4": {
        "total": "456",
        "ok": "456",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 100,
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
        "total": "16.667",
        "ok": "16.667",
        "ko": "-"
    }
},
contents: {
"req_string-b45cf": {
        type: "REQUEST",
        name: "string",
path: "string",
pathFormatted: "req_string-b45cf",
stats: {
    "name": "string",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "559",
        "ok": "559",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "114",
        "ok": "114",
        "ko": "-"
    },
    "percentiles1": {
        "total": "212",
        "ok": "212",
        "ko": "-"
    },
    "percentiles2": {
        "total": "285",
        "ok": "285",
        "ko": "-"
    },
    "percentiles3": {
        "total": "432",
        "ok": "432",
        "ko": "-"
    },
    "percentiles4": {
        "total": "508",
        "ok": "508",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 50,
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
        "total": "8.333",
        "ok": "8.333",
        "ko": "-"
    }
}
    },"req_string-redirect-b4ec9": {
        type: "REQUEST",
        name: "string Redirect 1",
path: "string Redirect 1",
pathFormatted: "req_string-redirect-b4ec9",
stats: {
    "name": "string Redirect 1",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "218",
        "ok": "218",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles1": {
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "percentiles3": {
        "total": "164",
        "ok": "164",
        "ko": "-"
    },
    "percentiles4": {
        "total": "204",
        "ok": "204",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 50,
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
        "total": "8.333",
        "ok": "8.333",
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
