'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { TeamArray } from '@constants';

const SurveySchema = z.object({
  team: z.string().min(1, '팀을 선택해주세요.'),
  name: z.string().min(1, '이름을 입력해주세요.'),
});

export async function surveyAccess(
  prevState: string | undefined,
  formData: FormData,
) {
  const validatedFields = SurveySchema.safeParse({
    team: formData.get('team'),
    name: formData.get('name'),
  });

  if (!validatedFields.success) return validatedFields.error.issues[0].message;

  const { team, name } = validatedFields.data;

  redirect(
    `/survey?team=${encodeURIComponent(TeamArray[Number(team)])}&name=${encodeURIComponent(name)}`,
  );
}
