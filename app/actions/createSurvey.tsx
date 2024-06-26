'use server';

import { PrismaClient } from '@prisma/client';
import type { SurveyInfoType } from '@types';

const prisma = new PrismaClient();

export async function createSurvey({ team, name, score }: SurveyInfoType) {
  await prisma.user.create({
    data: {
      team,
      name,
      score,
    },
  });
}
