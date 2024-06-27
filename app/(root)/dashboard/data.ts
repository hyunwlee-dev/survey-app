import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error('Unable to fetch users');
  }
}

export async function getTeamScoresSum() {
  const groupUsers = await prisma.user.groupBy({
    by: ['team_id'],
    _sum: {
      score: true,
    },
  });

  const teams = await prisma.team.findMany();

  const scoresSum = teams.map(team => {
    const group = groupUsers.find(group => group.team_id === team.id);
    return {
      team: team.name,
      sum: group ? group._sum?.score || 0 : 0,
    };
  });

  return scoresSum;
}

export async function getTeamScoresAverage() {
  const groupUsers = await prisma.user.groupBy({
    by: ['team_id'],
    _sum: {
      score: true,
    },
    _count: {
      team_id: true,
    },
  });

  const teams = await prisma.team.findMany();

  const scoresAverage = teams.map(team => {
    const group = groupUsers.find(group => group.team_id === team.id);
    return {
      team: team.name,
      average: group ? (group._sum?.score || 0) / group._count.team_id : 0,
    };
  });

  return scoresAverage;
}

export async function getTeamScoresStandardDeviation() {
  const teams = await prisma.team.findMany({
    include: {
      user: true,
    },
  });

  return teams.map(team => {
    const scores = team.user.map(user => user.score);
    const mean =
      scores.reduce((acc, score) => acc + score, 0) / scores.length || 0;
    const variance =
      scores.reduce((acc, score) => acc + Math.pow(score - mean, 2), 0) /
        scores.length || 0;
    const standardDeviation = Math.sqrt(variance);

    return {
      team: team.name,
      standardDeviation: standardDeviation,
    };
  });
}
