
//if you need to use a string key - 

var model = {
    Egypt: 
    {
        internetData: [11.8, 13.7, 16, 18, 20, 21.6, 25.6, 26.4, 29.11, 31.7],
        electricity: [95.5, 97.7, 99.6, 100],
        techCoop: [472, 387, 181, 186]
    }
    ,

    Syria: {
        internetData: [],
        electricity: [85, 86.6, 92.7, 96.3],
        techCoop: [42, 75.3, 120, 91]
    },

    Iraq: {
        internetData: [.9, 1, .9, 1, 1.1, 2.5, 5, 7.1, 9.2, 11.3],
        electricity: [91.6, 94.5, 98, 100],
        techCoop: [8, 999, 315, 78]
    },

    Lebanon: {
        internetData: [10.1, 15, 18.7, 22.5, 30.1, 43.7, 52, 61.2, 70.5, 74.7],
        electricity: [92.8, 95, 99.9, 100],
        techCoop: [55, 104, 90, 97] 

    },

     SaudiArabia: {
        internetData:  [12.7, 19.5, 30, 36, 38, 41, 47.5, 54, 60.5, 63.7],
        electricity: [87.2, 90.9, 94,1, 97.7]

    },
    Kuwait: {
        internetData:  [25.9, 28.8, 34.8, 42, 50.8, 61.4, 65.8, 70.5, 75.5, 78.7],
        electricity: [87.2, 90.9, 94.1, 97.7]

    },

    Oman: {
        internetData: [6.7, 8.3, 16.7, 20, 26.8, 35.5, 48, 60, 66.5, 70.2],
        electricity: [87.2, 90.9, 94,1, 97.7]

    },

    Qatar: {
        internetData: [24.7, 29, 37, 44.3, 53.1, 69, 69, 69.3, 85.3, 91.5],
        electricity: [87.2, 90.9, 94.1, 97.7]

    },

    Jordan: {
        internetData: [12.9, 13.9, 20, 23, 26, 27.2, 34.9, 37, 41, 44],
        electricity: [94.8, 99.5, 99.4, 99.5],
        techCoop: [120, 125, 75, 82]

    },

}


const CHART1 = $("#lineChart");

//GLOBAL DEFAULTS

Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.title.fontSize = 30;

//

let lineChart = new Chart(CHART1, {
	type: 'line',
	data: {
    	labels: ["1990", "2000", "2010", "2012"],
    	datasets: [
        	{
            label: "سبل الحصول على الكهرباء (% من تعداد السكان)",
            fillColor: false, 
            lineTension: 0.1,
            backgroundColor: "rgba(28, 103, 97, 1)",
            borderColor: "rgba(28, 103, 97, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(28, 103, 97, 1)",
            pointBackgroundColor: "orange",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "purple",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
            spanGaps: false,
            options: {
                title: {
                    display: true,
                    text: "سبل الحصول على الكهرباء (% من تعداد السكان)"
                }
            }
        	}
    			]
    		},
});

//Electricity Event Listeners

$("#egyptElectricity").on('click', loadEgyptElectricity);
$("#syriaElectricity").on('click', loadSyriaElectricity);
$("#jordanElectricity").on('click', loadJordanElectricity);
$("#saudiElectricity").on('click', loadSaudiElectricity);
$("#omanElectricity").on('click', loadOmanElectricity);
$("#kuwaitElectricity").on('click', loadKuwaitElectricity);
$("#iraqElectricity").on('click', loadIraqElectricity);

//Internet Usage Event Listeners

$("#jordanInternet").on('click', loadJordanInternet);
$("#egyptInternet").on('click', loadEgyptInternet);
$("#saudiInternet").on('click', loadSaudiInternet);
$("#omanInternet").on('click', loadOmanInternet);
$("#kuwaitInternet").on('click', loadKuwaitInternet);
$("#iraqInternet").on('click', loadIraqInternet);

//Cooperation Event Listeners
$("#SyriaCooperation").on('click', loadSyriaCoop);
$("#JordanCooperation").on('click', loadJordanCoop);
$("#EgyptCooperation").on('click', loadEgyptCoop);
$("#IraqCooperation").on('click', loadIraqCoop);




function loadEgyptElectricity () {
    console.log('registeringClick');
    var EgyptElectricityData = model.Egypt.electricity;
    console.log(EgyptElectricityData)
    lineChart.data.datasets[0].data = EgyptElectricityData;
    lineChart.update();

};

function loadSyriaElectricity () {
    console.log('registeringClick');
    var SyriaElectricityData = model.Syria.electricity;
    console.log(SyriaElectricityData)
    lineChart.data.datasets[0].data = SyriaElectricityData;
    lineChart.update();

};

function loadJordanElectricity () {
    console.log('registeringClick');
    var JordanElectricityData = model.Jordan.electricity;
    console.log(JordanElectricityData)
    lineChart.data.datasets[0].data = JordanElectricityData;
    lineChart.update();

};

function loadSaudiElectricity () {
    console.log('registeringClick');
    var SaudiElectricityData = model.SaudiArabia.electricity;
    console.log(SaudiElectricityData)
    lineChart.data.datasets[0].data = SaudiElectricityData;
    lineChart.update();

};

