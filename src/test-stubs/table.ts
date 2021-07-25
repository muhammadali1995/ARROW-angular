import * as Factory from "factory.ts";
import {Earthquake} from "../app/models/table-data";

export const earthquakeDataFactory = Factory.Sync.makeFactory<Earthquake>({
  depth: 102.5,
  earthquake_id: '10558649',
  magnitude: 4,
  number_of_stations: 112,
  region: "Southern Alaska",
  source: "ak",
  version: 2
});
