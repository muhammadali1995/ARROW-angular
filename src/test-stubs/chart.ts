import { StateStats } from './../app/models/charts-data';
import * as Factory from 'factory.ts';

export const barchartDataFactory = Factory.Sync.makeFactory<StateStats>({
    jurisdiction: "New Hampshire",
    week_of_allocations: "2021-06-21T00:00:00.000",
    _1st_dose_allocations: 21420,
    _2nd_dose_allocations: 21420
});