function loadOmanElectricity () {
    console.log('registeringClick');
    var OmanElectricityData = model.Oman.electricity;
    console.log(OmanElectricityData)
    lineChart.data.datasets[0].data = OmanElectricityData;
    lineChart.update();

};

function loadKuwaitElectricity () {
    console.log('registeringClick');
    var KuwaitElectricityData = model.Kuwait.electricity;
    console.log(KuwaitElectricityData)
    lineChart.data.datasets[0].data = KuwaitElectricityData;
    lineChart.update();

};

function loadIraqElectricity () {
    console.log('registeringClick');
    var IraqElectricityData = model.Iraq.electricity;
    console.log(IraqElectricityData)
    lineChart.data.datasets[0].data = IraqElectricityData;
    lineChart.update();

};

function loadJordanInternet () {
     console.log('registeringClick');
    var JordanInternetData = model.Jordan.internetData;
    console.log(JordanInternetData)
    populationChart.data.datasets[0].data = JordanInternetData;
    populationChart.update();
};


function loadEgyptInternet () {
     console.log('registeringClick');
    var EgyptInternetData = model.Egypt.internetData;
    console.log(EgyptInternetData)
    populationChart.data.datasets[0].data = EgyptInternetData;
    populationChart.update();
};

function loadSaudiInternet () {
     console.log('registeringClick');
    var SaudiInternetData = model.SaudiArabia.internetData;
    console.log(SaudiInternetData)
    populationChart.data.datasets[0].data = SaudiInternetData;
    populationChart.update();
};


function loadOmanInternet () {
     console.log('registeringClick');
    var OmanInternetData = model.Oman.internetData;
    console.log(OmanInternetData)
    populationChart.data.datasets[0].data = OmanInternetData;
    populationChart.update();
};

function loadKuwaitInternet () {
     console.log('registeringClick');
    var KuwaitInternetData = model.Kuwait.internetData;
    console.log(KuwaitInternetData)
    populationChart.data.datasets[0].data = KuwaitInternetData;
    populationChart.update();
};

function loadIraqInternet () {
     console.log('registeringClick');
    var IraqInternetData = model.Iraq.internetData;
    console.log(IraqInternetData)
    populationChart.data.datasets[0].data = IraqInternetData;
    populationChart.update();
};

function loadSyriaCoop () {
     console.log('registeringClick');
    var SyriaCoopData = model.Syria.techCoop;
    console.log(SyriaCoopData)
    testChart1.data.datasets[0].data = SyriaCoopData;
    testChart1.update();
};


function loadJordanCoop () {
     console.log('registeringClick');
    var JordanCoopData = model.Jordan.techCoop;
    console.log(JordanCoopData)
    testChart1.data.datasets[0].data = JordanCoopData;
    testChart1.update();
};

function loadEgyptCoop () {
     console.log('registeringClick');
    var EgyptCoopData = model.Egypt.techCoop;
    console.log(EgyptCoopData)
    testChart1.data.datasets[0].data = EgyptCoopData;
    testChart1.update();
};

function loadIraqCoop () {
     console.log('registeringClick');
    var IraqCoopData = model.Iraq.techCoop;
    console.log(IraqCoopData)
    testChart1.data.datasets[0].data = IraqCoopData;
    testChart1.update();
};

//set value at specific index,  use it as =  OR we can just push 




//POPULATION CHART
var popChart = $("#populationGrowthChart");
let populationChart = new Chart(popChart, {
	type: 'bar',
	data: {
    	labels: ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
        datasets: [
        	{
            label: "مستخدمو الإنترنت (لكل 100 شخص)",
        	fillColor: "rgba(220,220,220,0.5)",
            fillColor: "rgba(220,220,220,0.5)", 
            strokeColor: "rgba(220,220,220,0.8)", 
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            lineTension: 0.1,
            backgroundColor: "rgba(200, 109, 129,1)",
            borderColor: "rgba(200, 109, 129,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255, 255, 255,1)",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 255, 255, 1",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
            spanGaps: false,
              options: {
                title: {
                    display: true,
                    text: "مستخدمو الإنترنت (لكل 100 شخص)"
                }
            
        	}
        }
    			]
    		},
});

var testChart = $('#test');
let testChart1 = new Chart(testChart, {
    type: 'line',
    data: {
        labels: ["2000", "2005", "2010", "2014"],
        datasets: [
            {
            label: "منح التعاون الفني",
            fillColor: false, 
            lineTension: 0.1,
            backgroundColor: "rgba(56, 51, 70, 1)",
            borderColor: "rgba(56, 51, 70, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba (56, 51, 70, 1)",
            pointBackgroundColor: "orange",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "purple",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
            spanGaps: false,
            options: {
                 scales: {
                    yAxes: [{
                        ticks: {
                            max: 500,
                            min: 0,
                            stepSize: 100}
                        }]
                    },
                title: {
                    display: true,
                    text: "منح التعاون الفني",

                }
            }
            }
                ]
            },
});









