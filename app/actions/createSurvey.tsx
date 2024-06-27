'use server';

import { PrismaClient } from '@prisma/client';
import { TeamArray } from '@constants';
import type { SurveyInfoType } from '@types';
import { RegionType } from '@types';

const prisma = new PrismaClient();

export async function createSurvey({ team, name, score }: SurveyInfoType) {
  await prisma.user.create({
    data: {
      team_id: TeamArray.indexOf(team as RegionType),
      name,
      score,
    },
  });
}
