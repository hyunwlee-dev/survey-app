import { Survey } from '@constants';

export type ServicesType = typeof Survey.SERVICE.OPTIONS;

export type FacilitiesType = typeof Survey.FACILITY.OPTIONS;

export type SurveyType = {
  service: ServicesType;
  revisit: string;
  facility: FacilitiesType;
};
