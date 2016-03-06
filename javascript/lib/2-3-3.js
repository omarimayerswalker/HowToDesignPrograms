'use strict';

function totalProfit(attendees) {
  const ticketPrice = 5;
  const performaceCost = 20;
  const attendeeCost = .50;

  return ((ticketPrice * attendees) - performaceCost - (attendeeCost * attendees)).toFixed(2);
}

console.log(totalProfit(10));
