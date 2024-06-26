import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTeamList() {
  try {
    const teamList = await prisma.team.findMany();
    return teamList;
  } catch (error) {
    throw new Error('Unable to fetch teams');
  }
}
