let flightData = {
  'abia' : {
    'departTime': "12:30 p.m.",
    'date': 'Feb. 28',
    'gate': "14",
    'checkin': "15 min",
    'tsa': "30 min",
    'airport': "15min",
    'baggage': 2,
    'weather': "56/42-Partly Cloudy"
  },
  'mke': {
    'departTime': "8:25 a.m.",
    'date': 'Feb. 29',
    'gate': "26",
    'checkin': "5 min",
    'tsa': "10 min",
    'airport': "45min",
    'baggage': 7,
    'weather': "32/22-Light Snow"
  },
  'mdw': {
    'departTime': "2:10 p.m.",
    'date': 'Mar. 1',
    'gate': "B6",
    'checkin': "20 min",
    'tsa': "4 min",
    'airport': "25min",
    'baggage': 3,
    'weather': "75/47-Sunny"
  }

}


$(document).ready(function() {

  $('.first').show();
  $('.second').hide();

  $('.first .card-text').on('click', function(event) {

     $('.first').hide();
     $('.second').show();

     $('.card-body').addClass('second');


     let flight = $(this).data('flight');

     let currentFlightData=flightData[flight];

     $('#departTime').html(currentFlightData.departTime)
     $('#date').html(currentFlightData.date)
     $('#gate').html(currentFlightData.gate)
     $('#checkin').html(currentFlightData.checkin)
     $('#tsa').html(currentFlightData.tsa)
     $('#airport').html(currentFlightData.airport)
     $('#baggage').html(currentFlightData.baggage)
     $('#weather').html(currentFlightData.weather)

   })

 })

  $('#home').on('click', function(event) {
    $('.first').show();
    $('.second').hide();
  }

)
