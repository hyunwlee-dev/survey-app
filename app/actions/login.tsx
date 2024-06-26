'use server';

import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const prisma = new PrismaClient();

const SurveySchema = z.object({
  team: z.string().min(1, '팀을 입력해주세요.'),
  name: z.string().min(1, '이름을 입력해주세요.'),
});

export async function login(prevState: string | undefined, formData: FormData) {
  const validatedFields = SurveySchema.safeParse({
    team: formData.get('team'),
    name: formData.get('name'),
  });

  if (!validatedFields.success) return validatedFields.error.issues[0].message;

  const { team, name } = validatedFields.data;

  const isExist = await prisma.user.findMany({
    where: {
      team: team,
      name: name,
    },
  });

  if (!isExist.length)
    return '존재하지 않는 사용자입니다. 팀과 이름을 확인해주세요.';

  redirect(
    `/survey?team=${encodeURIComponent(team)}&name=${encodeURIComponent(name)}`,
  );
}
