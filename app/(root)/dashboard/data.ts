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
  const teams = await prisma.team.findMany({
    include: {
      user: true,
    },
  });

  const scoresSum = teams.map(team => ({
    team: team.name,
    sum: team.user.reduce((acc, user) => acc + user.score, 0),
  }));

  const higherSumTeam = scoresSum.reduce(
    (cal, curr) => (curr.sum > cal.sum ? curr : cal),
    { team: '', sum: 0 },
  );

  return {
    scoresSum,
    higherSumTeam: higherSumTeam.team,
  };
}

export async function getTeamScoresAverage() {
  const teams = await prisma.team.findMany({
    include: {
      user: true,
    },
  });

  return teams.map(team => {
    const sum = team.user.reduce((acc, user) => acc + user.score, 0);
    const average = sum / team.user.length || 0;

    return {
      team: team.name,
      average: average,
    };
  });
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
