import { Label, SingleDataSet } from 'ng2-charts';
import {ChartDataSets} from "chart.js";

export interface StateStats {
  jurisdiction: string,
  week_of_allocations: string,
  _1st_dose_allocations: number;
  _2nd_dose_allocations: number;
}


export interface BarChartData {
  labels: Label[];
  datasets: ChartDataSets[];
}

export interface PieChartData {
  labels: Label[];
  datasets: SingleDataSet;
}

export const STATES: string[] = [
    "Connecticut",
    "Maine",
    "Massachusetts",
    "New Hampshire",
    "Rhode Island",
    "Vermont",
    "New Jersey",
    "New York",
    "New York City",
    "Puerto Rico",
    "U.S. Virgin Islands",
    "Delaware",
    "District of Columbia",
    "Maryland",
    "Pennsylvania",
    "Philadelphia",
    "Virginia",
    "West Virginia",
    "Alabama",
    "Florida",
    "Georgia",
    "Kentucky",
    "Mississippi",
    "North Carolina",
    "South Carolina",
    "Tennessee",
    "Chicago",
    "Illinois",
    "Indiana",
    "Michigan",
    "Minnesota",
    "Ohio",
    "Wisconsin",
    "Arkansas",
    "Louisiana",
    "New Mexico",
    "Oklahoma",
    "Texas",
    "Iowa",
    "Kansas",
    "Missouri",
    "Nebraska",
    "Colorado",
    "Montana",
    "North Dakota",
    "South Dakota",
    "Utah",
    "Wyoming",
    "Arizona",
    "California",
    "Hawaii",
    "Nevada",
    "American Samoa",
    "Guam",
    "Marshall Islands",
    "Micronesia",
    "Mariana Islands",
    "Palau",
    "Alaska",
    "Idaho",
    "Oregon",
    "Washington",
    "Federal Entities"
];

export const WEEKS_OF_ALLOCATION = [
  '2021-06-21T00:00:00.000',
  '2021-06-14T00:00:00.000',
  '2021-06-07T00:00:00.000',
  '2021-05-31T00:00:00.000',
  '2021-05-24T00:00:00.000',
  '2021-05-17T00:00:00.000',
  '2021-05-10T00:00:00.000',
  '2021-05-03T00:00:00.000',
  '2021-04-26T00:00:00.000',
  '2021-04-19T00:00:00.000',
  '2021-04-12T00:00:00.000',
  '2021-04-05T00:00:00.000',
  '2021-03-29T00:00:00.000',
  '2021-03-22T00:00:00.000',
  '2021-03-15T00:00:00.000',
  '2021-03-08T00:00:00.000'
]
